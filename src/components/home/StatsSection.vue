<script setup>
import { stats } from '@/data/stats.js'
import AppIcon from '@/components/common/AppIcon.vue'

/**
 * Bandeau de chiffres clés, sous l'accueil.
 *
 * Il n'a pas d'ancre : il ne figure pas dans la navigation.
 */
</script>

<template>
  <section
    class="stats"
    aria-label="Chiffres clés"
  >
    <div class="container">
      <dl class="stats_list">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="stats_item"
        >
          <span
            v-if="stat.icon"
            class="stats_icon"
          >
            <AppIcon
              :name="stat.icon"
              :size="22"
            />
          </span>

          <dt class="stats_value">
            {{ stat.value }}
          </dt>

          <dd class="stats_label">
            {{ stat.label }}
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>
