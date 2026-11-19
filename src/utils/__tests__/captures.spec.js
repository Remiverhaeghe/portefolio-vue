import { describe, expect, it } from 'vitest'
import { capturesDisponibles, indexerUrls } from '@/utils/captures.js'
import {
  capturesARecuperer,
  capturesCarnet,
  capturesCarte,
  urlCaptureBrute,
} from '@/data/atelierCarnet.js'

describe('Captures d’Atelier', () => {
  it('retrouve le nom de chaque capture depuis le chemin du fichier', () => {
    const vIndex = indexerUrls({
      '../assets/captures/atelier/15-rampants.png': '/portefolio-vue/assets/15-rampants-abc.png',
    })

    expect(vIndex).toEqual({ '15-rampants': '/portefolio-vue/assets/15-rampants-abc.png' })
  })

  it('omet une capture absente et garde l’ordre donné', () => {
    const vCaptures = [{ nom: 'b' }, { nom: 'absente' }, { nom: 'a' }]

    const vResultat = capturesDisponibles(vCaptures, { a: '/a.png', b: '/b.png' })

    expect(vResultat).toEqual([
      { nom: 'b', src: '/b.png' },
      { nom: 'a', src: '/a.png' },
    ])
  })

  it('recopie chaque capture une seule fois, carte et carnet compris', () => {
    const vNoms = capturesARecuperer()

    expect(new Set(vNoms).size).toBe(vNoms.length)
    for (const vCapture of [...capturesCarte, ...capturesCarnet]) {
      expect(vNoms).toContain(vCapture.nom)
    }
  })

  it('garde le format des noms de docs/captures', () => {
    for (const vNom of capturesARecuperer()) {
      expect(vNom).toMatch(/^\d{2}-[a-z0-9-]+$/)
    }
  })

  it('lit les captures sur la branche principale du dépôt public', () => {
    expect(urlCaptureBrute('15-rampants')).toBe(
      'https://raw.githubusercontent.com/Remiverhaeghe/atelier/main/docs/captures/15-rampants.png',
    )
  })

  it('donne un titre et une légende à chaque croquis', () => {
    for (const vCroquis of capturesCarnet) {
      expect(vCroquis.titre).toBeTruthy()
      expect(vCroquis.legende).toBeTruthy()
    }
  })
})
