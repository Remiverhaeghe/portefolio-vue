<script setup>
import HeroSection from '@/components/home/HeroSection.vue'
import ProfileSummarySection from '@/components/home/ProfileSummarySection.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import ExperienceSection from '@/components/home/ExperienceSection.vue'
import SkillsSection from '@/components/home/SkillsSection.vue'
import ProjectsSection from '@/components/home/ProjectsSection.vue'
import CareerGoalSection from '@/components/home/CareerGoalSection.vue'
import ContactSection from '@/components/home/ContactSection.vue'

/**
 * Sections principales du portfolio.
 *
 * L'ordre du tableau détermine automatiquement
 * l'ordre d'affichage des sections.
 */
const sections = [
  ProfileSummarySection,
  AboutSection,
  ExperienceSection,
  SkillsSection,
  ProjectsSection,
  CareerGoalSection,
  ContactSection,
]
</script>

<template>
  <main>
    <!-- Accueil -->
    <HeroSection />

    <!-- Sections principales -->
    <component
      v-for="(section, index) in sections"
      :key="index"
      :is="section"
      :number="index + 1"
    />
  </main>
</template>
