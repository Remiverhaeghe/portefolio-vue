<script setup>
import { profile } from '@/data/profile.js'
import { sections } from '@/data/sections.js'
import SectionTitle from '@/components/common/SectionTitle.vue'
import AppIcon from '@/components/common/AppIcon.vue'

/**
 * Section présentant les informations principales du profil.
 */

/**
 * Retourne l'icône correspondant à chaque information.
 */
const getProfileIcon = (label) => {
  const icons = {
    Expertise: 'star',
    Domaine: 'layers',
    Environnement: 'building',
    Orientation: 'compass',
  }

  return icons[label] || 'layers'
}
</script>

<template>
  <section :id="sections.profile?.anchor || 'profil'" class="section profile_summary">
    <div class="container">
      <!-- =====================================================
           TITRE
           ===================================================== -->

      <SectionTitle :title="sections.profile?.title || 'Profil'" />

      <!-- =====================================================
           PROFIL
           ===================================================== -->

      <div class="profile_summary_card">
        <article v-for="item in profile.focus" :key="item.label" class="profile_summary_item">
          <!-- Icône -->

          <div class="profile_summary_icon">
            <AppIcon :name="getProfileIcon(item.label)" :size="22" />
          </div>

          <!-- Contenu -->

          <div class="profile_summary_content">
            <p class="profile_summary_label">
              {{ item.label }}
            </p>

            <p class="profile_summary_value">
              {{ item.value }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
