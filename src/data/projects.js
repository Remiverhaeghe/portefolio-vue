import { Project } from '@/models/Project.js'

/**
 * Projets présentés dans le portfolio.
 */
export const projects = [
  new Project({
    title: 'Scraper de données en Python',

    context:
      'Collecte et analyse d’offres d’emploi publiques, avec une architecture découpée en couches : HTTP, parsing, extraction, métier et stockage.',

    problem:
      'Les offres sont réparties entre plusieurs API d’emploi aux formats différents, et elles se périment vite : les suivre à la main n’est pas tenable.',

    solution:
      'Une même base de données exploitée par trois interfaces : un tableau de bord web, une application de bureau et une application mobile qui fonctionne hors ligne.',

    contribution:
      'Projet personnel, conçu, développé et testé seul : architecture, sources de données, trois interfaces et intégration continue.',

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

    stack: ['Python', 'Flutter'],
  }),

  new Project({
    title: 'nas-monitor : supervision d’un NAS auto-hébergé',

    context:
      'Suivre que les sauvegardes et les tâches planifiées d’un NAS s’exécutent bien, et être prévenu quand un signal manque ou qu’un service tombe.',

    problem:
      'Une sauvegarde qui échoue en silence ne se découvre que le jour où l’on en a besoin.',

    solution:
      'Application web Symfony : chaque tâche signale son exécution par un appel HTTP, et l’application contrôle elle-même des sites, des ports, des certificats TLS, la résolution DNS et le ping. Un incident est ouvert et une alerte envoyée par e-mail ou ntfy.',

    contribution:
      'Projet personnel, conçu, développé et testé seul : de la modélisation des moniteurs à la sécurité, aux tests et au déploiement.',

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
      'Plus de 270 tests (unitaires, fonctionnels, navigateur Panther) avec 99 % de couverture des lignes.',
      'Tests de mutation Infection : un indice de 96 %, qui vérifie que les tests détectent vraiment une modification du code, avec PHPStan et PHP-CS-Fixer en intégration continue.',
    ],

    githubUrl: 'https://github.com/Remiverhaeghe/nas-monitor',

    featured: true,

    stack: ['PHP'],

    images: [
      {
        src: `${import.meta.env.BASE_URL}images/projects/nas-monitor-tableau-de-bord.png`,
        alt: 'Tableau de bord de nas-monitor : état de chaque sauvegarde et tâche planifiée',
      },
      {
        src: `${import.meta.env.BASE_URL}images/projects/nas-monitor-moniteur.png`,
        alt: 'Page d’un moniteur : courbes de tendance et historique des contrôles',
      },
      {
        src: `${import.meta.env.BASE_URL}images/projects/nas-monitor-statut-public.png`,
        alt: 'Page de statut publique de nas-monitor',
      },
    ],
  }),

  new Project({
    title: 'secrets-audit : hygiène des secrets dans les dépôts git',

    context:
      'Éviter qu’un mot de passe, un jeton ou une clé privée parte par erreur dans un dépôt, et retrouver ceux qui y sont déjà.',

    problem:
      'Un secret versionné reste dans l’historique git même après avoir été supprimé du code.',

    solution:
      'Outil en ligne de commande qui parcourt les dépôts d’un dossier, signale les fichiers sensibles suivis ou restés dans l’historique et les secrets en clair, sans jamais afficher une valeur en entier. Il se lance en local ou en intégration continue.',

    contribution:
      'Projet personnel, conçu, développé et testé seul, jusqu’au réglage des faux positifs sur mes propres dépôts.',

    technologies: ['Python', 'Git', 'unittest', 'GitHub Actions'],

    highlights: [
      'Règles pour les clés privées, jetons GitHub, Slack, JWT et mots de passe, avec des garde-fous contre les faux positifs (valeurs d’exemple, code, chemins de test).',
      'Rapport texte ou JSON et code de sortie utilisable en CI.',
      'Code sans dépendance externe, 47 tests sur de vrais dépôts git temporaires, 100 % de couverture, black, pylint et bandit en intégration continue.',
    ],

    githubUrl: 'https://github.com/Remiverhaeghe/secrets-audit',

    stack: ['Python'],
  }),

  new Project({
    title: 'Kalkul : calculatrice de bureau en Java',

    context:
      'Une calculatrice qui couvre le calcul courant, scientifique et financier, ainsi que le tracé de fonctions, dans une seule application de bureau.',

    solution:
      'Application Java Swing organisée en onglets par famille de calculs. Le clavier fonctionne comme les boutons.',

    contribution:
      'Projet personnel, repris et réorganisé : nouvelles familles de calculs, renommage et tests.',

    technologies: ['Java 17', 'Swing', 'Maven', 'JUnit 5'],

    highlights: [
      'Calcul scientifique (trigonométrie, logarithmes, factorielle) en degrés ou en radians.',
      'Calcul financier : intérêts, mensualités et tableau d’amortissement, VAN, TRI.',
      'Tracé de fonctions avec tangente, dérivée, intégrale et aire ; matrices, systèmes d’équations, régression linéaire.',
      'Tests JUnit 5 lancés avec Maven.',
    ],

    githubUrl: 'https://github.com/Remiverhaeghe/kalkul',

    stack: ['Java'],

    images: [
      {
        src: `${import.meta.env.BASE_URL}images/projects/kalkul-courbes.png`,
        alt: 'Onglet Courbes de Kalkul : tracé de a*sin(x) + b avec tangente et aire sous la courbe',
      },
      {
        src: `${import.meta.env.BASE_URL}images/projects/kalkul-financier.png`,
        alt: 'Onglet Financier de Kalkul : intérêts, mensualité d’un prêt avec tableau d’amortissement, VAN et TRI',
      },
      {
        src: `${import.meta.env.BASE_URL}images/projects/kalkul-scientifique.png`,
        alt: 'Onglet Scientifique de Kalkul : fonctions trigonométriques, logarithmes et factorielle',
      },
    ],
  }),

  new Project({
    title: 'Portfolio personnel',

    context:
      'Le site que vous consultez : une présentation de mon parcours, de mes compétences et de mes projets.',

    solution:
      'Application Vue.js 3 dont le contenu est séparé des composants : chaque section lit ses données dans un fichier dédié, ce qui permet de faire évoluer le contenu sans toucher à l’affichage.',

    technologies: ['Vue.js 3', 'Vite', 'Vitest', 'GitHub Actions'],

    highlights: [
      'Données, modèles et composants séparés.',
      'Thème clair / sombre appliqué avant le rendu, sans flash.',
      'Tests vérifiant la cohérence entre la navigation et les sections.',
      'Intégration continue : lint, tests et build à chaque push.',
    ],

    githubUrl: 'https://github.com/Remiverhaeghe/portefolio-vue',

    stack: ['Vue.js'],
  }),
]
