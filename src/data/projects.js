import { Project } from '@/models/Project.js'

/**
 * Projets présentés dans le portfolio.
 */
export const projects = [
  new Project({
    title: 'Scraper de données en Python',

    context:
      'Collecte et analyse d’offres d’emploi publiques, avec une architecture découpée en couches : HTTP, parsing, extraction, métier et stockage.',

    solution:
      'Une même base de données exploitée par trois interfaces : un tableau de bord web, une application de bureau et une application mobile qui fonctionne hors ligne.',

    technologies: [
      'Python',
      'FastAPI',
      'Flutter',
      'SQLite',
      'pandas',
      'pytest',
      'Playwright',
      'Docker',
      'GitHub Actions',
    ],

    highlights: [
      'Tableau de bord web FastAPI (Jinja2, HTMX) et interface de bureau PySide6.',
      'Application mobile Flutter compagnon, hors ligne d’abord, synchronisée via une API à jeton.',
      'Stockage SQLite et analyse des données avec pandas.',
      'Tests pytest et Playwright, intégration continue avec analyse statique, audit de sécurité et des dépendances.',
    ],

    githubUrl: 'https://github.com/Remiverhaeghe/scraper-data-python',

    featured: true,
  }),

  new Project({
    title: 'Portfolio personnel',

    context:
      'Le site que vous consultez : une présentation de mon parcours, de mes compétences et de mes projets.',

    solution:
      'Application Vue.js 3 dont le contenu est séparé des composants : chaque section lit ses données dans un fichier dédié, ce qui permet de faire évoluer le contenu sans toucher à l’affichage.',

    technologies: [
      'Vue.js 3',
      'Vite',
      'Vitest',
      'GitHub Actions',
    ],

    highlights: [
      'Données, modèles et composants séparés.',
      'Thème clair / sombre appliqué avant le rendu, sans flash.',
      'Tests vérifiant la cohérence entre la navigation et les sections.',
      'Intégration continue : lint, tests et build à chaque push.',
    ],

    githubUrl: 'https://github.com/Remiverhaeghe/portefolio-vue',
  }),
]
