<script setup>
import { profile } from '@/data/profile.js'
import { sections } from '@/data/sections.js'
import SectionTitle from '@/components/common/SectionTitle.vue'
import { useScrollReveal } from '@/composables/useScrollReveal.js'

defineProps({
  number: {
    type: Number,
    required: true,
  },
})

const {
  element: contactSection,
  visible: contactVisible,
} = useScrollReveal()
</script>

<template>
  <section
    ref="contactSection"
    :id="sections.contact.anchor"
    class="contact"
    :class="{ section_visible: contactVisible }"
  >
    <div class="contact_container">

      <!-- En-tête -->
      <SectionTitle
        :number="number"
        :title="sections.contact.title"
      />

      <!-- Présentation -->
      <div class="contact_content">

        <p class="contact_description">
          Disponible pour échanger autour d’une opportunité professionnelle,
          d’un projet ou d’une collaboration technique.
        </p>

        <!-- Coordonnées -->
        <div class="contact_links">

          <a
            v-if="profile.email"
            :href="`mailto:${profile.email}`"
            class="contact_link"
          >
            <span class="contact_link_label">
              Email
            </span>

            <span class="contact_link_value">
              {{ profile.email }}
            </span>
          </a>

          <a
            v-if="profile.phone"
            :href="`tel:${profile.phone}`"
            class="contact_link"
          >
            <span class="contact_link_label">
              Téléphone
            </span>

            <span class="contact_link_value">
              {{ profile.phone }}
            </span>
          </a>

          <a
            v-if="profile.linkedin"
            :href="profile.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="contact_link"
          >
            <span class="contact_link_label">
              LinkedIn
            </span>

            <span class="contact_link_value">
              Profil professionnel
            </span>
          </a>

          <a
            v-if="profile.github"
            :href="profile.github"
            target="_blank"
            rel="noopener noreferrer"
            class="contact_link"
          >
            <span class="contact_link_label">
              GitHub
            </span>

            <span class="contact_link_value">
              Projets et réalisations
            </span>
          </a>

        </div>

      </div>

    </div>
  </section>
</template>
