<script setup>
import { skillCategories } from '@/data/skills.js'
import { SKILL_LEVELS, SKILL_LEVEL_MAX } from '@/models/Skill.js'
import { sections } from '@/data/sections.js'
import SectionTitle from '@/components/common/SectionTitle.vue'
import AppIcon from '@/components/common/AppIcon.vue'
import { useScrollReveal } from '@/composables/useScrollReveal.js'

/**
 * Section présentant les compétences techniques.
 *
 * Les compétences sont présentées sous forme de cartes
 * avec un indicateur visuel du niveau de maîtrise.
 */

// Gestion de l'apparition des compétences.
const {
  element: skillsSection,
  visible: skillsVisible,
} = useScrollReveal()


</script>


<template>
  <section
    ref="skillsSection"
    :id="sections.skills.anchor"
    class="section skills"
    :class="{ section_visible: skillsVisible }"
  >
    <div class="container">

      <!-- =====================================================
           TITRE
           ===================================================== -->

      <SectionTitle
        :title="sections.skills.title"
      />


      <!-- =====================================================
           INTRODUCTION
           ===================================================== -->

      <p class="skills_intro">
        Un ensemble de compétences techniques et méthodologiques
        acquises au cours de mon parcours.
      </p>


      <!-- =====================================================
           CATÉGORIES
           ===================================================== -->

      <div class="skills_categories">

        <article
          v-for="(category, categoryIndex) in skillCategories"
          :key="category.title"
          class="skills_category"
          :class="{
            skills_category_visible: skillsVisible,
          }"
          :style="{
            '--category-delay': `${categoryIndex * 150}ms`,
          }"
        >

          <!-- =================================================
               EN-TÊTE DE CATÉGORIE
               ================================================= -->

          <div class="skills_category_header">

            <div class="skills_category_icon">
              <AppIcon
                :name="category.icon"
                :size="28"
              />
            </div>

            <div class="skills_category_heading">

              <h3 class="skills_category_title">
                {{ category.title }}
              </h3>

              <p
                v-if="category.description"
                class="skills_category_description"
              >
                {{ category.description }}
              </p>

            </div>

          </div>


          <!-- =================================================
               LISTE DES COMPÉTENCES
               ================================================= -->

          <div class="skills_list">

            <div
              v-for="(skill, index) in category.skills"
              :key="skill.name"
              class="skill"
              :class="skill.getLevelClass()"
              :style="{
                '--skill-delay': `${categoryIndex * 150 + index * 100}ms`,
              }"
            >

              <!-- Nom -->

              <div class="skill_name_wrapper">

                <span class="skill_indicator"></span>

                <span class="skill_name">
                  {{ skill.name }}
                </span>

              </div>


              <!-- Indicateur de niveau -->

              <div class="skill_rating">

                <span
                  v-for="point in SKILL_LEVEL_MAX"
                  :key="point"
                  class="skill_rating_dot"
                  :class="{
                    skill_rating_dot_active:
                      point <= skill.level,
                  }"
                ></span>

              </div>


              <!-- Libellé -->

              <span class="skill_level">
                {{ skill.getLabel() }}
              </span>

            </div>

          </div>

        </article>

      </div>


      <!-- =====================================================
           LÉGENDE DES NIVEAUX
           ===================================================== -->

      <div class="skills_legend">

        <div
          v-for="level in SKILL_LEVELS"
          :key="level.value"
          class="skills_legend_item"
          :class="level.className"
        >

          <div class="skills_legend_rating">
            <span
              v-for="point in SKILL_LEVEL_MAX"
              :key="point"
              class="skill_rating_dot"
              :class="{
                skill_rating_dot_active: point <= level.value,
              }"
            ></span>
          </div>

          <div class="skills_legend_content">

            <span class="skills_legend_label">
              {{ level.label }}
            </span>

            <span class="skills_legend_description">
              {{ level.description }}
            </span>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>
