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
    title: 'nas-monitor : supervision d’un NAS auto-hébergé',

    context:
      'Suivre que les sauvegardes et les tâches planifiées d’un NAS s’exécutent bien, et être prévenu quand un signal manque ou qu’un service tombe.',

    solution:
      'Application web Symfony : chaque tâche signale son exécution par un appel HTTP, et l’application contrôle elle-même des sites, des ports, des certificats TLS, la résolution DNS et le ping. Un incident est ouvert et une alerte envoyée par e-mail ou ntfy.',

    technologies: [
      'PHP 8.5',
      'Symfony 8',
      'PostgreSQL',
      'FrankenPHP',
      'Docker',
      'PHPUnit',
      'GitHub Actions',
    ],

    highlights: [
      'Moniteurs de sauvegardes (heartbeat), de sites, de ports, de certificats, de DNS et de ping, avec dépendances entre services et fenêtres de maintenance.',
      'Page de statut publique, courbes de tendance, détection de résultats anormaux et API en lecture seule pour une application mobile.',
      'Sécurité : double authentification TOTP chiffrée, jetons d’API hachés, en-têtes CSP, journal des actions, recherche de secrets en CI.',
      'Plus de 270 tests (unitaires, fonctionnels, navigateur Panther) avec 99 % de couverture des lignes, tests de mutation Infection (indice de 96 %), PHPStan et PHP-CS-Fixer en intégration continue.',
    ],

    githubUrl: 'https://github.com/Remiverhaeghe/nas-monitor',

    featured: true,
  }),

  new Project({
    title: 'secrets-audit : hygiène des secrets dans les dépôts git',

    context:
      'Éviter qu’un mot de passe, un jeton ou une clé privée parte par erreur dans un dépôt, et retrouver ceux qui y sont déjà.',

    solution:
      'Outil en ligne de commande qui parcourt les dépôts d’un dossier, signale les fichiers sensibles suivis ou restés dans l’historique et les secrets en clair, sans jamais afficher une valeur en entier. Il se lance en local ou en intégration continue.',

    technologies: ['Python', 'Git', 'unittest', 'GitHub Actions'],

    highlights: [
      'Règles pour les clés privées, jetons GitHub, Slack, JWT et mots de passe, avec des garde-fous contre les faux positifs (valeurs d’exemple, code, chemins de test).',
      'Rapport texte ou JSON et code de sortie utilisable en CI.',
      'Code sans dépendance externe, 47 tests sur de vrais dépôts git temporaires, 100 % de couverture, black, pylint et bandit en intégration continue.',
    ],

    githubUrl: 'https://github.com/Remiverhaeghe/secrets-audit',
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
