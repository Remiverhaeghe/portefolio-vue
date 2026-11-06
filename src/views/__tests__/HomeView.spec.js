// @vitest-environment jsdom
import { beforeAll, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'

import HomeView from '@/views/HomeView.vue'
import { sections } from '@/data/sections.js'
import { profile } from '@/data/profile.js'

beforeAll(() => {
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      observe() {}
      disconnect() {}
    },
  )
})

describe('HomeView', () => {
  it('rend une ancre pour chaque section de la navigation, dans le même ordre', () => {
    const wrapper = mount(HomeView)

    const renderedIds = wrapper
      .findAll('main > [id]')
      .map((element) => element.attributes('id'))

    expect(renderedIds).toEqual(
      Object.values(sections).map((section) => section.anchor),
    )
  })

  it('affiche le nom complet dans le hero', () => {
    const wrapper = mount(HomeView)

    expect(wrapper.find('.hero_name').text()).toBe(profile.getFullName())
  })

  it('ne contient aucun lien interne vers une ancre absente', () => {
    const wrapper = mount(HomeView)

    const ids = new Set(
      wrapper.findAll('[id]').map((element) => element.attributes('id')),
    )

    const anchors = wrapper
      .findAll('a[href^="#"]')
      .map((link) => link.attributes('href').slice(1))

    expect(anchors.filter((anchor) => !ids.has(anchor))).toEqual([])
  })
})
