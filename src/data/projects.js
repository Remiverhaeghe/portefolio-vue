import { Project } from '@/models/Project.js'
import { capturesCarte } from '@/data/atelierCarnet.js'
import { capturesDisponibles, indexCapturesAtelier } from '@/utils/captures.js'

/**
 * Projets présentés dans le portfolio.
 */
export const projects = [
  new Project({
    title: 'Tremplin : recherche d’emploi et révision des entretiens',

    context:
      'Collecte et analyse d’offres d’emploi publiques, suivi des candidatures et préparation des entretiens, avec une architecture découpée en couches : HTTP, parsing, extraction, métier et stockage.',

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
      'Application mobile Flutter compagnon, hors ligne d’abord : 944 questions livrées pour réviser sans le PC, synchronisation par une API à jeton, connexion par un code à 6 chiffres.',
      'Révision dans l’univers de la piscine : profondeur de chaque thème, bilan du plongeon, carnet de la semaine, révision à la voix et widget « 5 min ».',
      'Version web installable sur l’iPhone ; le code propre à Android (notifications, widget, SQLite) est séparé par plate-forme.',
      'Stockage SQLite et analyse des données avec pandas.',
      'Tests pytest et Playwright, intégration continue avec analyse statique, audit de sécurité et des dépendances.',
    ],

    githubUrl: 'https://github.com/Remiverhaeghe/tremplin',

    featured: true,

    stack: ['Python', 'Flutter'],

    images: [
      {
        src: `${import.meta.env.BASE_URL}images/projects/tremplin-tableau-de-bord.png`,
        alt: 'Tableau de bord web de Tremplin, sur des données fictives',
      },
      {
        src: `${import.meta.env.BASE_URL}images/projects/tremplin-offres.png`,
        alt: 'Liste des offres d’emploi de Tremplin, sur des données fictives',
      },
      {
        src: `${import.meta.env.BASE_URL}images/projects/tremplin-marche.png`,
        alt: 'Page Mon marché : salaire médian et compétences à travailler, sur des données fictives',
      },
      {
        src: `${import.meta.env.BASE_URL}images/projects/tremplin-mobile-bilan-plongee.png`,
        alt: 'Appli mobile : bilan d’une série dans le thème Docker, avec la profondeur gagnée',
        portrait: true,
      },
      {
        src: `${import.meta.env.BASE_URL}images/projects/tremplin-mobile-carnet-plongee.png`,
        alt: 'Appli mobile : carnet de plongée de la semaine, sur des données fictives',
        portrait: true,
      },
    ],
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
      'Santé des disques du NAS (SMART) : température, secteurs réalloués, usure NVMe, avec une alerte avant la panne.',
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
      'Tracé de fonctions avec tangente, dérivée, intégrale et aire ; matrices, systèmes d’équations, régression linéaire avec nuage de points.',
      'Onglets Programmeur (bases 2 à 16) et Chantier (béton, pente, revêtement), devises hors ligne et historique cherchable, exportable en CSV.',
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
      {
        src: `${import.meta.env.BASE_URL}images/projects/kalkul-historique.png`,
        alt: 'Onglet Historique de Kalkul : les derniers calculs, à reprendre d’un double-clic',
      },
    ],
  }),

  new Project({
    title: 'Atelier : application Android de travaux',

    context:
      'Préparer les travaux de ma maison sans erreur de coupe ni de quantité : parquet, plinthes, peinture, carrelage, placo, électricité, plomberie.',

    problem:
      'Les calculs de chantier se refont à la main pièce par pièce, et une erreur de coupe ou de commande se paie en matériau et en allers-retours au magasin.',

    solution:
      'Application Flutter hors ligne : chaque pièce est saisie mur par mur, l’application en tire le plan, les coupes, les quantités, le budget et la liste de courses. Elle n’a pas la permission Internet, tout reste sur le téléphone.',

    contribution:
      'Projet personnel, conçu, développé et testé seul, à partir de mes propres travaux.',

    technologies: ['Flutter', 'Dart', 'GitHub Actions'],

    highlights: [
      'Règles de calcul en Dart pur, séparées de l’interface, couvertes à plus de 95 % et contrôlées en intégration continue.',
      'Plan de pose du parquet rangée par rangée, coupes de plinthes optimisées par barre, vue 3D et export pour Home Assistant.',
      'Pièce dessinée d’après une forme (rectangle, L, T) : les murs non mesurés sont déduits et rappelés sur le chantier, les angles se calculent par la diagonale, et une fiche PDF reprend le plan coté et les reprises.',
      'Relevés d’un thermo-hygromètre analysés et suivis jour par jour, avant et après travaux.',
      'Version web installable sur l’iPhone, qui fonctionne hors ligne.',
      'Plus de 400 tests, parcours sur émulateur Android et captures d’écran générées sur un chantier fictif.',
      'APK signées jointes à chaque version publiée sur GitHub.',
    ],

    githubUrl: 'https://github.com/Remiverhaeghe/atelier',

    // Version web publiée par la CI d'Atelier sur GitHub Pages
    liveUrl: 'https://remiverhaeghe.github.io/atelier/',

    stack: ['Flutter'],

    // Recopiées du dépôt Atelier avant chaque build (scripts/captures-atelier.mjs)
    images: capturesDisponibles(capturesCarte, indexCapturesAtelier).map((pCapture) => ({
      src: pCapture.src,
      alt: pCapture.alt,
      portrait: true,
    })),
  }),

  new Project({
    title: 'Cursus : suivi des compétences d’apprentis',

    context:
      'Suivre la progression d’un apprenti entre l’école, l’entreprise d’accueil et l’apprenti lui-même, sur un référentiel de blocs et de compétences.',

    problem:
      'Les évaluations de l’école et du tuteur sont dispersées : personne ne voit d’un coup d’œil ce qui est acquis et ce qui reste à valider.',

    solution:
      'Application web Symfony à trois profils. L’école gère les formations, les promotions et les contrats, le tuteur évalue ses apprentis en entreprise, l’apprenti consulte sa progression. Chaque évaluation est datée et rien n’est écrasé : l’historique donne la courbe de chaque compétence.',

    contribution:
      'Projet de fin d’études, conçu et développé seul, écrit de zéro à partir d’un besoin fonctionnel, avec des données fictives uniquement.',

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
      'Accès aux données par voters Symfony, avec un test pour chaque couple de profil et de donnée.',
      'Calcul de la progression isolé de la base de données et testé seul.',
      'Double authentification TOTP pour l’école et les tuteurs, mots de passe en Argon2id, CSP avec nonce, export et suppression de son compte.',
      'PHPStan, PHP-CS-Fixer, tests de mutation Infection et recherche de secrets en intégration continue.',
    ],

    githubUrl: 'https://github.com/Remiverhaeghe/cursus',

    stack: ['PHP'],
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
