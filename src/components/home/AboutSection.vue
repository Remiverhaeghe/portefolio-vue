<script setup>
import { sections } from '@/data/sections.js'
import { profile } from '@/data/profile.js'
import SectionTitle from '@/components/common/SectionTitle.vue'
import AppIcon from '@/components/common/AppIcon.vue'
import { useScrollReveal } from '@/composables/useScrollReveal.js'

/**
 * Section présentant le profil, les points clés et les postes recherchés.
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

      <!-- Points clés -->
      <div
        v-if="profile.focus.length"
        class="profile_summary_card"
      >
        <article
          v-for="item in profile.focus"
          :key="item.label"
          class="profile_summary_item"
        >
          <div class="profile_summary_icon">
            <AppIcon :name="item.icon" :size="22" />
          </div>

          <div class="profile_summary_content">
            <p class="profile_summary_label">
              {{ item.label }}
            </p>

            <p class="profile_summary_value">
              {{ item.value }}
            </p>
          </div>
        </article>
      </div>

      <!-- Postes recherchés -->
      <div
        v-if="profile.targets.length"
        class="about_targets"
      >
        <div class="career_positions_header">
          <span class="career_positions_icon">
            <AppIcon
              name="briefcase"
              :size="17"
            />
          </span>

          <p class="career_positions_label">
            Postes recherchés
          </p>
        </div>

        <div class="career_positions_list">
          <span
            v-for="target in profile.targets"
            :key="target"
            class="career_position"
          >
            {{ target }}
          </span>
        </div>
      </div>

    </div>
  </section>
</template>
