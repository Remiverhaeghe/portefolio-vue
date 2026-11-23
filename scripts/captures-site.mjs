/**
 * Photographie le site construit (dist/) en trois formats : bureau clair, bureau sombre, téléphone.
 *
 * Lancé par la CI avec playwright installé hors du dépôt (le script est copié à côté de lui) :
 *   SITE_URL=http://localhost:4173/portefolio-vue/ CAPTURES_DIR=captures node captures-site.mjs
 * Les images servent à repérer à l'œil une régression de mise en page ; elles ne sont pas versionnées.
 */
import { mkdir } from 'node:fs/promises'
import { join } from 'node:path'

import { chromium } from 'playwright'

const URL_SITE = process.env.SITE_URL ?? 'http://localhost:4173/portefolio-vue/'
const DOSSIER = process.env.CAPTURES_DIR ?? 'captures'

const FORMATS = [
  { nom: 'bureau-clair', viewport: { width: 1280, height: 800 }, colorScheme: 'light' },
  { nom: 'bureau-sombre', viewport: { width: 1280, height: 800 }, colorScheme: 'dark' },
  { nom: 'telephone', viewport: { width: 390, height: 844 }, colorScheme: 'light' },
]

await mkdir(DOSSIER, { recursive: true })
const vNavigateur = await chromium.launch()
try {
  for (const vFormat of FORMATS) {
    const vContexte = await vNavigateur.newContext({
      viewport: vFormat.viewport,
      colorScheme: vFormat.colorScheme,
      reducedMotion: 'reduce',
    })
    const vPage = await vContexte.newPage()
    const vErreurs = []
    vPage.on('pageerror', (pErreur) => vErreurs.push(pErreur.message))
    await vPage.goto(URL_SITE, { waitUntil: 'networkidle' })
    if (vErreurs.length > 0) {
      throw new Error(`${vFormat.nom} : erreur dans la page : ${vErreurs.join(' ; ')}`)
    }
    await vPage.screenshot({ path: join(DOSSIER, `${vFormat.nom}.png`), fullPage: true })
    console.log(`Capture ${vFormat.nom}.png`)
    await vContexte.close()
  }
} finally {
  await vNavigateur.close()
}
