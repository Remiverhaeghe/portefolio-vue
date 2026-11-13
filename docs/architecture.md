# Architecture

## Principe

Le contenu est séparé de l'affichage :

- `data/` décrit le contenu sous forme d'objets
- `models/` définit la forme de ces objets et les règles associées
- `components/` affiche les données, sans texte métier en dur

Modifier le contenu ne demande donc pas de toucher aux composants.

## Arborescence

```text
src/
├── App.vue                   Navbar et page d'accueil
├── main.js                   Point d'entrée
├── assets/css/               Styles, importés par main.css
│   ├── base/                 Reset, variables, typographie
│   ├── layout/               Conteneur
│   ├── components/           Boutons, navigation, titres de section
│   ├── sections/             Un fichier par section
│   ├── animations/           Réglages de mouvement réduit
│   └── responsive/           Ajustements globaux par largeur d'écran
├── components/
│   ├── common/               AppIcon, NavigationBar, SectionTitle
│   └── home/                 Une section de la page par composant (StatsSection sans ancre)
├── composables/              useActiveSection, useScrollReveal, useTheme
├── data/                     Contenu du site
├── models/                   Experience, Profile, Project, Section, Skill, SkillCategory, Stat
│   └── __tests__/
└── views/
    ├── HomeView.vue          Assemblage des sections
    └── __tests__/
```

## Sections et navigation

`data/sections.js` définit le titre et l'ancre de chaque section. L'ordre de ses clés donne l'ordre de la navigation, et `NavigationBar` en est dérivée.

`HomeView.vue` liste les composants de section dans le même ordre. Le test `HomeView.spec.js` vérifie que les ancres rendues correspondent à `sections.js` et qu'aucun lien interne ne pointe vers une ancre absente.

## Modèles

| Modèle | Rôle |
|---|---|
| `Profile` | Identité, présentation, points clés (`focus`), postes recherchés (`targets`), contact |
| `Experience` | Poste ou formation (`type` : `job` ou `training`) |
| `Project` | Projet, avec liens GitHub et démonstration facultatifs, famille de technologies (`stack`, pour le filtre) et captures (`images`) |
| `Stat` | Chiffre clé : valeur, libellé et icône |
| `Skill` | Compétence notée de 2 à 5 ; `SKILL_LEVELS` porte libellés, classes CSS et légende |
| `SkillCategory` | Groupe de compétences avec son icône |
| `Section` | Titre et ancre d'une section |

## Couleurs

`variables.css` porte l'accent du site (vert de signal) et une couleur par famille de technologies (`--stack-php`, `--stack-python`, `--stack-java`, `--stack-flutter`, `--stack-vue`), avec une variante pour le thème sombre. Les composants posent `data-stack="Python"` pour que la couleur s'applique à la carte, aux pastilles et aux filtres. Une nouvelle famille s'ajoute dans `variables.css` et dans le sélecteur `[data-stack]` de `projects.css`. La couleur du texte sur l'accent est `--color-on-accent`, car le contraste s'inverse en thème sombre.

## Composables

| Composable | Rôle |
|---|---|
| `useActiveSection` | Met en évidence dans la navigation la section visible sous la barre |
| `useScrollReveal` | Déclenche une seule fois l'animation d'apparition d'une section |
| `useTheme` | Bascule clair / sombre et mémorise le choix |

Le thème initial est posé par un script inline dans `index.html`, avant le rendu, pour éviter l'affichage bref du mauvais thème. `useTheme` lit ensuite l'attribut `data-theme` déjà posé.

## Icônes

`AppIcon` associe un nom court (`code`, `mobile`, `database`…) à une icône `lucide-vue-next`. Une nouvelle icône s'ajoute à la fois dans l'import et dans la table `icons`. Les icônes des familles de technologies sont associées dans `STACK_ICONS` (`ProjectsSection.vue`).

## Tests

Vitest, avec `@vue/test-utils` et jsdom pour les tests de composants. L'environnement jsdom est déclaré en tête du fichier de test concerné ; les autres tests tournent sous Node.
