import { Skill } from '@/models/Skill.js'
import { SkillCategory } from '@/models/SkillCategory.js'

/**
 * Compétences techniques regroupées par domaine.
 */
export const skillCategories = [
  new SkillCategory({
    title: 'Développement',
    description:
      'Développement d’applications métier et de services.',

    skills: [
      new Skill('Java', 5),
      new Skill('Spring', 4),
      new Skill('Hibernate', 4),
      new Skill('JavaScript', 3),
      new Skill('Vue.js', 3),
    ],
  }),

  new SkillCategory({
    title: 'Bases de données',
    description:
      'Conception, exploitation et optimisation des données.',

    skills: [
      new Skill('SQL Server', 5),
      new Skill('SQL', 5),
    ],
  }),

  new SkillCategory({
    title: 'API & intégration',
    description:
      'Échanges de données et intégration avec des systèmes externes.',

    skills: [
      new Skill('API REST', 4),
      new Skill('XML', 4),
      new Skill('CSV', 4),
      new Skill('SFTP', 2),
    ],
  }),

  new SkillCategory({
    title: 'Outils & environnement',
    description:
      'Outils utilisés dans le développement et la gestion des projets.',

    skills: [
      new Skill('Maven', 4),
      new Skill('Git', 4),
      new Skill('IntelliJ IDEA', 4),
    ],
  }),

  new SkillCategory({
    title: 'Méthodes & métier',
    description:
      'Compétences issues du parcours technique et industriel.',

    skills: [
      new Skill('Analyse fonctionnelle', 5),
      new Skill('Gestion de projet', 4),
      new Skill('Maintenance', 5),
      new Skill('Amélioration continue', 5),
      new Skill('Management', 4),
    ],
  }),
]
