<script setup>
import { projects } from '@/data/projects.js'
import { sections } from '@/data/sections.js'
import SectionTitle from '@/components/common/SectionTitle.vue'
import AppIcon from '@/components/common/AppIcon.vue'
import { useScrollReveal } from '@/composables/useScrollReveal.js'

/**
 * Section présentant les principaux projets.
 */

// Gestion de l'apparition des projets.
const {
  element: projectsSection,
  visible: projectsVisible,
} = useScrollReveal()
</script>

<template>
  <section
    ref="projectsSection"
    :id="sections.projects.anchor"
    class="section projects"
    :class="{ section_visible: projectsVisible }"
  >
    <div class="container">

      <!-- =====================================================
           TITRE
           ===================================================== -->

      <SectionTitle
        :title="sections.projects.title"
      />


      <!-- =====================================================
           INTRODUCTION
           ===================================================== -->

      <p class="projects_intro">
        Quelques réalisations illustrant mon approche du développement,
        de la conception à la mise en œuvre technique.
      </p>


      <!-- =====================================================
           LISTE DES PROJETS
           ===================================================== -->

      <div class="projects_list">

        <article
          v-for="(project, index) in projects"
          :key="project.title"
          class="project"
          :class="{
            project_featured: project.featured,
            project_visible: projectsVisible,
          }"
          :style="{
            '--project-delay': `${index * 180}ms`,
          }"
        >

          <!-- =================================================
               EN-TÊTE
               ================================================= -->

          <div class="project_header">

            <div class="project_heading">

              <!-- Projet mis en avant -->

              <div
                v-if="project.featured"
                class="project_featured_label"
              >
                <span class="project_featured_icon">
                  <AppIcon
                    name="star"
                    :size="16"
                  />
                </span>

                <span>
                  Projet mis en avant
                </span>
              </div>


              <!-- Titre -->

              <h3 class="project_title">
                {{ project.title }}
              </h3>

            </div>

          </div>


          <!-- =================================================
               CONTENU
               ================================================= -->

          <div class="project_content">

            <!-- -------------------------------------------------
                 CONTEXTE
                 ------------------------------------------------- -->

            <div
              v-if="project.context"
              class="project_block"
            >
              <div class="project_block_header">

                <span class="project_block_icon">
                  <AppIcon
                    name="layers"
                    :size="18"
                  />
                </span>

                <h4 class="project_block_title">
                  Contexte
                </h4>

              </div>

              <p class="project_text">
                {{ project.context }}
              </p>
            </div>


            <!-- -------------------------------------------------
                 PROBLÉMATIQUE
                 ------------------------------------------------- -->

            <div
              v-if="project.problem"
              class="project_block"
            >
              <div class="project_block_header">

                <span class="project_block_icon">
                  <AppIcon
                    name="target"
                    :size="18"
                  />
                </span>

                <h4 class="project_block_title">
                  Problématique
                </h4>

              </div>

              <p class="project_text">
                {{ project.problem }}
              </p>
            </div>


            <!-- -------------------------------------------------
                 CONTRIBUTION
                 ------------------------------------------------- -->

            <div
              v-if="project.hasContribution()"
              class="project_block project_contribution"
            >
              <div class="project_block_header">

                <span class="project_block_icon">
                  <AppIcon
                    name="user"
                    :size="18"
                  />
                </span>

                <h4 class="project_block_title">
                  Ma contribution
                </h4>

              </div>

              <p class="project_text">
                {{ project.contribution }}
              </p>
            </div>


            <!-- -------------------------------------------------
                 SOLUTION
                 ------------------------------------------------- -->

            <div
              v-if="project.solution"
              class="project_block"
            >
              <div class="project_block_header">

                <span class="project_block_icon">
                  <AppIcon
                    name="lightbulb"
                    :size="18"
                  />
                </span>

                <h4 class="project_block_title">
                  Solution
                </h4>

              </div>

              <p class="project_text">
                {{ project.solution }}
              </p>
            </div>


            <!-- -------------------------------------------------
                 POINTS TECHNIQUES
                 ------------------------------------------------- -->

            <div
              v-if="project.hasHighlights()"
              class="project_block"
            >
              <div class="project_block_header">

                <span class="project_block_icon">
                  <AppIcon
                    name="wrench"
                    :size="18"
                  />
                </span>

                <h4 class="project_block_title">
                  Points techniques
                </h4>

              </div>

              <ul class="project_highlights">

                <li
                  v-for="highlight in project.highlights"
                  :key="highlight"
                >
                  {{ highlight }}
                </li>

              </ul>
            </div>


            <!-- -------------------------------------------------
                 TECHNOLOGIES
                 ------------------------------------------------- -->

            <div
              v-if="project.technologies.length"
              class="project_block"
            >
              <div class="project_block_header">

                <span class="project_block_icon">
                  <AppIcon
                    name="code"
                    :size="18"
                  />
                </span>

                <h4 class="project_block_title">
                  Technologies
                </h4>

              </div>

              <div class="project_technologies">

                <span
                  v-for="technology in project.technologies"
                  :key="technology"
                  class="technology_badge"
                >
                  {{ technology }}
                </span>

              </div>

            </div>


            <!-- -------------------------------------------------
                 LIENS
                 ------------------------------------------------- -->

            <div
              v-if="project.hasLinks()"
              class="project_links"
            >

              <a
                v-if="project.hasGithub()"
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="button button_secondary"
              >
                <AppIcon
                  name="github"
                  :size="18"
                />

                <span>
                  GitHub
                </span>
              </a>


              <a
                v-if="project.hasLiveDemo()"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="button button_primary"
              >
                <AppIcon
                  name="arrow_right"
                  :size="18"
                />

                <span>
                  Voir le projet
                </span>
              </a>

            </div>

          </div>

        </article>

      </div>

    </div>
  </section>
</template>
