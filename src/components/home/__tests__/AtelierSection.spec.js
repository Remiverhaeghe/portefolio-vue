// @vitest-environment jsdom
import { beforeAll, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'

import AtelierSection from '@/components/home/AtelierSection.vue'
import { capturesCarnet, carnet } from '@/data/atelierCarnet.js'

beforeAll(() => {
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      observe() {}
      disconnect() {}
    },
  )
})

describe('AtelierSection', () => {
  it('montre seulement les croquis recopiés, dans l’ordre des données', () => {
    const [vPremier, vSecond] = capturesCarnet
    const wrapper = mount(AtelierSection, {
      props: {
        index: { [vSecond.nom]: '/b.png', [vPremier.nom]: '/a.png' },
      },
    })

    const vImages = wrapper.findAll('.atelier_card img')

    expect(vImages.map((pImage) => pImage.attributes('src'))).toEqual(['/a.png', '/b.png'])
    expect(wrapper.find('.atelier_empty').exists()).toBe(false)
  })

  it('renvoie vers le dépôt quand aucun croquis n’a été recopié', () => {
    const wrapper = mount(AtelierSection, { props: { index: {} } })

    expect(wrapper.findAll('.atelier_card')).toHaveLength(0)
    expect(wrapper.find('.atelier_empty').text()).toBe(carnet.vide)
    expect(wrapper.find('.atelier_link').attributes('href')).toBe(carnet.lienDepot)
  })
})
