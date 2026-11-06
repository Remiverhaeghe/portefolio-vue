/**
 * Modèle représentant une catégorie de compétences.
 */
export class SkillCategory {
  constructor({
    title,
    description = '',
    icon = 'layers',
    skills = [],
  }) {
    // Nom de la catégorie.
    this.title = title

    // Description du domaine.
    this.description = description

    // Nom de l'icône AppIcon.
    this.icon = icon

    // Compétences appartenant à la catégorie.
    this.skills = skills
  }
}
