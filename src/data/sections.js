import { Section } from '@/models/Section.js'

/**
 * Sections principales du portfolio.
 *
 * L'ordre des clés détermine l'ordre de la navigation.
 */
export const sections = {
  hero: new Section({
    key: 'hero',
    title: 'Accueil',
    anchor: 'accueil',
  }),

  profile: new Section({
    key: 'profile',
    title: 'Profil',
    anchor: 'profil',
  }),

  about: new Section({
    key: 'about',
    title: 'À propos',
    anchor: 'apropos',
  }),

  experience: new Section({
    key: 'experience',
    title: 'Parcours',
    anchor: 'parcours',
  }),

  skills: new Section({
    key: 'skills',
    title: 'Compétences',
    anchor: 'competences',
  }),

  projects: new Section({
    key: 'projects',
    title: 'Projets',
    anchor: 'projets',
  }),

  career: new Section({
    key: 'career',
    title: 'Objectif professionnel',
    anchor: 'objectif',
  }),

  contact: new Section({
    key: 'contact',
    title: 'Contact',
    anchor: 'contact',
  }),
}
