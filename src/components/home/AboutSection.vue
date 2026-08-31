<script setup>
import { sections } from '@/data/sections.js'
import { profile } from '@/data/profile.js'
import SectionTitle from '@/components/common/SectionTitle.vue'
import { useScrollReveal } from '@/composables/useScrollReveal.js'

/**
 * Section présentant le profil et le parcours.
 */

// Gestion de l'apparition au défilement.
const {
  element: aboutSection,
  visible: aboutVisible,
} = useScrollReveal()
</script>

<template>
  <section
    ref="aboutSection"
    :id="sections.about.anchor"
    class="section about"
    :class="{ section_visible: aboutVisible }"
  >
    <div class="container">

      <!-- Titre de section -->
      <SectionTitle
        :number="number"
        :title="sections.about.title"
      />

      <!-- Présentation -->
      <div class="about_content">

        <p
          v-for="paragraph in profile.about"
          :key="paragraph"
          class="about_paragraph"
        >
          {{ paragraph }}
        </p>

      </div>

    </div>
  </section>
</template>
