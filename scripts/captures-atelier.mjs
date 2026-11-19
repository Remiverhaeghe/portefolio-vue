/**
 * Recopie les captures d'Atelier (docs/captures du dépôt public) dans src/assets.
 *
 * Lancé avant chaque build (`prebuild`), sans jeton : le dépôt est public.
 * - capture absente du dépôt (404) : avertissement, le site l'omet ;
 * - erreur réseau en CI : échec, pour ne pas publier un site sans captures ;
 * - erreur réseau en local : avertissement, les fichiers déjà là sont gardés.
 */
import { mkdir, readdir, rm, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

import { capturesARecuperer, urlCaptureBrute } from '../src/data/atelierCarnet.js'

const DOSSIER = fileURLToPath(new URL('../src/assets/captures/atelier/', import.meta.url))
const EN_CI = Boolean(process.env.CI)

function avertir(pMessage) {
  // Annotation visible sur la page du passage GitHub Actions
  console.warn(EN_CI ? `::warning::${pMessage}` : pMessage)
}

async function recuperer(pNom) {
  const vReponse = await fetch(urlCaptureBrute(pNom))
  if (vReponse.status === 404) {
    avertir(`Capture ${pNom}.png absente du dépôt Atelier : nom changé ?`)
    return false
  }
  if (!vReponse.ok) {
    throw new Error(`HTTP ${vReponse.status} pour ${pNom}.png`)
  }
  await writeFile(`${DOSSIER}${pNom}.png`, Buffer.from(await vReponse.arrayBuffer()))
  return true
}

async function main() {
  const vNoms = capturesARecuperer()
  await mkdir(DOSSIER, { recursive: true })

  // Une capture retirée de la liste ne doit pas rester dans le site
  for (const vFichier of await readdir(DOSSIER)) {
    if (!vNoms.includes(vFichier.replace(/\.png$/, ''))) {
      await rm(`${DOSSIER}${vFichier}`)
    }
  }

  let vRecuperees = 0
  for (const vNom of vNoms) {
    try {
      if (await recuperer(vNom)) {
        vRecuperees += 1
      }
    } catch (vErreur) {
      if (EN_CI) {
        console.error(`Captures d'Atelier : ${vErreur.message}`)
        process.exit(1)
      }
      avertir(`Captures d'Atelier non recopiées (${vErreur.message}), fichiers locaux gardés`)
      return
    }
  }
  console.log(`Captures d'Atelier : ${vRecuperees} sur ${vNoms.length} recopiées`)
}

await main()
