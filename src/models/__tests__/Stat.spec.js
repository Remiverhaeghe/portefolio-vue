import { describe, expect, it } from 'vitest'

import { stats } from '@/data/stats.js'

describe('Chiffres clés', () => {
  it('ont une valeur, un libellé et une icône', () => {
    for (const stat of stats) {
      expect(stat.value, stat.label).not.toBe('')
      expect(stat.label, stat.value).not.toBe('')
      expect(stat.icon, stat.label).not.toBe('')
    }
  })
})
