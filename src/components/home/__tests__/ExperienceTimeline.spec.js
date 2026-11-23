// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import ExperienceTimeline from '@/components/home/ExperienceTimeline.vue'
import { experiences } from '@/data/experiences.js'

describe('ExperienceTimeline', () => {
  const monter = () =>
    mount(ExperienceTimeline, { props: { experiences, anneeCourante: 2026 } })

  it('montre une barre par expérience, liée à sa carte', () => {
    const vLiens = monter().findAll('.frise_barre')

    expect(vLiens).toHaveLength(experiences.length)
    expect(vLiens.map((pLien) => pLien.attributes('href'))).toEqual(
      expect.arrayContaining(experiences.map((_, pIndex) => `#experience-${pIndex}`)),
    )
  })

  it('distingue la formation et l’expérience en cours', () => {
    const vWrapper = monter()

    expect(vWrapper.findAll('.frise_barre_formation')).toHaveLength(
      experiences.filter((pExperience) => pExperience.isTraining()).length,
    )
    expect(vWrapper.findAll('.frise_barre_en_cours')).toHaveLength(1)
  })

  it('graduations tous les deux ans quand la frise dépasse huit ans', () => {
    const vAnnees = monter()
      .findAll('.frise_annee')
      .map((pAnnee) => pAnnee.text())

    expect(vAnnees[0]).toBe('2010')
    expect(vAnnees[1]).toBe('2012')
  })

  it('ne montre rien sans expérience', () => {
    const vWrapper = mount(ExperienceTimeline, { props: { experiences: [] } })

    expect(vWrapper.find('.frise').exists()).toBe(false)
  })
})
