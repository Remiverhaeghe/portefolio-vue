/**
 * Niveaux de maîtrise, du plus élevé au plus bas.
 */
export const SKILL_LEVELS = [
  {
    value: 5,
    label: 'Expertise',
    className: 'skill_level_expertise',
    description:
      'Niveau expert, autonomie et capacité à intervenir sur des sujets complexes.',
  },
  {
    value: 4,
    label: 'Très bonne maîtrise',
    className: 'skill_level_advanced',
    description: 'Niveau avancé avec une bonne autonomie.',
  },
  {
    value: 3,
    label: 'Bonne maîtrise',
    className: 'skill_level_good',
    description: 'Niveau opérationnel permettant une utilisation régulière.',
  },
  {
    value: 2,
    label: 'Maîtrise',
    className: 'skill_level_basic',
    description:
      'Connaissances pratiques et utilisation dans le cadre de projets.',
  },
]

export const SKILL_LEVEL_MAX = 5

const SKILL_LEVEL_MIN = 2

/**
 * Modèle représentant une compétence.
 */
export class Skill {
  constructor(name, level = SKILL_LEVEL_MIN) {
    this.name = name
    this.level = Math.min(
      Math.max(Math.round(level), SKILL_LEVEL_MIN),
      SKILL_LEVEL_MAX,
    )
  }

  getLevel() {
    return SKILL_LEVELS.find((level) => level.value === this.level)
  }

  getLabel() {
    return this.getLevel().label
  }

  getLevelClass() {
    return this.getLevel().className
  }
}
