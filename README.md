# Portfolio — Rémi Verhaeghe

Portfolio professionnel personnel réalisé avec **Vue.js**.

Le site présente mon parcours, mes compétences, mes projets et mon objectif
professionnel, avec un positionnement orienté **développement Java,
applications métier et environnements industriels**.

---

## Présentation

Ce portfolio a pour objectif de présenter de manière claire et professionnelle :

- mon profil de développeur logiciel ;
- mon expérience en développement Java ;
- mon parcours dans les environnements industriels et opérationnels ;
- mes compétences techniques et métier ;
- mes projets ;
- mon objectif professionnel.

### Positionnement

**Développeur Java / Profil technique & industriel**

Le profil associe :

- développement logiciel ;
- applications métier ;
- analyse fonctionnelle ;
- conception technique ;
- maintenance corrective et évolutive ;
- optimisation des performances ;
- expérience des environnements industriels et opérationnels.

### Objectif professionnel

Mettre à profit mon expérience du développement Java, des applications métier
et des environnements industriels au sein d'une équipe technique où je pourrai
contribuer à des projets concrets et poursuivre mon évolution dans le
développement logiciel.

---

## Fonctionnalités

Le portfolio est organisé autour de plusieurs sections :

- **Accueil**
- **Profil — En un coup d'œil**
- **À propos**
- **Parcours**
- **Compétences**
- **Projets**
- **Objectif professionnel**
- **Contact**

### Navigation

La navigation permet d'accéder directement aux différentes sections.

La section actuellement consultée est mise en évidence automatiquement grâce
à un système de détection de la position dans la page.

La navigation s'adapte également aux écrans mobiles.

### Mode clair / sombre

Le portfolio dispose d'un thème clair et d'un thème sombre.

Les couleurs sont centralisées dans des variables CSS afin de conserver une
identité visuelle cohérente dans l'ensemble de l'application.

### Animations

Le site utilise des animations discrètes pour améliorer l'expérience :

- apparition progressive des sections ;
- animations du Hero ;
- apparition des éléments de la timeline ;
- animation des compétences ;
- effets au survol des cartes et boutons.

Les animations respectent également la préférence système
`prefers-reduced-motion`.

---

## Parcours professionnel

Le parcours professionnel est présenté sous la forme d'une **timeline**.

Chaque expérience peut présenter :

- période ;
- entreprise ;
- intitulé du poste ;
- contexte ;
- responsabilités ;
- réalisations ;
- technologies ou domaines associés.

### DSD System — Développeur Java

**2024 - Aujourd'hui**

Développement et évolution d'applications métier dans un environnement
industriel.

Principales activités :

- analyse des besoins fonctionnels et des spécifications ;
- conception technique et modélisation des fonctionnalités ;
- développement et évolution des applications métier ;
- intégration avec des systèmes et applications externes ;
- maintenance corrective et évolutive ;
- analyse et optimisation des performances ;
- tests unitaires et contrôle de la qualité du code.

Technologies :

- Java
- Spring
- Hibernate
- SQL Server
- JavaScript
- Vue.js
- API REST
- Maven
- Git
- JUnit

### SNCF — Maintenance, Production, Planification, Projets

**2010 - 2021**

Parcours évolutif dans un environnement ferroviaire, industriel et
opérationnel.

Principales activités :

- management d'équipes pouvant atteindre 15 collaborateurs ;
- planification et organisation des opérations de maintenance ;
- gestion des ressources, des priorités et des compétences ;
- suivi et amélioration de la performance des activités ;
- coordination entre les différents services et intervenants ;
- pilotage et suivi de projets techniques ;
- gestion des moyens et ressources nécessaires aux opérations ;
- gestion des activités de transport sur la région Hauts-de-France.

Domaines :

- Maintenance
- Production
- Planification
- Gestion de projet
- Management
- Amélioration continue

---

## Compétences

Les compétences sont organisées par domaine afin de faciliter une lecture
rapide du profil.

### Développement

- Java
- Spring
- Hibernate
- JavaScript
- Vue.js
- API REST

### Bases de données

- SQL
- SQL Server

### Tests et qualité

- JUnit
- Tests unitaires
- Qualité du code
- Optimisation des performances

### Outils

- Maven
- Git
- IntelliJ IDEA

### Environnement métier

- Applications métier
- Industrie
- Maintenance
- Production
- Planification
- Gestion de projet
- Amélioration continue

---

## Projets

### Portfolio personnel

Création d'un portfolio web destiné à présenter un parcours de développeur,
ses compétences et ses réalisations.

#### Problématique

Présenter un parcours mêlant développement logiciel et expérience industrielle
avec une interface claire, responsive et professionnelle.

#### Solution

Développement d'une application Vue.js structurée autour :

