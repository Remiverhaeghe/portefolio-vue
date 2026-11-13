import { Stat } from '@/models/Stat.js'

/**
 * Chiffres clés affichés sous l'accueil.
 *
 * Chaque chiffre doit pouvoir être vérifié dans un projet public
 * ou dans le parcours : ne rien ajouter qui ne soit pas défendable.
 */
export const stats = [
  new Stat({
    value: '10+',
    icon: 'train',
    label: 'ans de maintenance et de production ferroviaire à la SNCF',
  }),
  new Stat({
    value: '270+',
    icon: 'flask',
    label: 'tests automatisés sur nas-monitor',
  }),
  new Stat({
    value: '96 %',
    icon: 'gauge',
    label: 'd’indice de mutation, qui prouve que les tests détectent les erreurs',
  }),
  new Stat({
    value: '5',
    icon: 'folders',
    label: 'projets publics sur GitHub, présentés plus bas',
  }),
]
