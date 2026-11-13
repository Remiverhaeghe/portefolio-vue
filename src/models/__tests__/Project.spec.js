import { describe, expect, it } from 'vitest'

import { Project } from '@/models/Project.js'
import { projects } from '@/data/projects.js'

describe('Project', () => {
  it('appartient à une famille de technologies seulement si elle est listée', () => {
    const project = new Project({ title: 'Test', stack: ['Python', 'Flutter'] })

    expect(project.matchesStack('Python')).toBe(true)
    expect(project.matchesStack('Flutter')).toBe(true)
    expect(project.matchesStack('PHP')).toBe(false)
  })

  it('indique la présence de captures d’écran', () => {
    expect(new Project({ title: 'Sans' }).hasImages()).toBe(false)

    const avec = new Project({
      title: 'Avec',
      images: [{ src: '/a.png', alt: 'Une capture' }],
    })

    expect(avec.hasImages()).toBe(true)
  })
})

describe('Données des projets', () => {
  it('renseignent une famille de technologies pour chaque projet', () => {
    for (const project of projects) {
      expect(project.stack.length, project.title).toBeGreaterThan(0)
    }
  })

  it('décrivent chaque capture par un texte alternatif', () => {
    for (const project of projects) {
      for (const image of project.images) {
        expect(image.alt, project.title).not.toBe('')
        expect(image.src, project.title).toContain('images/projects/')
      }
    }
  })

  it('ont un titre unique et un dépôt GitHub public', () => {
    const titles = projects.map((project) => project.title)

    expect(new Set(titles).size).toBe(titles.length)

    for (const project of projects) {
      expect(project.githubUrl, project.title).toMatch(
        /^https:\/\/github\.com\/Remiverhaeghe\//,
      )
    }
  })
})
