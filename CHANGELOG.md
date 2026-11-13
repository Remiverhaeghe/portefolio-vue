# Changelog

## Non publié

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
