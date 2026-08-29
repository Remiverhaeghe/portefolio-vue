<script setup>
import { career } from '@/data/career.js'
import { sections } from '@/data/sections.js'
import SectionTitle from '@/components/common/SectionTitle.vue'
import { useScrollReveal } from '@/composables/useScrollReveal.js'

/**
 * Section présentant l'objectif professionnel.
 */
defineProps({
  number: {
    type: Number,
    required: true,
  },
})

const {
  element: careerSection,
  visible: careerVisible,
} = useScrollReveal()
</script>

<template>
  <section
    ref="careerSection"
    :id="sections.career.anchor"
    class="career"
    :class="{ section_visible: careerVisible }"
  >
    <div class="career_container">

      <!-- En-tête de section -->
      <SectionTitle
        :number="number"
        :title="sections.career.title"
      />

      <!-- Objectif principal -->
      <div class="career_content">

        <h3 class="career_title">
          {{ career.title }}
        </h3>

        <p class="career_description">
          {{ career.description }}
        </p>

        <!-- Postes ciblés -->
        <div
          v-if="career.hasTargets()"
          class="career_targets"
        >
          <h4 class="career_targets_title">
            Types de postes recherchés
          </h4>

          <div class="career_targets_list">
            <span
              v-for="target in career.targets"
              :key="target"
              class="career_target"
            >
              {{ target }}
            </span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
