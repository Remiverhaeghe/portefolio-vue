<script setup>
import { ref } from 'vue'

import { sections } from '@/data/sections.js'
import { profile } from '@/data/profile.js'

import { useActiveSection } from '@/composables/useActiveSection.js'
import { useTheme } from '@/composables/useTheme.js'

/**
 * Navigation principale du portfolio.
 */

// État du menu mobile.
const menuOpen = ref(false)

// Gestion du thème clair / sombre.
const {
  isDark,
  toggleTheme,
} = useTheme()

// Éléments affichés dans la navigation.
const navigationItems = [
  {
    id: 'accueil',
    label: 'Accueil',
  },
  {
    id: 'profil',
    label: 'Profil',
  },
  {
    id: sections.about.anchor,
    label: sections.about.title,
  },
  {
    id: sections.experience.anchor,
    label: sections.experience.title,
  },
  {
    id: sections.skills.anchor,
    label: sections.skills.title,
  },
  {
    id: sections.projects.anchor,
    label: sections.projects.title,
  },
  {
    id: sections.career.anchor,
    label: sections.career.title,
  },
  {
    id: sections.contact.anchor,
    label: sections.contact.title,
  },
]

// Sections surveillées par le système de navigation.
const sectionIds = navigationItems.map(
  (item) => item.id,
)

const {
  activeSection,
} = useActiveSection(sectionIds)

// Ferme le menu mobile.
const closeMenu = () => {
  menuOpen.value = false
}
</script>

<template>
  <nav class="navbar">

    <div class="container navbar_container">

      <!-- Identité -->
      <a
        href="#accueil"
        class="navbar_logo"
        @click="closeMenu"
      >
        {{ profile.getFullName() }}
      </a>

      <!-- Liens de navigation -->
      <div
        class="navbar_links"
        :class="{
          navbar_links_open: menuOpen,
        }"
      >
        <a
          v-for="item in navigationItems"
          :key="item.id"
          :href="`#${item.id}`"
          class="navbar_link"
          :class="{
            navbar_link_active:
              activeSection === item.id,
          }"
          @click="closeMenu"
        >
          {{ item.label }}
        </a>
      </div>

      <!-- Actions -->
      <div class="navbar_actions">

        <!-- Sélecteur de thème -->
        <button
          type="button"
          class="theme_switch"
          :aria-label="
            isDark
              ? 'Activer le mode clair'
              : 'Activer le mode sombre'
          "
          @click="toggleTheme"
        >
          <span
            class="theme_switch_label"
            :class="{
              theme_switch_label_active: !isDark,
            }"
          >
            Clair
          </span>

          <span
            class="theme_switch_separator"
            aria-hidden="true"
          ></span>

          <span
            class="theme_switch_label"
            :class="{
              theme_switch_label_active: isDark,
            }"
          >
            Sombre
          </span>
        </button>

        <!-- Menu mobile -->
        <button
          type="button"
          class="navbar_toggle"
          :class="{
            navbar_toggle_open: menuOpen,
          }"
          :aria-expanded="menuOpen"
          aria-label="Ouvrir le menu"
          @click="menuOpen = !menuOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

    </div>
  </nav>
</template>
