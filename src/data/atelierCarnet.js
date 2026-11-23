/**
 * Section « Carnet d'Atelier » et captures recopiées depuis le dépôt Atelier.
 *
 * Ce fichier est aussi lu par `scripts/captures-atelier.mjs` sous Node :
 * il ne doit rien utiliser de propre à Vite (`import.meta.env`, `import.meta.glob`).
 */

// Dépôt public d'où viennent les captures, faites par sa CI sur un chantier fictif.
export const ATELIER_DEPOT = 'Remiverhaeghe/atelier'
export const ATELIER_BRANCHE = 'main'
export const ATELIER_DOSSIER_CAPTURES = 'docs/captures'

// Captures montrées sur la carte du projet Atelier, dans la section Projets.
export const capturesCarte = [
  {
    nom: '02-chantier',
    alt: 'Écran d’un chantier dans Atelier : surface, budget et pièces',
  },
  {
    nom: '05-pose',
    alt: 'Plan de pose du parquet rangée par rangée',
  },
  {
    nom: '11-peinture',
    alt: 'Calcul de la peinture d’une pièce',
  },
]

// Croquis du carnet, dans l'ordre d'affichage.
export const capturesCarnet = [
  {
    nom: '15-rampants',
    titre: 'Pièce sous rampants',
    legende: 'Coupe cotée à l’échelle ; la jambette et le sommet se déplacent au doigt.',
  },
  {
    nom: '16-fenetre-bois',
    titre: 'Fenêtre bois sur mesure',
    legende: 'Châssis coté, débit des montants et traverses, vitrage à commander.',
  },
  {
    nom: '22-faux-plafond',
    titre: 'Faux plafond',
    legende: 'Coupe en relief, puis la liste de ce qu’il faut acheter.',
  },
  {
    nom: '23-placard-rampant',
    titre: 'Placard sous rampant',
    legende: 'Le placard dessiné en relief, une porte ouverte sur les bacs à roulettes.',
  },
  {
    nom: '18-lexique-tenon',
    titre: 'Lexique : tenon',
    legende: 'Chaque mot du métier a son schéma, la pièce concernée surlignée.',
  },
  {
    nom: '24-geste-scier',
    titre: 'Scier droit',
    legende: 'Les gestes de base se jouent en croquis animé, avec l’erreur courante.',
  },
  {
    nom: '20-finitions',
    titre: 'Finitions du bois',
    legende: 'Une coupe montre le film posé dessus ou la finition qui entre dans le bois.',
  },
  {
    nom: '56-dessin-piece',
    titre: 'Pièce en L dessinée',
    legende: 'Murs numérotés, coins lettrés ; le mur déduit des autres reste à mesurer.',
  },
  {
    nom: '57-mezzanine-en-l',
    titre: 'Mezzanine en L',
    legende: 'Son contour en tirets sur le plan, le coin découpé laissé à l’escalier.',
  },
  {
    nom: '58-suivi-humidite',
    titre: 'Humidité jour après jour',
    legende: 'Relevés du thermo-hygromètre, la date des travaux marquée, avant et après comparés.',
  },
]

// Texte de la section.
export const carnet = {
  intro:
    'Atelier est habillé comme un carnet de chantier. Le rendu compte autant que le calcul : un croquis lisible évite une erreur de coupe.',

  points: [
    'Écrans posés sur une feuille quadrillée, fiches à bord de papier tenues par un ruban adhésif.',
    'Croquis tracés au crayon à l’ouverture, cotes écrites à la main (police Caveat).',
    'Schémas en relief dessinés par le code en perspective cavalière, comme un croquis de menuisier, et non des images toutes faites.',
  ],

  source:
    'Captures faites par l’intégration continue d’Atelier sur un chantier fictif, et recopiées automatiquement à chaque publication de ce site.',

  lienDepot: `https://github.com/${ATELIER_DEPOT}/tree/${ATELIER_BRANCHE}/${ATELIER_DOSSIER_CAPTURES}`,

  lienDepotTexte: 'Toutes les captures dans le dépôt Atelier',

  agrandir: 'Agrandir le croquis',

  fermer: 'Fermer',

  vide: 'Les captures n’ont pas pu être recopiées lors de la dernière publication ; elles restent visibles dans le dépôt.',
}

/**
 * Noms de toutes les captures à recopier, sans doublon.
 */
export function capturesARecuperer() {
  const rNoms = [
    ...new Set([...capturesCarte, ...capturesCarnet].map((pCapture) => pCapture.nom)),
  ]
  return rNoms
}

/**
 * Adresse brute d'une capture dans le dépôt Atelier.
 */
export function urlCaptureBrute(pNom) {
  const rUrl = `https://raw.githubusercontent.com/${ATELIER_DEPOT}/${ATELIER_BRANCHE}/${ATELIER_DOSSIER_CAPTURES}/${pNom}.png`
  return rUrl
}
