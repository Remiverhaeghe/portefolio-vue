import { describe, expect, it } from 'vitest'

import { Skill, SKILL_LEVELS, SKILL_LEVEL_MAX } from '@/models/Skill.js'

describe('Skill', () => {
  it.each([
    [0, 2],
    [1, 2],
    [3, 3],
    [3.6, 4],
    [5, 5],
    [8, 5],
  ])('borne le niveau %s à %s', (level, expected) => {
    expect(new Skill('Java', level).level).toBe(expected)
  })

  it('a un libellé et une classe pour chaque niveau possible', () => {
    for (let level = 0; level <= SKILL_LEVEL_MAX + 1; level++) {
      const skill = new Skill('Java', level)

      expect(skill.getLabel()).toBeTruthy()
      expect(skill.getLevelClass()).toMatch(/^skill_level_/)
    }
  })

  it('définit des niveaux uniques', () => {
    const values = SKILL_LEVELS.map((level) => level.value)

    expect(new Set(values).size).toBe(values.length)
  })
})
