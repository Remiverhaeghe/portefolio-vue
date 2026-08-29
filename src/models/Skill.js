/**
 * Modèle représentant une compétence.
 */
export class Skill {
  constructor(name, level = 1) {
    // Nom de la compétence.
    this.name = name

    // Niveau de maîtrise sur 5.
    this.level = Math.min(Math.max(level, 1), 5)
  }

  /**
   * Retourne le libellé correspondant au niveau.
   */
  getLabel() {
    const labels = {
      1: 'Notions',
      2: 'Maîtrise',
      3: 'Bonne maîtrise',
      4: 'Très bonne maîtrise',
      5: 'Expertise',
    }

    return labels[this.level]
  }

  /**
   * Retourne le niveau de maîtrise.
   */
  getLevelValue() {
    return this.level
  }

  /**
   * Indique si un niveau est défini.
   */
  hasLevel() {
    return this.level > 0
  }
}
