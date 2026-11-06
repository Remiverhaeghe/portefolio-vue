import { Experience, EXPERIENCE_TYPES } from '@/models/Experience.js'

/**
 * Parcours professionnel présenté dans le portfolio.
 */
export const experiences = [

  new Experience({
    // Informations principales.
    title: 'Développeur Java',
    company: 'DSD System',
    logo: `${import.meta.env.BASE_URL}images/companies/DSDSystem.png`,
    location: 'Lille (59)',
    period: '2022 - Aujourd’hui',

    // Contexte professionnel.
    description:
      'Arrivé en stage de fin de formation, j’ai été recruté au support, puis nommé responsable support, avant de rejoindre l’équipe de développement. J’y fais évoluer des applications métier pour l’industrie.',

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
      'Java 8',
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
    type: EXPERIENCE_TYPES.training,

    title: 'Titre RNCP Développeur Web et Web Mobile (niveau 5)',
    company: 'Foreach Academy',
    location: 'Lille (59)',
    period: '2021 - 2022',

    description:
      'Reconversion professionnelle après plusieurs mois d’autoformation : six mois de formation intensive au développement web, suivis de deux mois de stage chez DSD System. Titre obtenu.',

    achievements: [
      'Application Alumni pour un réseau d’anciens élèves.',
      'Site web pour le LOSC, réalisé comme projet de formation sans client réel.',
    ],

    technologies: [
      'PHP',
    ],
  }),

  new Experience({
    title: 'Gestion du plan de transport des contrôleurs TER',
    company: 'SNCF · Intérim',
    logo: `${import.meta.env.BASE_URL}images/companies/SNCF.png`,
    location: 'Hauts-de-France',
    period: '2021',

    description:
      'Retour à la SNCF en mission d’intérim pour gérer le plan de transport des contrôleurs TER des Hauts-de-France, en parallèle de mon autoformation au développement.',
  }),

  new Experience({
    // Informations principales.
    title: 'Maintenance, Production, Planification, Projets',
    company: 'SNCF',
    logo: `${import.meta.env.BASE_URL}images/companies/SNCF.png`,
    location: 'Technicentre Atlantique · Chatillon (92)',
    period: '2010 - 2020',

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
