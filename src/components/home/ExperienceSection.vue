<script setup>
import { experiences } from '@/data/experiences.js'
import { sections } from '@/data/sections.js'
import SectionTitle from '@/components/common/SectionTitle.vue'
import AppIcon from '@/components/common/AppIcon.vue'
import { useScrollReveal } from '@/composables/useScrollReveal.js'

const {
  element: experienceSection,
  visible: experienceVisible,
} = useScrollReveal()
</script>

<template>
  <section
    ref="experienceSection"
    :id="sections.experience.anchor"
    class="experience"
    :class="{ section_visible: experienceVisible }"
  >
    <div class="container">

      <!-- =================================================
           EN-TÊTE
           ================================================= -->

      <SectionTitle
        :title="sections.experience.title"
      />

      <p class="experience_intro">
        Mon évolution professionnelle à travers le développement
        logiciel, les applications métier et les environnements industriels.
      </p>


      <!-- =================================================
           TIMELINE
           ================================================= -->

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

          <!-- -------------------------------------------------
               DATE
               ------------------------------------------------- -->

          <div class="experience_date">
            {{ experience.period }}
          </div>


          <!-- -------------------------------------------------
               POINT TIMELINE
               ------------------------------------------------- -->

          <div class="experience_marker">
            <span></span>
          </div>


          <!-- -------------------------------------------------
               CARTE
               ------------------------------------------------- -->

          <div class="experience_card">

            <!-- =================================================
                 EN-TÊTE DE L'EXPÉRIENCE
                 ================================================= -->

            <div class="experience_header">

              <!-- -------------------------------------------------
                   ENTREPRISE
                   ------------------------------------------------- -->

              <div class="experience_company">

                <!-- Logo -->

                <div
                  v-if="experience.logo"
                  class="experience_company_logo"
                >
                  <img
                    :src="experience.logo"
                    :alt="`Logo ${experience.company}`"
                  />
                </div>


                <!-- Informations entreprise -->

                <div class="experience_company_info">

                  <span class="experience_company_name">
                    {{ experience.company }}
                  </span>

                  <span
                    v-if="experience.location"
                    class="experience_location"
                  >
                    <AppIcon
                      name="location"
                      :size="15"
                    />

                    <span>
                      {{ experience.location }}
                    </span>
                  </span>

                </div>

              </div>


              <!-- -------------------------------------------------
                   POSTE
                   ------------------------------------------------- -->

              <h3 class="experience_title">
                {{ experience.title }}
              </h3>


              <!-- -------------------------------------------------
                   DESCRIPTION
                   ------------------------------------------------- -->

              <p
                v-if="experience.description"
                class="experience_description"
              >
                {{ experience.description }}
              </p>

            </div>


            <!-- =================================================
                 RESPONSABILITÉS
                 ================================================= -->

            <div
              v-if="experience.responsibilities?.length"
              class="experience_block"
            >

              <h4 class="experience_block_title">

                <span class="experience_block_icon">
                  <AppIcon
                    name="user"
                    :size="20"
                  />
                </span>

                <span>
                  Responsabilités
                </span>

              </h4>


              <ul class="experience_list_items">

                <li
                  v-for="responsibility in experience.responsibilities"
                  :key="responsibility"
                >
                  {{ responsibility }}
                </li>

              </ul>

            </div>


            <!-- =================================================
                 RÉALISATIONS
                 ================================================= -->

            <div
              v-if="experience.hasAchievements()"
              class="experience_block"
            >

              <h4 class="experience_block_title">

                <span class="experience_block_icon">
                  <AppIcon
                    name="star"
                    :size="20"
                  />
                </span>

                <span>
                  Réalisations
                </span>

              </h4>


              <ul class="experience_list_items">

                <li
                  v-for="achievement in experience.achievements"
                  :key="achievement"
                >
                  {{ achievement }}
                </li>

              </ul>

            </div>


            <!-- =================================================
                 TECHNOLOGIES
                 ================================================= -->

            <div
              v-if="experience.technologies?.length"
              class="experience_block experience_technologies_block"
            >

              <h4 class="experience_block_title">

                <span class="experience_block_icon">
                  <AppIcon
                    name="layers"
                    :size="20"
                  />
                </span>

                <span>
                  Environnement technique
                </span>

              </h4>


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
