/**
 * Modèle représentant un chiffre clé.
 */
export class Stat {
  constructor({ value, label, icon = '' }) {
    // Valeur affichée en grand (« 270+ », « 96 % »).
    this.value = value

    // Ce que la valeur mesure.
    this.label = label

    // Nom d'une icône d'AppIcon.
    this.icon = icon
  }
}
