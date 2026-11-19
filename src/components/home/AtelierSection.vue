<script setup>
import { nextTick, ref } from 'vue'
import { sections } from '@/data/sections.js'
import { capturesCarnet, carnet } from '@/data/atelierCarnet.js'
import { capturesDisponibles, indexCapturesAtelier } from '@/utils/captures.js'
import SectionTitle from '@/components/common/SectionTitle.vue'
import AppIcon from '@/components/common/AppIcon.vue'
import { useScrollReveal } from '@/composables/useScrollReveal.js'

/**
 * Croquis du carnet d'Atelier, tirés des captures de son dépôt.
 */

const props = defineProps({
  // Remplaçable dans les tests, qui n'ont pas les fichiers recopiés au build.
  index: {
    type: Object,
    default: () => indexCapturesAtelier,
  },
})

const croquis = capturesDisponibles(capturesCarnet, props.index)

// Croquis ouvert en grand.
const lightbox = ref(null)
const ouvert = ref(null)

function ouvrir(pCroquis) {
  ouvert.value = pCroquis

  nextTick(() => {
    if (typeof lightbox.value?.showModal === 'function') {
      lightbox.value.showModal()
    }
  })
}

function fermer() {
  if (typeof lightbox.value?.close === 'function') {
    lightbox.value.close()
  }

  ouvert.value = null
}

const {
  element: atelierSection,
  visible: atelierVisible,
} = useScrollReveal()
</script>

<template>
  <section
    ref="atelierSection"
    :id="sections.atelier.anchor"
    class="section atelier"
    :class="{ section_visible: atelierVisible }"
  >
    <div class="container">
      <SectionTitle :title="sections.atelier.title" />

      <div class="atelier_intro">
        <p class="atelier_text">
          {{ carnet.intro }}
        </p>

        <ul class="atelier_points">
          <li
            v-for="point in carnet.points"
            :key="point"
          >
            {{ point }}
          </li>
        </ul>
      </div>

      <!-- Feuille quadrillée, comme dans l'application -->
      <ul
        v-if="croquis.length"
        class="atelier_sheet"
      >
        <li
          v-for="(item, index) in croquis"
          :key="item.nom"
          class="atelier_card"
          :style="{ '--atelier-delay': `${index * 90}ms` }"
        >
          <button
            type="button"
            class="atelier_shot"
            :aria-label="`${carnet.agrandir} : ${item.titre}`"
            @click="ouvrir(item)"
          >
            <img
              :src="item.src"
              :alt="`${item.titre}. ${item.legende}`"
              width="1080"
              height="2340"
              loading="lazy"
            >
          </button>

          <p class="atelier_card_title">
            {{ item.titre }}
          </p>

          <p class="atelier_card_caption">
            {{ item.legende }}
          </p>
        </li>
      </ul>

      <p
        v-else
        class="atelier_text atelier_empty"
      >
        {{ carnet.vide }}
      </p>

      <p class="atelier_source">
        {{ carnet.source }}
        <a
          :href="carnet.lienDepot"
          target="_blank"
          rel="noopener noreferrer"
          class="atelier_link"
        >
          <AppIcon
            name="github"
            :size="16"
          />
          <span>{{ carnet.lienDepotTexte }}</span>
        </a>
      </p>
    </div>

    <dialog
      ref="lightbox"
      class="lightbox"
      :aria-label="carnet.agrandir"
      @click.self="fermer"
      @close="ouvert = null"
    >
      <figure
        v-if="ouvert"
        class="lightbox_figure"
      >
        <img
          :src="ouvert.src"
          :alt="`${ouvert.titre}. ${ouvert.legende}`"
          class="lightbox_image"
        >

        <figcaption class="lightbox_caption">
          {{ ouvert.titre }} : {{ ouvert.legende }}
        </figcaption>
      </figure>

      <button
        type="button"
        class="button button_secondary lightbox_close"
        @click="fermer"
      >
        <AppIcon
          name="close"
          :size="18"
        />
        <span>{{ carnet.fermer }}</span>
      </button>
    </dialog>
  </section>
</template>
