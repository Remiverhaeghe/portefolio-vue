<script setup>
import { profile } from '@/data/profile.js'
</script>

<template>
  <section id="accueil" class="hero">
    <div class="hero_container">
      <!-- Présentation principale -->
      <div class="hero_content">
        <p class="hero_name hero_animate hero_animate_1">
          {{ profile.getFullName() }}
        </p>

        <h1 class="hero_title hero_animate hero_animate_2">
          Développeur
          <span class="hero_title_accent"> Java </span>
          <br />
          <span class="hero_title_secondary"> Profil technique & industriel </span>
        </h1>

        <p class="hero_description hero_animate hero_animate_3">
          {{ profile.introduction }}
        </p>

        <!-- Actions -->
        <div class="hero_actions hero_animate hero_animate_4">
          <a href="#parcours" class="button button_primary"> Découvrir mon parcours </a>

          <a href="#contact" class="button button_secondary"> Me contacter </a>

          <a v-if="profile.cvUrl" :href="profile.cvUrl" download class="button button_secondary">
            Télécharger mon CV
          </a>
        </div>
      </div>

      <!-- Synthèse du profil -->
      <div class="hero_focus">
        <div
          v-for="(item, index) in profile.focus"
          :key="item.label"
          class="hero_focus_card"
          :style="{
            '--card-delay': `${0.8 + index * 0.25}s`,
          }"
        >
          <p class="hero_focus_label">
            {{ item.label }}
          </p>

          <p class="hero_focus_value">
            {{ item.value }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
