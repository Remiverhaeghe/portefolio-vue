<script setup>
import { sections } from '@/data/sections.js'
import { profile } from '@/data/profile.js'
import SectionTitle from '@/components/common/SectionTitle.vue'
import { useScrollReveal } from '@/composables/useScrollReveal.js'

defineProps({
  number: {
    type: Number,
    required: true,
  },
})

const {
  element: aboutSection,
  visible: aboutVisible,
} = useScrollReveal()
</script>

<template>
  <section
    ref="aboutSection"
    :id="sections.about.anchor"
    class="about"
    :class="{ section_visible: aboutVisible }"
  >
    <div class="about_container">

      <!-- En-tête -->
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
