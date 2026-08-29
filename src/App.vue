<template>
  <div class="min-h-screen bg-slate-900 text-slate-100 font-sans">
    
    <!-- Notre composant Navbar global -->
    <Navbar />

    <!-- Zone d'affichage dynamique de nos pages (HomeView) -->
    <div class="max-w-6xl mx-auto px-4">
      <RouterView />
    </div>

  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>
