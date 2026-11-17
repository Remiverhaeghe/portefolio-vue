import { describe, expect, it } from 'vitest'
import { projects } from '@/data/projects.js'
import { stats } from '@/data/stats.js'

describe('Chiffres clés et projets', () => {
  it('annonce autant de projets que la section Projets en présente', () => {
    const vProjectStat = stats.find((pStat) => pStat.icon === 'folders')
    expect(vProjectStat.value).toBe(String(projects.length))
  })
})
