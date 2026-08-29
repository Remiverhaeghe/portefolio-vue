<script setup>
import { experiences } from '@/data/experiences.js'
import { sections } from '@/data/sections.js'
import SectionTitle from '@/components/common/SectionTitle.vue'
import { useScrollReveal } from '@/composables/useScrollReveal.js'

defineProps({
  number: {
    type: Number,
    required: true,
  },
})

const { element: experienceSection, visible: experienceVisible } = useScrollReveal()
</script>

<template>
  <section
    ref="experienceSection"
    :id="sections.experience.anchor"
    class="experience"
    :class="{ section_visible: experienceVisible }"
  >
    <div class="experience_container">
      <!-- En-tête -->
      <SectionTitle :number="number" :title="sections.experience.title" />

      <p class="experience_intro">
        Mon évolution professionnelle à travers le développement logiciel, les applications métier
        et les environnements industriels.
      </p>

      <!-- Timeline -->
      <div class="experience_timeline">
        <article
          v-for="(experience, index) in experiences"
          :key="`${experience.company}-${experience.title}`"
          class="experience_item"
          :class="{
            experience_item_visible: experienceVisible,
          }"
          :style="{
            '--experience-delay': `${index * 180}ms`,
          }"
        >
          <!-- Point sur la timeline -->
          <div class="experience_marker">
            <span></span>
          </div>

          <!-- Période -->
          <div class="experience_date">
            {{ experience.period }}
          </div>

          <!-- Contenu -->
          <div class="experience_card">
            <div class="experience_header">
              <div class="experience_identity">
                <p class="experience_company">
                  {{ experience.company }}
                </p>

                <h3 class="experience_title">
                  {{ experience.title }}
                </h3>
              </div>
            </div>

            <!-- Description -->
            <p v-if="experience.description" class="experience_description">
              {{ experience.description }}
            </p>

            <!-- Responsabilités -->
            <div v-if="experience.responsibilities?.length" class="experience_block">
              <h4 class="experience_block_title">Responsabilités</h4>

              <ul class="experience_list_items">
                <li v-for="responsibility in experience.responsibilities" :key="responsibility">
                  {{ responsibility }}
                </li>
              </ul>
            </div>

            <!-- Réalisations -->
            <div v-if="experience.hasAchievements()" class="experience_block">
              <h4 class="experience_block_title">Réalisations</h4>

              <ul class="experience_list_items">
                <li v-for="achievement in experience.achievements" :key="achievement">
                  {{ achievement }}
                </li>
              </ul>
            </div>

            <!-- Technologies -->
            <div v-if="experience.technologies?.length" class="experience_block">
              <h4 class="experience_block_title">Technologies</h4>

              <div class="experience_technologies">
                <span
                  v-for="technology in experience.technologies"
                  :key="technology"
                  class="technology_badge"
                >
                  {{ technology }}
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
