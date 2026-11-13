// @vitest-environment jsdom
import { beforeAll, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'

import ProjectsSection from '@/components/home/ProjectsSection.vue'
import { projects } from '@/data/projects.js'

beforeAll(() => {
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      observe() {}
      disconnect() {}
    },
  )
})

function filterButton(wrapper, label) {
  return wrapper
    .findAll('.projects_filter')
    .find((button) => button.text() === label)
}

describe('ProjectsSection', () => {
  it('affiche tous les projets par défaut', () => {
    const wrapper = mount(ProjectsSection)

    expect(wrapper.findAll('.project')).toHaveLength(projects.length)
    expect(filterButton(wrapper, 'Tous').attributes('aria-pressed')).toBe('true')
  })

  it('ne garde que les projets de la famille choisie', async () => {
    const wrapper = mount(ProjectsSection)

    await filterButton(wrapper, 'PHP').trigger('click')

    const expected = projects.filter((project) => project.matchesStack('PHP'))

    expect(wrapper.findAll('.project')).toHaveLength(expected.length)
    expect(filterButton(wrapper, 'PHP').attributes('aria-pressed')).toBe('true')
    expect(filterButton(wrapper, 'Tous').attributes('aria-pressed')).toBe('false')
  })

  it('revient à tous les projets avec « Tous »', async () => {
    const wrapper = mount(ProjectsSection)

    await filterButton(wrapper, 'Java').trigger('click')
    await filterButton(wrapper, 'Tous').trigger('click')

    expect(wrapper.findAll('.project')).toHaveLength(projects.length)
  })

  it('propose un filtre pour chaque famille de technologies', () => {
    const wrapper = mount(ProjectsSection)
    const labels = wrapper.findAll('.projects_filter').map((button) => button.text())
    const families = new Set(projects.flatMap((project) => project.stack))

    expect(labels).toEqual(['Tous', ...families])
  })

  it('ouvre une capture en grand puis la ferme', async () => {
    const wrapper = mount(ProjectsSection)

    expect(wrapper.find('.lightbox_image').exists()).toBe(false)

    await wrapper.find('.project_shot').trigger('click')

    expect(wrapper.find('.lightbox_image').exists()).toBe(true)

    await wrapper.find('.lightbox_close').trigger('click')

    expect(wrapper.find('.lightbox_image').exists()).toBe(false)
  })
})
