import { Experience } from '@/models/Experience.js'

/**
 * Parcours professionnel présenté dans le portfolio.
 */
export const experiences = [

  new Experience({
    // Informations principales.
    title: 'Développeur Java',
    company: 'DSD System',
    logo: '/images/companies/DSDSystem.png',
    location: 'Lille (59)',
    period: '2024 - Aujourd’hui',

    // Contexte professionnel.
    description:
      'Développement et évolution d’applications métier dans un environnement industriel.',

    // Principales responsabilités.
    responsibilities: [
      'Analyse des besoins fonctionnels et des spécifications.',
      'Conception technique et modélisation des fonctionnalités.',
      'Développement et évolution des applications métier.',
      'Intégration avec des systèmes et applications externes.',
      'Maintenance corrective et évolutive.',
      'Analyse et optimisation des performances.',
      'Tests unitaires et contrôle de la qualité du code.',
    ],

    // Réalisations significatives.
    achievements: [
      'Développement de fonctionnalités dans une application métier existante.',
      'Mise en place et évolution d’interfaces avec différents systèmes externes.',
      'Optimisation de traitements et de requêtes SQL.',
      'Participation à l’amélioration de la robustesse et des performances des applications.',
    ],

    // Technologies et outils utilisés.
    technologies: [
      'Java',
      'Spring',
      'Hibernate',
      'SQL Server',
      'JavaScript',
      'Vue.js',
      'API REST',
      'Maven',
      'Git',
      'JUnit',
    ],
  }),


  new Experience({
    // Informations principales.
    title: 'Maintenance, Production, Planification, Projets',
    company: 'SNCF',
    logo: '/images/companies/SNCF.png',
    location: 'Technicentre Atlantique · Chatillon (92)',
    period: '2010 - 2021',

    // Contexte professionnel.
    description:
      'Parcours évolutif dans un environnement ferroviaire, industriel et opérationnel.',

    // Principales responsabilités.
    responsibilities: [
      'Management d’équipes pouvant atteindre 15 collaborateurs.',
      'Planification et organisation des opérations de maintenance.',
      'Gestion des ressources, des priorités et des compétences.',
      'Suivi et amélioration de la performance des activités.',
      'Coordination entre les différents services et intervenants.',
      'Pilotage et suivi de projets techniques.',
      'Gestion des moyens et des ressources nécessaires aux opérations.',
      'Gestion des activités de transport sur la région Hauts-de-France.',
    ],

    // Réalisations significatives.
    achievements: [
      'Encadrement et organisation d’équipes opérationnelles.',
      'Optimisation de l’organisation et de la performance des activités.',
      'Coordination de différents services et intervenants.',
      'Participation à des projets d’amélioration et d’évolution des processus.',
    ],

    // Domaines et outils associés.
    technologies: [
      'Maintenance',
      'Production',
      'Planification',
      'Gestion de projet',
      'Management',
      'Amélioration continue',
    ],
  }),

]
