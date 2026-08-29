import { Section } from '@/models/Section.js'

/**
 * Sections principales du portfolio.
 */
export const sections = {
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
