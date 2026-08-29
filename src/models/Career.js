/**
 * Modèle représentant l'objectif professionnel.
 */
export class Career {
  constructor({
    title,
    description,
    targets = [],
  }) {
    // Intitulé de l'objectif.
    this.title = title

    // Présentation de l'objectif.
    this.description = description

    // Types de postes recherchés.
    this.targets = targets
  }

  /**
   * Indique si des postes sont ciblés.
   */
  hasTargets() {
    return this.targets.length > 0
  }
}
