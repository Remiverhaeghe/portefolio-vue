import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

// La page 404 est copiée telle quelle par Vite : ses chemins ne passent pas par BASE_URL
const aPage = readFileSync(new URL('../../../public/404.html', import.meta.url), 'utf-8')

describe('Page introuvable', () => {
  it('ramène au portfolio sous le sous-chemin de GitHub Pages', () => {
    expect(aPage).toContain('href="/portefolio-vue/"')
    expect(aPage).toContain('href="/portefolio-vue/favicon.ico"')
  })

  it('reste en français et hors des moteurs de recherche', () => {
    expect(aPage).toContain('<html lang="fr">')
    expect(aPage).toContain('<meta name="robots" content="noindex">')
  })
})
