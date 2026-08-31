<script setup>
import HeroSection from '@/components/home/HeroSection.vue'
import ProfileSection from '@/components/home/ProfileSection.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import ExperienceSection from '@/components/home/ExperienceSection.vue'
import SkillsSection from '@/components/home/SkillsSection.vue'
import ProjectsSection from '@/components/home/ProjectsSection.vue'
import CareerSection from '@/components/home/CareerSection.vue'
import ContactSection from '@/components/home/ContactSection.vue'

/**
 * Sections principales du portfolio.
 *
 * L'ordre du tableau détermine automatiquement
 * l'ordre d'affichage des sections.
 */
const sections = [
  ProfileSection,
  AboutSection,
  ExperienceSection,
  SkillsSection,
  ProjectsSection,
  CareerSection,
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
    />
  </main>
</template>
