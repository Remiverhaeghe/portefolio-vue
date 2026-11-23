# Changelog

## Non publié

### Parcours
- Frise chronologique au-dessus des cartes d'expérience : une barre par expérience sur un axe d'années, les périodes qui se chevauchent sur des couloirs séparés, la formation en pointillé ; chaque barre mène à la carte (`src/data/timeline.js`, `ExperienceTimeline.vue`). Elle se construit à partir des périodes de `experiences.js` : une expérience ajoutée y apparaît seule
### CI
- Captures du site construit (bureau clair, bureau sombre, téléphone) à chaque passage, publiées en artefact ; une erreur de script dans la page fait échouer la CI

### secrets-audit
- Une capture du rapport sur la carte secrets-audit, prise sur un dépôt fictif (valeurs masquées par l'outil)

### Cursus
- Quatre captures sur la carte Cursus (progression, tableau de bord de l'école, promotion, échanges), prises sur des données fictives avec le visuel « livret d'apprentissage » du projet

### Kalkul
- Captures refaites avec le nouvel habillage (touches rondes, écran à sept segments) : courbes, financier, scientifique, historique

### Tremplin mobile
- Deux captures de l'appli mobile sur la carte Tremplin : bilan d'une plongée et carnet de la semaine, générées par le test de captures du projet sur des données fictives

### Atelier en ligne
- Bouton vers la version web d'Atelier (`https://remiverhaeghe.github.io/atelier/`), publiée par sa CI sur GitHub Pages
- Carnet : trois croquis de plus, la pièce en L dessinée, la mezzanine en L et le suivi de l'humidité

### Projets à jour
- Tremplin remplace l'ancien « Scraper de données » (dépôt renommé) : application mobile hors ligne avec les 944 questions livrées, univers de la piscine, révision à la voix, version web pour l'iPhone ; trois captures du tableau de bord sur des données fictives
- Atelier : pièce dessinée d'après une forme avec murs déduits, fiche PDF de la pièce, suivi de l'humidité avant et après travaux, version web hors ligne
- Kalkul : devises hors ligne, historique cherchable et exportable, capture de l'onglet Historique
- nas-monitor : santé des disques (SMART)

### Croquis d'Atelier
- Nouvelle section « Croquis » : les écrans d'Atelier en carnet de chantier (pièce sous rampants, fenêtre bois, faux plafond, placard, lexique, geste, finitions), posés sur une feuille quadrillée et ouverts en grand au clic
- Captures d'Atelier recopiées automatiquement avant chaque build depuis `docs/captures/` de son dépôt public (`npm run captures`), au lieu de copies versionnées ; la carte du projet les utilise aussi
- Publication quotidienne sur GitHub Pages pour suivre les nouvelles captures

### Navigation
- Page « introuvable » pour les adresses inconnues, claire ou sombre selon le système, avec un lien vers le portfolio

### Projets
- Ajout d'Atelier, application Android de travaux en Flutter, avec trois captures en hauteur (nouvelle option `portrait` des images)
- Ajout de Cursus, projet de fin d'études : suivi des compétences d'apprentis en Symfony
- Chiffres clés : 7 projets publics présentés, avec un test qui vérifie que ce nombre suit la liste des projets

### Maintenance
- Dependabot : `oxlint` et `eslint-plugin-oxlint` mis à jour ensemble, versions mineures regroupées en une seule pull request

### Contenu
- Présentation réécrite à la première personne
- Parcours complété avec la formation Foreach Academy et la mission en intérim à la SNCF, dates corrigées
- Projets : ajout du scraper de données Python et de nas-monitor (mis en avant), liens GitHub
- Compétences : nouvelle catégorie PHP & Symfony, ajout de Python, FastAPI, Flutter, pytest, Playwright et Docker, niveaux recalibrés
- Sections Profil et Objectif professionnel regroupées dans À propos
- Numéro de téléphone retiré, boutons CV masqués tant que le fichier est absent
- Bandeau de chiffres clés sous l'accueil (années à la SNCF, tests, indice de mutation, projets publics)
- Projets : filtre par famille de technologies, une couleur et une icône par famille, captures d'écran de nas-monitor et de Kalkul ouvertes en grand au clic
- Accent vert de signal ferroviaire à la place du bleu, avec un texte sur accent adapté au thème sombre
- Référencement : image de partage, carte Twitter, adresse canonique, données structurées de la personne
- Icônes ajoutées : train, éprouvette, jauge, dépôts, agrandir, terminal, tasse, serveur, mise en page, fermer
- nas-monitor : tests (270) et indice de mutation (96 %) mis à jour
- Projets : ajout de secrets-audit et de Kalkul ; problématique et contribution renseignées pour chaque projet ; ordre revu (projets mis en avant en premier)

### Corrections
- Nom absent du hero
- Lien « Découvrir mon parcours » vers une ancre inexistante
- Sections plus hautes que l'écran qui pouvaient ne jamais apparaître
- Affichage bref du thème clair au chargement en mode sombre
- Délais d'animation conservés malgré la préférence de mouvement réduit

### Technique
- Suppression de Tailwind CSS et de vue-router, non utilisés
- Suppression du CSS inutilisé
- Niveaux de compétence, sections et icônes définis une seule fois dans les données
- Tests Vitest sur les compétences et la cohérence de la navigation
- Intégration continue et déploiement sur GitHub Pages
- CI en lecture seule par défaut, audit npm des dépendances, Dependabot pour npm et les actions GitHub
