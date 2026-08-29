/**
 * Modèle représentant une section du portfolio.
 */
export class Section {
  constructor({
    key,
    title,
    anchor,
  }) {
    // Identifiant de la section.
    this.key = key

    // Titre affiché.
    this.title = title

    // Ancre utilisée pour la navigation.
    this.anchor = anchor
  }
}
