<script setup>
import { profile } from '@/data/profile.js'
import { useScrollReveal } from '@/composables/useScrollReveal.js'

defineProps({
  number: {
    type: Number,
    required: true,
  },
})

const {
  element,
  visible,
} = useScrollReveal()
</script>

<template>
  <section
    ref="element"
    id="profil"
    class="profile_summary"
    :class="{ section_visible: visible }"
  >
    <div class="profile_summary_container">

      <!-- En-tête -->
      <div class="profile_summary_header">

        <p class="profile_summary_label">
          Profil
        </p>

        <h2 class="profile_summary_title">
          En un coup d'œil
        </h2>

      </div>

      <!-- Cartes -->
      <div class="profile_summary_list">

        <article
          v-for="(item, index) in profile.focus"
          :key="item.label"
          class="profile_summary_card"
          :style="{
            '--summary-delay': `${index * 180}ms`,
          }"
        >

          <p class="profile_summary_card_label">
            {{ item.label }}
          </p>

          <p class="profile_summary_card_value">
            {{ item.value }}
          </p>

        </article>

      </div>

    </div>
  </section>
</template>
