import { Profile } from '@/models/Profile.js'

/**
 * Données principales du profil professionnel.
 */
export const profile = new Profile({
  // Identité.
  firstName: 'Rémi',
  lastName: 'Verhaeghe',

  // Positionnement professionnel.
  title: 'Développeur Java',
  shortTitle: 'Applications métier · Expérience industrielle',

  // Présentation courte.
  introduction:
    'Je développe des applications métier en Java depuis 2024, après onze ans à organiser la maintenance et la production ferroviaire à la SNCF. Je cherche une équipe où la compréhension du métier compte autant que la qualité du code.',

  // Présentation détaillée.
  about: [
    'Chez DSD System, je fais évoluer des applications métier Java / Spring pour l’industrie : analyse du besoin, conception, développement, interfaces avec des systèmes externes et optimisation SQL.',
    'Avant cela, j’ai passé onze ans à la SNCF, en maintenance, production, planification et pilotage de projets, jusqu’à encadrer des équipes de quinze personnes.',
    'De ce parcours, je garde l’habitude de partir du terrain : comprendre qui utilise l’outil, ce qui le bloque, et livrer quelque chose de fiable plutôt que de spectaculaire.',
  ],

  // Informations affichées dans le Hero.
  focus: [
    {
      label: 'Expertise',
      icon: 'star',
      value: 'Java',
    },
    {
      label: 'Domaine',
      icon: 'layers',
      value: 'Applications métier',
    },
    {
      label: 'Environnement',
      icon: 'building',
      value: 'Industrie',
    },
    {
      label: 'Orientation',
      icon: 'compass',
      value: 'Full-Stack',
    },
  ],

  // Synthèse du profil.
  summary: [
    {
      label: 'Expérience',
      value: 'Développement logiciel',
    },
    {
      label: 'Développement',
      value: 'Java / Spring / SQL',
    },
    {
      label: 'Métier',
      value: 'Applications métier',
    },
    {
      label: 'Environnement',
      value: 'Industrie',
    },
    {
      label: 'Approche',
      value: 'Analyse & conception',
    },
    {
      label: 'Orientation',
      value: 'Développement Full-Stack',
    },
  ],

  // Informations de contact.
  location: 'France',
  email: 'remi.verhaeghe59@gmail.com',

  // Réseaux professionnels.
  github: 'https://github.com/remiverhaeghe',
  linkedin: 'https://www.linkedin.com/in/remi-verhaeghe-99a532121',

  // CV.
  cvUrl: '',
})
