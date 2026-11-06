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

  contact: new Section({
    key: 'contact',
    title: 'Contact',
    anchor: 'contact',
  }),
}
