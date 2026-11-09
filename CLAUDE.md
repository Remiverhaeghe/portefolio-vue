# portefolio-vue

Portfolio personnel en Vue 3 et Vite, publié sur GitHub Pages. Suivre les conventions de Rémi (skill `conventions-remi`). Toujours répondre en français.

- Le texte du site vit dans `src/data/`, jamais dans les composants.
- Les chemins vers `public/` passent par `import.meta.env.BASE_URL` (sous-chemin de GitHub Pages).
- Avant de valider : `npm run lint`, `npm test`, `npm run build`.
- Le contenu doit rester vrai : pas de projet, de chiffre ou de compétence que Rémi ne peut pas défendre. Les projets listés doivent exister en public sur GitHub.
- `README.md` et `CHANGELOG.md` à jour après chaque évolution.
