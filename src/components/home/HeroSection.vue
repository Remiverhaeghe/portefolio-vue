<script setup>
import { profile } from '@/data/profile.js'


/**
 * Section d'introduction principale du portfolio.
 *
 * Présente rapidement le profil, le positionnement
 * et les principales actions disponibles.
 */
</script>

<template>
  <section
    id="accueil"
    class="hero"
  >
    <div class="container hero_container">

      <div class="hero_content">

        <!-- =================================================
             NOM
             ================================================= -->

        <p class="hero_name">
          {{ profile.displayName }}
        </p>


        <!-- =================================================
             TITRE PRINCIPAL
             ================================================= -->

        <h1 class="hero_title">
          {{ profile.title }}
        </h1>


        <!-- =================================================
             POSITIONNEMENT
             ================================================= -->

        <p class="hero_subtitle">
          Profil technique & industriel
        </p>


        <!-- =================================================
             PRÉSENTATION
             ================================================= -->

        <p class="hero_description">
          {{ profile.introduction }}
        </p>


        <!-- =================================================
             ACTIONS
             ================================================= -->

        <div class="hero_actions">

          <a
            href="#experience"
            class="button button_primary"
          >
            Découvrir mon parcours
          </a>

          <a
            href="#contact"
            class="button button_secondary"
          >
            Me contacter
          </a>

          <a
            v-if="profile.cvUrl"
            :href="profile.cvUrl"
            download
            class="button button_secondary"
          >
            Télécharger mon CV
          </a>

        </div>

      </div>

    </div>
  </section>
</template>
