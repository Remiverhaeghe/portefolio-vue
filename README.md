# Portfolio — Rémi Verhaeghe

Site personnel présentant mon parcours, mes compétences et mes projets.

Application Vue.js 3 d'une seule page, construite avec Vite et publiée sur GitHub Pages :
https://remiverhaeghe.github.io/portefolio-vue/

## Lancement

Prérequis : Node.js 22.18 ou plus récent.

```bash
npm install
npm run dev
```

| Commande | Rôle |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production dans `dist/`, après `npm run captures` |
| `npm run captures` | Recopie les captures d'Atelier dans `src/assets/captures/` (non versionné) |
| `npm run preview` | Prévisualisation du build |
| `npm test` | Tests Vitest |
| `npm run test:watch` | Tests en mode surveillance |
| `npm run lint` | oxlint puis ESLint, avec correction automatique |
| `npm run format` | Formatage Prettier de `src/` |

## Contenu

Le texte du site est dans `src/data/`, séparé des composants :

| Fichier | Contenu |
|---|---|
| `profile.js` | Identité, présentation, points clés, postes recherchés, contact, CV |
| `experiences.js` | Parcours professionnel et formation |
| `skills.js` | Compétences par catégorie |
| `projects.js` | Projets : problématique, contribution, famille de technologies pour le filtre, captures d'écran |
| `stats.js` | Chiffres clés du bandeau sous l'accueil |
| `atelierCarnet.js` | Section Croquis et liste des captures d'Atelier à recopier |
| `sections.js` | Titres, ancres et ordre de la navigation |

Les images sont dans `public/images/` (captures des projets dans `public/images/projects/`). Les chemins vers `public/` passent par `import.meta.env.BASE_URL` pour fonctionner sous le sous-chemin de GitHub Pages.

Les captures d'Atelier ne sont pas versionnées ici : avant chaque build, `scripts/captures-atelier.mjs` les télécharge depuis `docs/captures/` du dépôt public Atelier (sans jeton), d'après les noms listés dans `atelierCarnet.js`. Une capture renommée ou retirée côté Atelier est omise du site, avec un avertissement dans le journal de la CI. Une erreur réseau fait échouer la CI, pour ne pas publier un site sans images ; en local, les fichiers déjà recopiés sont gardés.

## Déploiement

Le workflow `.github/workflows/ci.yml` lance le lint, les tests et le build à chaque push et pull request. Sur `main`, il publie ensuite `dist/` sur GitHub Pages (source « GitHub Actions » dans les réglages du dépôt). Après le build, il lance le site construit dans un navigateur (`scripts/captures-site.mjs`, playwright installé hors du dépôt) et le photographie en bureau clair, bureau sombre et téléphone : une erreur de script dans la page fait échouer la CI, et les trois images sont dans l'artefact `captures-site` du passage (14 jours), pour repérer une régression de mise en page à l'œil. Il republie aussi chaque jour à 5 h 17 UTC, pour reprendre les dernières captures d'Atelier sans attendre un push.

## Documentation

| Sujet | Fichier |
|---|---|
| Organisation du code, modèles, composables, tests | [docs/architecture.md](docs/architecture.md) |
| Historique des évolutions | [CHANGELOG.md](CHANGELOG.md) |

## Licence

Code sous licence MIT, voir [LICENSE](LICENSE). Les textes, informations personnelles et logos d'entreprises ne sont pas couverts par cette licence.
