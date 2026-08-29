import { Career } from '@/models/Career.js'

/**
 * Objectif professionnel présenté dans le portfolio.
 */
export const career = new Career({
  title: 'Développeur logiciel / Ingénieur développement',

  description:
    'Mettre à profit mon expérience du développement Java, des applications métier et des environnements industriels au sein d’une équipe technique où je pourrai contribuer à des projets concrets et poursuivre mon évolution dans le développement logiciel.',

  targets: [
    'Développement Java',
    'Développement d’applications métier',
    'Développement Full-Stack',
    'Projets techniques à forte dimension métier',
  ],
})
