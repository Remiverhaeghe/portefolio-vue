<script setup>
import { profile } from '@/data/profile.js'
import { sections } from '@/data/sections.js'
import SectionTitle from '@/components/common/SectionTitle.vue'
import AppIcon from '@/components/common/AppIcon.vue'
import { useScrollReveal } from '@/composables/useScrollReveal.js'

/**
 * Section Contact.
 *
 * Présente les moyens de contact disponibles
 * ainsi que l'accès au CV.
 */
const { element: contactSection, visible: contactVisible } = useScrollReveal()
</script>

<template>
  <section
    ref="contactSection"
    :id="sections.contact.anchor"
    class="contact"
    :class="{ section_visible: contactVisible }"
  >
    <div class="container">
      <!-- =====================================================
           EN-TÊTE
           ===================================================== -->

      <div class="contact_header">
        <SectionTitle :title="sections.contact.title" />
      </div>

      <!-- =====================================================
           INTRODUCTION
           ===================================================== -->

      <p class="contact_description">
        À la recherche d’une nouvelle opportunité en développement logiciel, je suis disponible pour
        échanger autour d’un poste, d’un projet ou d’un besoin technique.
      </p>

      <!-- =====================================================
           MOYENS DE CONTACT
           ===================================================== -->

      <div class="contact_links">
        <!-- ---------------------------------------------------
             EMAIL
             --------------------------------------------------- -->

        <a v-if="profile.email" :href="`mailto:${profile.email}`" class="contact_link">
          <span class="contact_link_icon">
            <AppIcon name="mail" :size="28" />
          </span>

          <span class="contact_link_content">
            <span class="contact_link_label"> Email </span>

            <span class="contact_link_value">
              {{ profile.email }}
            </span>
          </span>

          <span class="contact_link_arrow">
            <AppIcon name="arrow_right" :size="22" />
          </span>
        </a>

        <!-- ---------------------------------------------------
     TÉLÉPHONE
     --------------------------------------------------- -->

        <div v-if="profile.phone" class="contact_link contact_phone">
          <span class="contact_link_icon">
            <AppIcon name="phone" :size="28" />
          </span>

          <span class="contact_link_content">
            <span class="contact_link_label"> Téléphone </span>

            <span class="contact_link_value">
              <span class="contact_phone_desktop">
                {{ profile.phone }}
              </span>

              <a :href="`tel:${profile.phone}`" class="contact_phone_mobile">
                {{ profile.phone }}
              </a>
            </span>
          </span>

          <span class="contact_link_arrow contact_phone_arrow">
            <AppIcon name="arrow_right" :size="22" />
          </span>
        </div>

        <!-- ---------------------------------------------------
             LINKEDIN
             --------------------------------------------------- -->

        <a
          v-if="profile.linkedin"
          :href="profile.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="contact_link"
        >
          <span class="contact_link_icon">
            <AppIcon name="linkedin" :size="28" />
          </span>

          <span class="contact_link_content">
            <span class="contact_link_label"> LinkedIn </span>

            <span class="contact_link_value"> Profil professionnel </span>
          </span>

          <span class="contact_link_arrow">
            <AppIcon name="arrow_right" :size="22" />
          </span>
        </a>

        <!-- ---------------------------------------------------
             GITHUB
             --------------------------------------------------- -->

        <a
          v-if="profile.github"
          :href="profile.github"
          target="_blank"
          rel="noopener noreferrer"
          class="contact_link"
        >
          <span class="contact_link_icon">
            <AppIcon name="github" :size="28" />
          </span>

          <span class="contact_link_content">
            <span class="contact_link_label"> GitHub </span>

            <span class="contact_link_value"> Projets et réalisations </span>
          </span>

          <span class="contact_link_arrow">
            <AppIcon name="arrow_right" :size="22" />
          </span>
        </a>

        <!-- ---------------------------------------------------
             LOCALISATION
             --------------------------------------------------- -->

        <div v-if="profile.location" class="contact_link">
          <span class="contact_link_icon">
            <AppIcon name="location" :size="28" />
          </span>

          <span class="contact_link_content">
            <span class="contact_link_label"> Localisation </span>

            <span class="contact_link_value">
              {{ profile.location }}
            </span>
          </span>
        </div>
      </div>

      <!-- =====================================================
           CV
           ===================================================== -->

      <div v-if="profile.cvUrl" class="contact_cv">
        <div class="contact_cv_icon">
          <AppIcon name="download" :size="32" />
        </div>

        <div class="contact_cv_content">
          <h3 class="contact_cv_title">Télécharger mon CV</h3>

          <p class="contact_cv_description">
            Retrouvez mon parcours professionnel, mes compétences techniques et mes expériences en
            détail.
          </p>
        </div>

        <a :href="profile.cvUrl" download class="button button_primary contact_cv_button">
          <AppIcon name="download" :size="20" />

          <span> Télécharger le CV </span>
        </a>
      </div>

      <!-- =====================================================
           SÉPARATION
           ===================================================== -->

      <div class="contact_separator">
        <span></span>

        <span class="contact_separator_dot"></span>

        <span></span>
      </div>
    </div>
  </section>
</template>
