/**
 * Frise chronologique : transforme les périodes des expériences en barres positionnées sur un axe d'années.
 *
 * Les périodes s'écrivent « 2010 - 2020 », « 2021 » ou « 2022 - Aujourd’hui » (voir experiences.js).
 */

const ANNEE = /\b(?:19|20)\d{2}\b/g

/**
 * Lit une période et renvoie ses années de début et de fin, ou null si elle ne contient aucune année.
 * « Aujourd’hui » vaut l'année courante.
 */
export function lirePeriode(pPeriode, pAnneeCourante) {
  const vAnnees = [...pPeriode.matchAll(ANNEE)].map((pMatch) => Number(pMatch[0]))
  if (vAnnees.length === 0) {
    return null
  }
  const vDebut = vAnnees[0]
  const vEnCours = /aujourd/i.test(pPeriode)
  const vFin = vEnCours ? pAnneeCourante : (vAnnees[1] ?? vDebut)
  return { debut: vDebut, fin: Math.max(vDebut, vFin), enCours: vEnCours }
}

/**
 * Barres de la frise : position et largeur en pourcentage de l'axe, et couloir pour les périodes qui se
 * chevauchent. L'axe va du début de la première année à la fin de la dernière.
 */
export function construireFrise(pExperiences, pAnneeCourante) {
  const vPeriodes = pExperiences
    .map((pExperience, pIndex) => ({
      index: pIndex,
      experience: pExperience,
      periode: lirePeriode(pExperience.period, pAnneeCourante),
    }))
    .filter((pElement) => pElement.periode !== null)
  if (vPeriodes.length === 0) {
    return { debut: pAnneeCourante, fin: pAnneeCourante + 1, annees: [], barres: [], couloirs: 0 }
  }

  const vDebut = Math.min(...vPeriodes.map((pElement) => pElement.periode.debut))
  const vFin = Math.max(...vPeriodes.map((pElement) => pElement.periode.fin)) + 1
  const vTotal = vFin - vDebut

  // Couloirs : chaque barre prend le premier couloir dont la dernière barre finit avant son début
  const vFinsDeCouloir = []
  const vBarres = [...vPeriodes]
    .sort((pA, pB) => pA.periode.debut - pB.periode.debut || pA.index - pB.index)
    .map((pElement) => {
      let vCouloir = vFinsDeCouloir.findIndex((pFin) => pFin < pElement.periode.debut)
      if (vCouloir === -1) {
        vCouloir = vFinsDeCouloir.length
      }
      vFinsDeCouloir[vCouloir] = pElement.periode.fin
      return {
        index: pElement.index,
        titre: pElement.experience.title,
        entreprise: pElement.experience.company,
        periode: pElement.experience.period,
        formation: pElement.experience.isTraining(),
        enCours: pElement.periode.enCours,
        gauche: ((pElement.periode.debut - vDebut) / vTotal) * 100,
        largeur: ((pElement.periode.fin + 1 - pElement.periode.debut) / vTotal) * 100,
        couloir: vCouloir,
      }
    })

  const vAnnees = Array.from({ length: vTotal }, (_, pPosition) => vDebut + pPosition)
  return { debut: vDebut, fin: vFin, annees: vAnnees, barres: vBarres, couloirs: vFinsDeCouloir.length }
}
