import { describe, expect, it } from 'vitest'

import { experiences } from '@/data/experiences.js'
import { construireFrise, lirePeriode } from '@/data/timeline.js'

const stage = (pTitre, pPeriode, pFormation = false) => ({
  title: pTitre,
  company: pTitre,
  period: pPeriode,
  isTraining: () => pFormation,
})

describe('lirePeriode', () => {
  it('lit une période entre deux années', () => {
    expect(lirePeriode('2010 - 2020', 2026)).toEqual({ debut: 2010, fin: 2020, enCours: false })
  })

  it('lit une année seule comme une période d’un an', () => {
    expect(lirePeriode('2021', 2026)).toEqual({ debut: 2021, fin: 2021, enCours: false })
  })

  it('lit « Aujourd’hui » comme l’année courante', () => {
    expect(lirePeriode('2022 - Aujourd’hui', 2026)).toEqual({ debut: 2022, fin: 2026, enCours: true })
  })

  it('renvoie null sans année', () => {
    expect(lirePeriode('Depuis toujours', 2026)).toBeNull()
  })
})

describe('construireFrise', () => {
  it('place les barres sur un axe qui couvre toutes les années, fin comprise', () => {
    const vFrise = construireFrise([stage('A', '2020 - 2021'), stage('B', '2022')], 2026)

    expect(vFrise.debut).toBe(2020)
    expect(vFrise.fin).toBe(2023)
    expect(vFrise.annees).toEqual([2020, 2021, 2022])
    expect(vFrise.barres[0]).toMatchObject({ gauche: 0, couloir: 0 })
    expect(vFrise.barres[0].largeur).toBeCloseTo(66.67, 1)
    expect(vFrise.barres[1].gauche).toBeCloseTo(66.67, 1)
    expect(vFrise.barres[1].largeur).toBeCloseTo(33.33, 1)
    expect(vFrise.couloirs).toBe(1)
  })

  it('met les périodes qui se chevauchent sur des couloirs différents', () => {
    const vFrise = construireFrise([stage('A', '2021 - 2022'), stage('B', '2021'), stage('C', '2023')], 2026)

    expect(vFrise.barres.map((pBarre) => pBarre.couloir)).toEqual([0, 1, 0])
    expect(vFrise.couloirs).toBe(2)
  })

  it('garde l’index de chaque expérience pour le lien vers sa carte', () => {
    const vFrise = construireFrise([stage('A', '2015'), stage('B', '2010')], 2026)

    expect(vFrise.barres.map((pBarre) => pBarre.index)).toEqual([1, 0])
  })

  it('ignore une expérience sans année et renvoie une frise vide sans données', () => {
    expect(construireFrise([stage('A', 'inconnue')], 2026).barres).toEqual([])
    expect(construireFrise([], 2026)).toMatchObject({ barres: [], couloirs: 0 })
  })

  it('reprend toutes les expériences du portfolio', () => {
    const vFrise = construireFrise(experiences, 2026)

    expect(vFrise.barres).toHaveLength(experiences.length)
    expect(vFrise.debut).toBe(2010)
    expect(vFrise.fin).toBe(2027)
  })
})
