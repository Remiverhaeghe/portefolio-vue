export const EXPERIENCE_TYPES = {
  job: 'job',
  training: 'training',
}

/**
 * Modèle représentant une expérience professionnelle ou une formation.
 */
export class Experience {
  constructor({
    type = EXPERIENCE_TYPES.job,
    title,
    company,
    logo = '',
    location = '',
    period,
    description = '',
    responsibilities = [],
    technologies = [],
    achievements = [],
  }) {
    // Informations principales du poste.
    this.type = type
    this.title = title
    this.company = company
    this.logo = logo
    this.location = location
    this.period = period

    // Présentation du contexte professionnel.
    this.description = description

    // Responsabilités exercées.
    this.responsibilities = responsibilities

    // Technologies et outils utilisés.
    this.technologies = technologies

    // Réalisations et résultats significatifs.
    this.achievements = achievements
  }

  /**
   * Indique si l'expérience possède des réalisations à présenter.
   */
  hasAchievements() {
    return this.achievements.length > 0
  }

  isTraining() {
    return this.type === EXPERIENCE_TYPES.training
  }
}
