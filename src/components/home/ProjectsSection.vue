<script setup>
import { projects } from '@/data/projects.js'
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
  element: projectsSection,
  visible: projectsVisible,
} = useScrollReveal()
</script>

<template>
  <section
    ref="projectsSection"
    :id="sections.projects.anchor"
    class="projects"
    :class="{ section_visible: projectsVisible }"
  >
    <div class="projects_container">

      <!-- En-tête -->
      <SectionTitle
        :number="number"
        :title="sections.projects.title"
      />

      <!-- Introduction -->
      <p class="projects_intro">
        Quelques réalisations illustrant mon approche du développement,
        de la conception à la mise en œuvre technique.
      </p>

      <!-- Projets -->
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

          <!-- En-tête du projet -->
          <div class="project_header">

            <div>

              <p
                v-if="project.featured"
                class="project_label"
              >
                Projet mis en avant
              </p>

              <h3 class="project_title">
                {{ project.title }}
              </h3>

            </div>

          </div>

          <!-- Contenu -->
          <div class="project_content">

            <!-- Contexte -->
            <div
              v-if="project.context"
              class="project_block"
            >
              <h4 class="project_block_title">
                Contexte
              </h4>

              <p class="project_text">
                {{ project.context }}
              </p>
            </div>

            <!-- Problématique -->
            <div
              v-if="project.problem"
              class="project_block"
            >
              <h4 class="project_block_title">
                Problématique
              </h4>

              <p class="project_text">
                {{ project.problem }}
              </p>
            </div>

            <!-- Contribution -->
            <div
              v-if="project.hasContribution()"
              class="project_block project_contribution"
            >
              <h4 class="project_block_title">
                Ma contribution
              </h4>

              <p class="project_text">
                {{ project.contribution }}
              </p>
            </div>

            <!-- Solution -->
            <div
              v-if="project.solution"
              class="project_block"
            >
              <h4 class="project_block_title">
                Solution
              </h4>

              <p class="project_text">
                {{ project.solution }}
              </p>
            </div>

            <!-- Points techniques -->
            <div
              v-if="project.hasHighlights()"
              class="project_block"
            >
              <h4 class="project_block_title">
                Points techniques
              </h4>

              <ul class="project_highlights">

                <li
                  v-for="highlight in project.highlights"
                  :key="highlight"
                >
                  {{ highlight }}
                </li>

              </ul>
            </div>

            <!-- Technologies -->
            <div
              v-if="project.technologies.length"
              class="project_block"
            >
              <h4 class="project_block_title">
                Technologies
              </h4>

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

            <!-- Liens -->
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
                GitHub
              </a>

              <a
                v-if="project.hasLiveDemo()"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="button button_primary"
              >
                Voir le projet
              </a>

            </div>

          </div>

        </article>

      </div>

    </div>
  </section>
</template>
