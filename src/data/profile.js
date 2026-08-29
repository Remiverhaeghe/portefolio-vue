import { Profile } from '@/models/Profile.js'

/**
 * Données principales du profil professionnel.
 */
export const profile = new Profile({
  // Identité.
  firstName: 'Rémi',
  lastName: 'Verhaeghe',

  // Positionnement professionnel.
  title: 'Développeur Java / Profil technique & industriel',
  shortTitle: 'Développeur logiciel',

  // Présentation courte.
  introduction:
    'Profil technique polyvalent associant développement logiciel, applications métier et expérience des environnements industriels et opérationnels.',

  // Présentation détaillée.
  about: [
    'Un parcours associant développement informatique, analyse fonctionnelle, méthodes, maintenance et support permet d’appréhender les problématiques techniques dans leur contexte métier.',
    'L’expérience acquise dans des environnements industriels et opérationnels complète les compétences de développement et facilite la compréhension des besoins et des contraintes métier.',
    'L’objectif professionnel est de mettre cette double compétence technique et métier au service de projets concrets.',
  ],

  // Informations affichées dans le Hero.
  focus: [
    {
      label: 'Expertise',
      value: 'Java',
    },
    {
      label: 'Domaine',
      value: 'Applications métier',
    },
    {
      label: 'Environnement',
      value: 'Industrie',
    },
    {
      label: 'Orientation',
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
  email: '',
  phone: '',

  // Réseaux professionnels.
  github: '',
  linkedin: '',

  // CV.
  cvUrl: '/cv.pdf',
})
