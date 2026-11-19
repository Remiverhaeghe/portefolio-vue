/**
 * Captures d'Atelier recopiées dans `src/assets/captures/atelier/` avant le build.
 *
 * Les fichiers ne sont pas versionnés : `scripts/captures-atelier.mjs` les télécharge
 * depuis le dépôt Atelier. Une capture absente est simplement retirée de l'affichage.
 */

// Vite donne l'adresse finale de chaque image (sous-chemin GitHub Pages compris).
const URLS_FICHIERS = import.meta.glob('../assets/captures/atelier/*.png', {
  eager: true,
  import: 'default',
})

/**
 * Associe le nom d'une capture (« 15-rampants ») à son adresse.
 */
export function indexerUrls(pUrlsParChemin) {
  const rIndex = {}
  for (const [vChemin, vUrl] of Object.entries(pUrlsParChemin)) {
    const vNom = vChemin.split('/').pop().replace(/\.png$/, '')
    rIndex[vNom] = vUrl
  }
  return rIndex
}

/**
 * Garde, dans l'ordre donné, les captures dont le fichier est présent, avec leur adresse.
 */
export function capturesDisponibles(pCaptures, pIndex) {
  const rCaptures = pCaptures
    .filter((pCapture) => pIndex[pCapture.nom])
    .map((pCapture) => ({ ...pCapture, src: pIndex[pCapture.nom] }))
  return rCaptures
}

export const indexCapturesAtelier = indexerUrls(URLS_FICHIERS)
