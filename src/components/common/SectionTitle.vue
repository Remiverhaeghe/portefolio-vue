<script setup>
defineProps({
  number: {
    type: Number,
    required: false,
    default: null,
  },

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
