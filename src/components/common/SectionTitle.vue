<script setup>
/**
 * Titre commun des sections du portfolio.
 */

defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <header class="section_header">
    <h2 class="section_title">
      {{ title }}
    </h2>
  </header>
</template>
