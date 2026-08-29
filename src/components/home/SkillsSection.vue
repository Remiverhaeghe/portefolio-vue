<script setup>
import { skillCategories } from '@/data/skills.js'
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
  element: skillsSection,
  visible: skillsVisible,
} = useScrollReveal()
</script>

<template>
  <section
    ref="skillsSection"
    :id="sections.skills.anchor"
    class="skills"
    :class="{ section_visible: skillsVisible }"
  >
    <div class="skills_container">

      <SectionTitle
        :number="number"
        :title="sections.skills.title"
      />

      <div class="skills_categories">

        <article
          v-for="(category, categoryIndex) in skillCategories"
          :key="category.title"
          class="skills_category"
          :style="{
            '--category-delay': `${categoryIndex * 150}ms`,
          }"
        >

          <div class="skills_category_header">

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

          <div class="skills_list">

            <div
              v-for="(skill, index) in category.skills"
              :key="skill.name"
              class="skill"
            >

              <div class="skill_header">

                <span class="skill_name">
                  {{ skill.name }}
                </span>

                <span class="skill_level">
                  {{ skill.getLabel() }}
                </span>

              </div>

              <div class="skill_progress">

                <div
                  class="skill_progress_bar"
                  :class="{
                    skill_progress_visible: skillsVisible,
                  }"
                  :style="{
                    width: skillsVisible
                      ? `${skill.level * 20}%`
                      : '0%',
                    transitionDelay: skillsVisible
                      ? `${categoryIndex * 150 + index * 100}ms`
                      : '0ms',
                  }"
                ></div>

              </div>

            </div>

          </div>

        </article>

      </div>

    </div>
  </section>
</template>
