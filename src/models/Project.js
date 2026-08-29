/**
 * Modèle représentant un projet.
 */
export class Project {
  constructor({
    title,
    context = '',
    problem = '',
    contribution = '',
    solution = '',
    technologies = [],
    highlights = [],
    githubUrl = '',
    liveUrl = '',
    featured = false,
  }) {
    // Informations principales.
    this.title = title
    this.context = context
    this.problem = problem
    this.contribution = contribution
    this.solution = solution

    // Technologies et points techniques.
    this.technologies = technologies
    this.highlights = highlights

    // Liens externes.
    this.githubUrl = githubUrl
    this.liveUrl = liveUrl

    // Mise en avant du projet.
    this.featured = featured
  }

  /**
   * Indique si le projet possède un dépôt GitHub.
   */
  hasGithub() {
    return Boolean(this.githubUrl)
  }

  /**
   * Indique si le projet possède une démonstration.
   */
  hasLiveDemo() {
    return Boolean(this.liveUrl)
  }

  /**
   * Indique si le projet possède une contribution.
   */
  hasContribution() {
    return Boolean(this.contribution)
  }

  /**
   * Indique si le projet possède des points techniques.
   */
  hasHighlights() {
    return this.highlights.length > 0
  }

  /**
   * Indique si le projet possède au moins un lien.
   */
  hasLinks() {
    return this.hasGithub() || this.hasLiveDemo()
  }
}
