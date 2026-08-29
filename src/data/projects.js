import { Project } from '@/models/Project.js'

/**
 * Projets présentés dans le portfolio.
 */
export const projects = [
  new Project({
    title: 'Portfolio personnel',

    context:
      'Création d’un portfolio web destiné à présenter un parcours de développeur, ses compétences et ses réalisations.',

    problem:
      'Présenter un parcours mêlant développement logiciel et expérience industrielle avec une interface claire, professionnelle et facilement évolutive.',

    contribution:
      'Conception et développement de l’application, définition de l’architecture, création des composants Vue.js et mise en place des animations et de l’interface responsive.',

    solution:
      'Développement d’une application Vue.js structurée autour de modèles, de données et de composants réutilisables.',

    technologies: [
      'Vue.js',
      'JavaScript',
      'CSS',
    ],

    highlights: [
      'Architecture basée sur des objets métier.',
      'Séparation entre données, modèles, composants et présentation.',
      'Composants Vue réutilisables.',
      'Animations déclenchées lors du défilement.',
      'Interface responsive.',
    ],

    githubUrl: '',
    liveUrl: '',

    featured: true,
  }),
]