- de modèles métier ;
- de données séparées de la présentation ;
- de composants Vue réutilisables ;
- de sections indépendantes ;
- d'une navigation dynamique ;
- d'un système de thème clair/sombre ;
- d'animations lors du défilement ;
- d'une interface responsive.

#### Technologies

- Vue.js
- JavaScript
- CSS
- Vite

---

## Architecture du projet

Le projet sépare les données, les modèles, les composants et la logique
réutilisable.

```text
src/
├── assets/
│   ├── base.css
│   ├── main.css
│   └── portefolio.css
│
├── components/
│   ├── common/
│   │   ├── NavigationBar.vue
│   │   └── SectionTitle.vue
│   │
│   └── home/
│       ├── HeroSection.vue
│       ├── ProfileSummarySection.vue
│       ├── AboutSection.vue
│       ├── ExperienceSection.vue
│       ├── SkillsSection.vue
│       ├── ProjectsSection.vue
│       ├── CareerGoalSection.vue
│       └── ContactSection.vue
│
├── composables/
│   ├── useActiveSection.js
│   ├── useScrollReveal.js
│   └── useTheme.js
│
├── data/
│   ├── career.js
│   ├── experiences.js
│   ├── profile.js
│   ├── projects.js
│   ├── sections.js
│   └── skills.js
│
├── models/
│   ├── Career.js
│   ├── Experience.js
│   ├── Profile.js
│   ├── Project.js
│   ├── Section.js
│   ├── Skill.js
│   └── SkillCategory.js
│
├── router/
│   └── index.js
│
├── views/
│   └── HomeView.vue
│
├── App.vue
└── main.js
```

### Principe de séparation

Les informations du portfolio sont stockées dans `data/`.

Les classes présentes dans `models/` permettent de structurer ces données.

Les composants Vue présents dans `components/` sont responsables de leur
présentation.

Les `composables/` regroupent la logique réutilisable.

Cette organisation permet de modifier le contenu du portfolio sans avoir à
modifier directement chaque composant d'affichage.

---

## Modèles

Les principales entités du portfolio sont représentées par des modèles :

- `Profile`
- `Experience`
- `Project`
- `Career`
- `Section`
- `Skill`
- `SkillCategory`

Par exemple, le profil est défini séparément de son affichage :

```js
export const profile = new Profile({
  firstName: 'Rémi',
  lastName: 'Verhaeghe',
  title: 'Développeur Java / Profil technique & industriel',
  shortTitle: 'Développeur logiciel',
})
```

Cette approche facilite la maintenance et l'évolution du contenu.

---

## Composables

### `useActiveSection`

Détecte la section actuellement visible afin de synchroniser la navigation
avec la position de l'utilisateur dans la page.

### `useScrollReveal`

Utilise `IntersectionObserver` pour déclencher l'apparition progressive des
éléments lors du défilement.

### `useTheme`

Gère le thème clair/sombre du portfolio.

---

## Technologies

| Technologie | Utilisation |
|---|---|
| Vue.js | Framework frontend |
| JavaScript | Logique applicative |
| Vite | Développement et build |
| CSS | Interface, thème et responsive |
| HTML | Structure |
| Git | Gestion du code source |

---

## Installation

### Prérequis

- Node.js
- npm
- Git

### Installation

```bash
git clone <URL_DU_DEPOT>
cd portefolio-vue
npm install
```

### Développement

```bash
npm run dev
```

### Build de production

```bash
npm run build
```

### Prévisualisation du build

```bash
npm run preview
```

---

## Git

Vérifier les modifications :

```bash
git status
```

Ajouter les modifications :

```bash
git add .
```

Créer un commit :

```bash
git commit -m "Mise à jour du portfolio"
```

Envoyer les modifications :

```bash
git push
```

---

## Responsive design

L'interface est conçue pour fonctionner sur :

- ordinateur ;
- tablette ;
- smartphone.

Le responsive concerne notamment :

- la navigation ;
- le Hero ;
- les cartes du profil ;
- la timeline ;
- les compétences ;
- les projets ;
- le contact.

---

## Accessibilité

Le projet prend en compte la préférence système :

```text
prefers-reduced-motion
```

afin de limiter les animations lorsque l'utilisateur demande une réduction
des mouvements.

---

## Évolutions prévues

Les prochaines évolutions envisagées sont :

- finaliser le positionnement du profil dans le Hero ;
- continuer à améliorer la timeline professionnelle ;
- affiner la présentation des compétences ;
- enrichir la section projets avec d'autres réalisations ;
- ajouter un footer professionnel ;
- finaliser le SEO ;
- ajouter les métadonnées Open Graph ;
- améliorer le partage du portfolio sur les réseaux professionnels.

---

## Auteur

**Rémi Verhaeghe**

Développeur Java / Profil technique & industriel

France

---

## Licence

Portfolio personnel.

Le contenu, les informations professionnelles et les éléments graphiques sont
destinés à un usage personnel et professionnel.
