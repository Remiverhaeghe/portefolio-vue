<script setup>
import { skillCategories } from '@/data/skills.js'
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


/**
 * Retourne l'icône associée à une catégorie.
 */
const getCategoryIcon = (title) => {
  const icons = {
    'Développement': 'code',
    'Bases de données': 'database',
    'API & intégration': 'layers',
    'Outils & environnement': 'wrench',
    'Méthodes & métier': 'briefcase',
  }

  return icons[title] || 'layers'
}


/**
 * Retourne la classe correspondant au niveau.
 *
 * 5 : Expertise
 * 4 : Très bonne maîtrise
 * 3 : Bonne maîtrise
 * 1-2 : Maîtrise
 */
const getLevelClass = (level) => {
  if (level >= 5) {
    return 'skill_level_expertise'
  }

  if (level >= 4) {
    return 'skill_level_advanced'
  }

  if (level >= 3) {
    return 'skill_level_good'
  }

  return 'skill_level_basic'
}
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
                :name="getCategoryIcon(category.title)"
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
              :class="getLevelClass(skill.level)"
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
                  v-for="point in 5"
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

        <!-- Expertise -->

        <div class="skills_legend_item skill_level_expertise">

          <div class="skills_legend_rating">
            <span
              v-for="point in 5"
              :key="point"
              class="skill_rating_dot skill_rating_dot_active"
            ></span>
          </div>

          <div class="skills_legend_content">

            <span class="skills_legend_label">
              Expertise
            </span>

            <span class="skills_legend_description">
              Niveau expert, autonomie et capacité à intervenir
              sur des sujets complexes.
            </span>

          </div>

        </div>


        <!-- Très bonne maîtrise -->

        <div class="skills_legend_item skill_level_advanced">

          <div class="skills_legend_rating">

            <span
              v-for="point in 5"
              :key="point"
              class="skill_rating_dot"
              :class="{
                skill_rating_dot_active: point <= 4,
              }"
            ></span>

          </div>

          <div class="skills_legend_content">

            <span class="skills_legend_label">
              Très bonne maîtrise
            </span>

            <span class="skills_legend_description">
              Niveau avancé avec une bonne autonomie.
            </span>

          </div>

        </div>


        <!-- Bonne maîtrise -->

        <div class="skills_legend_item skill_level_good">

          <div class="skills_legend_rating">

            <span
              v-for="point in 5"
              :key="point"
              class="skill_rating_dot"
              :class="{
                skill_rating_dot_active: point <= 3,
              }"
            ></span>

          </div>

          <div class="skills_legend_content">

            <span class="skills_legend_label">
              Bonne maîtrise
            </span>

            <span class="skills_legend_description">
              Niveau opérationnel permettant une utilisation
              régulière.
            </span>

          </div>

        </div>


        <!-- Maîtrise -->

        <div class="skills_legend_item skill_level_basic">

          <div class="skills_legend_rating">

            <span
              v-for="point in 5"
              :key="point"
              class="skill_rating_dot"
              :class="{
                skill_rating_dot_active: point <= 2,
              }"
            ></span>

          </div>

          <div class="skills_legend_content">

            <span class="skills_legend_label">
              Maîtrise
            </span>

            <span class="skills_legend_description">
              Connaissances pratiques et utilisation dans
              le cadre de projets.
            </span>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>
