<script setup>
import NavigationBar from '@/components/common/NavigationBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <NavigationBar />

  <RouterView v-slot="{ Component }">
    <Transition name="page" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>
