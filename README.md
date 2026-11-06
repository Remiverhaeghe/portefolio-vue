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
| `npm run build` | Build de production dans `dist/` |
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
| `projects.js` | Projets |
| `sections.js` | Titres, ancres et ordre de la navigation |

Les images sont dans `public/images/`. Les chemins vers `public/` passent par `import.meta.env.BASE_URL` pour fonctionner sous le sous-chemin de GitHub Pages.

## Déploiement

Le workflow `.github/workflows/ci.yml` lance le lint, les tests et le build à chaque push et pull request. Sur `main`, il publie ensuite `dist/` sur GitHub Pages (source « GitHub Actions » dans les réglages du dépôt).

## Documentation

| Sujet | Fichier |
|---|---|
| Organisation du code, modèles, composables, tests | [docs/architecture.md](docs/architecture.md) |
| Historique des évolutions | [CHANGELOG.md](CHANGELOG.md) |

## Licence

Code sous licence MIT, voir [LICENSE](LICENSE). Les textes, informations personnelles et logos d'entreprises ne sont pas couverts par cette licence.
