/**
 * Modèle représentant le profil professionnel.
 */
export class Profile {
  constructor({
    firstName,
    lastName,
    title,
    shortTitle,
    introduction,
    about = [],
    focus = [],
    summary = [],
    location = '',
    email = '',
    phone = '',
    github = '',
    linkedin = '',
    cvUrl = '',
  }) {
    // Identité.
    this.firstName = firstName
    this.lastName = lastName

    // Positionnement professionnel.
    this.title = title
    this.shortTitle = shortTitle

    // Présentation.
    this.introduction = introduction
    this.about = about
    this.focus = focus
    this.summary = summary

    // Coordonnées.
    this.location = location
    this.email = email
    this.phone = phone

    // Réseaux professionnels.
    this.github = github
    this.linkedin = linkedin

    // CV.
    this.cvUrl = cvUrl
  }

  /**
   * Retourne le nom complet du profil.
   */
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}
