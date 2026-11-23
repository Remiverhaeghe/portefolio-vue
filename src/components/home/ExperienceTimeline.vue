<script setup>
import { computed } from 'vue'

import { construireFrise } from '@/data/timeline.js'

const props = defineProps({
  experiences: { type: Array, required: true },
  anneeCourante: { type: Number, default: () => new Date().getFullYear() },
})

const frise = computed(() => construireFrise(props.experiences, props.anneeCourante))

// Une graduation tous les ans si la frise est courte, tous les deux ans sinon, pour rester lisible
const graduations = computed(() => {
  const vPas = frise.value.annees.length > 8 ? 2 : 1
  return frise.value.annees
    .filter((pAnnee) => (pAnnee - frise.value.debut) % vPas === 0)
    .map((pAnnee) => ({
      annee: pAnnee,
      gauche: ((pAnnee - frise.value.debut) / frise.value.annees.length) * 100,
    }))
})
</script>

<template>
  <nav
    v-if="frise.barres.length"
    class="frise"
    aria-label="Frise chronologique du parcours"
  >
    <div
      class="frise_piste"
      :style="{ '--frise-couloirs': frise.couloirs }"
    >
      <a
        v-for="barre in frise.barres"
        :key="barre.index"
        class="frise_barre"
        :class="{ frise_barre_formation: barre.formation, frise_barre_en_cours: barre.enCours }"
        :href="`#experience-${barre.index}`"
        :style="{
          left: `${barre.gauche}%`,
          width: `${barre.largeur}%`,
          '--frise-couloir': barre.couloir,
        }"
        :title="`${barre.titre}, ${barre.entreprise} (${barre.periode})`"
      >
        <span class="frise_nom">{{ barre.entreprise }}</span>
      </a>
    </div>

    <ol class="frise_axe">
      <li
        v-for="graduation in graduations"
        :key="graduation.annee"
        class="frise_annee"
        :style="{ left: `${graduation.gauche}%` }"
      >
        {{ graduation.annee }}
      </li>
    </ol>
  </nav>
</template>
