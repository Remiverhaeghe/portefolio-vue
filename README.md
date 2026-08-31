# Portfolio — Rémi Verhaeghe

Portfolio professionnel personnel réalisé avec **Vue.js**.

Le site présente mon parcours, mes compétences, mes projets et mon objectif
professionnel, avec un positionnement orienté **développement logiciel,
Java, applications métier et environnements industriels**.

---

## Présentation

Ce portfolio a pour objectif de présenter de manière claire et professionnelle :

- mon profil de développeur logiciel ;
- mon expérience en développement Java ;
- mon parcours dans les environnements industriels et opérationnels ;
- mes compétences techniques et métier ;
- mes projets ;
- mon objectif professionnel ;
- mes coordonnées et mon CV.

### Positionnement

**Développeur Java — Profil technique & industriel**

Le profil associe :

- développement logiciel ;
- applications métier ;
- analyse fonctionnelle ;
- conception technique ;
- maintenance corrective et évolutive ;
- intégration avec des systèmes externes ;
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
- **Profil**
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

### Identité visuelle

Le portfolio utilise une identité visuelle cohérente avec :

- une couleur d'accent commune ;
- des cartes et composants réutilisables ;
- des icônes centralisées ;
- une favicon personnalisée ;
- les logos des entreprises associés aux expériences professionnelles.

---

## Parcours professionnel

Le parcours professionnel est présenté sous la forme d'une **timeline**.

Chaque expérience peut présenter :

- période ;
- entreprise ;
- logo de l'entreprise ;
- localisation ou site ;
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

**Technicentre Atlantique — Châtillon (92)**

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

Les niveaux de maîtrise sont présentés visuellement afin de distinguer les
domaines d'expertise et les compétences en cours de développement.

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
- d'une interface responsive ;
- d'une identité visuelle personnalisée ;
- d'une favicon dédiée ;
- de composants d'icônes réutilisables.

#### Technologies

- Vue.js
- JavaScript
- CSS
- Vite
- HTML
- Git

---

## Contact

La section Contact permet d'accéder directement aux différents moyens de
contact :

- adresse e-mail ;
- téléphone ;
- profil LinkedIn ;
- profil GitHub ;
- localisation.

Un accès direct au téléchargement du CV est également disponible.

---

## Architecture du projet

Le projet sépare les données, les modèles, les composants, les styles et la
logique réutilisable.

```text
portefolio-vue/
│
├── public/
│   ├── cv/
│   │   └── CV-Remi-Verhaeghe.pdf
│   │
│   ├── images/
│   │   └── companies/
│   │       ├── sncf.svg
│   │       └── dsd-system.svg
│   │
│   └── favicon.ico
│
├── src/
│   │
│   ├── assets/
│   │   └── css/
│   │       ├── animations/
│   │       │   └── animations.css
│   │       │
│   │       ├── base/
│   │       │   ├── reset.css
│   │       │   ├── typography.css
│   │       │   └── variables.css
│   │       │
│   │       ├── components/
│   │       │   ├── buttons.css
│   │       │   ├── navigation.css
│   │       │   └── section-title.css
│   │       │
│   │       ├── layout/
│   │       │   └── container.css
│   │       │
│   │       ├── responsive/
│   │       │   └── responsive.css
│   │       │
│   │       ├── sections/
│   │       │   ├── about.css
│   │       │   ├── career.css
│   │       │   ├── contact.css
│   │       │   ├── experience.css
│   │       │   ├── hero.css
│   │       │   ├── profile.css
│   │       │   ├── projects.css
│   │       │   └── skills.css
│   │       │
│   │       └── main.css
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── AppIcon.vue
│   │   │   ├── NavigationBar.vue
│   │   │   └── SectionTitle.vue
│   │   │
│   │   └── home/
│   │       ├── HeroSection.vue
│   │       ├── ProfileSection.vue
│   │       ├── AboutSection.vue
│   │       ├── ExperienceSection.vue
│   │       ├── SkillsSection.vue
│   │       ├── ProjectsSection.vue
│   │       ├── CareerSection.vue
│   │       └── ContactSection.vue
│   │
│   ├── composables/
│   │   ├── useActiveSection.js
│   │   ├── useScrollReveal.js
│   │   └── useTheme.js
│   │
│   ├── data/
│   │   ├── career.js
│   │   ├── experiences.js
│   │   ├── profile.js
│   │   ├── projects.js
│   │   ├── sections.js
│   │   └── skills.js
│   │
│   ├── models/
│   │   ├── Career.js
│   │   ├── Experience.js
│   │   ├── Profile.js
│   │   ├── Project.js
│   │   ├── Section.js
│   │   ├── Skill.js
│   │   └── SkillCategory.js
│   │
│   ├── router/
│   │   └── index.js
│   │
│   ├── views/
│   │   └── HomeView.vue
│   │
│   ├── App.vue
│   └── main.js
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
