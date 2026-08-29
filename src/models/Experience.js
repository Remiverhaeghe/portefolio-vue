/**
 * Modèle représentant une expérience professionnelle.
 */
export class Experience {
  constructor({
    title,
    company,
    period,
    description = '',
    responsibilities = [],
    technologies = [],
    achievements = [],
  }) {
    // Informations principales du poste.
    this.title = title
    this.company = company
    this.period = period

    // Présentation du contexte professionnel.
    this.description = description

    // Responsabilités exercées.
    this.responsibilities = responsibilities

    // Technologies et outils utilisés.
    this.technologies = technologies

    // Réalisations et résultats significatifs.
    this.achievements = achievements
  }

  /**
   * Indique si l'expérience possède des réalisations à présenter.
   */
  hasAchievements() {
    return this.achievements.length > 0
  }
}