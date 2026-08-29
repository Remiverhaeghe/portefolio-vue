/**
 * Modèle représentant une catégorie de compétences.
 */
export class SkillCategory {
  constructor({
    title,
    description = '',
    skills = [],
  }) {
    // Nom de la catégorie.
    this.title = title

    // Description du domaine.
    this.description = description

    // Compétences appartenant à la catégorie.
    this.skills = skills
  }

  /**
   * Retourne le nombre de compétences de la catégorie.
   */
  getSkillCount() {
    return this.skills.length
  }

  /**
   * Indique si la catégorie contient des compétences.
   */
  hasSkills() {
    return this.skills.length > 0
  }
}