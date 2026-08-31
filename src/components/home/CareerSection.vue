<script setup>
import { sections } from '@/data/sections.js'
import SectionTitle from '@/components/common/SectionTitle.vue'
import AppIcon from '@/components/common/AppIcon.vue'
import { useScrollReveal } from '@/composables/useScrollReveal.js'

/**
 * Section Objectif professionnel.
 *
 * Présente le positionnement professionnel recherché
 * ainsi que les principaux types de postes ciblés.
 */

const {
  element: careerSection,
  visible: careerVisible,
} = useScrollReveal()

const positions = [
  'Développement Java',
  'Développement d’applications métier',
  'Développement Full-Stack',
  'Projets techniques à forte dimension métier',
]
</script>

<template>
  <section
    ref="careerSection"
    :id="sections.career.anchor"
    class="section career"
    :class="{ section_visible: careerVisible }"
  >
    <div class="container">

      <!-- =====================================================
           TITRE
           ===================================================== -->

      <SectionTitle
        :title="sections.career.title"
      />


      <!-- =====================================================
           OBJECTIF
           ===================================================== -->

      <article class="career_content">

        <!-- Positionnement -->

        <div class="career_label">
          <span class="career_label_icon">
            <AppIcon
              name="target"
              :size="16"
            />
          </span>

          <span>
            Positionnement professionnel
          </span>
        </div>


        <!-- Titre -->

        <h2 class="career_title">
          Développeur logiciel / Ingénieur développement
        </h2>


        <!-- Description -->

        <p class="career_description">
          Mettre à profit mon expérience du développement Java,
          des applications métier et des environnements industriels
          au sein d’une équipe technique où je pourrai contribuer
          à des projets concrets et poursuivre mon évolution dans
          le développement logiciel.
        </p>


        <!-- ===================================================
             SÉPARATION
             =================================================== -->

        <div class="career_separator"></div>


        <!-- ===================================================
             POSTES RECHERCHÉS
             =================================================== -->

        <div class="career_positions">

          <div class="career_positions_header">

            <span class="career_positions_icon">
              <AppIcon
                name="briefcase"
                :size="17"
              />
            </span>

            <p class="career_positions_label">
              Types de postes recherchés
            </p>

          </div>


          <div class="career_positions_list">

            <span
              v-for="position in positions"
              :key="position"
              class="career_position"
            >
              {{ position }}
            </span>

          </div>

        </div>

      </article>

    </div>
  </section>
</template>
