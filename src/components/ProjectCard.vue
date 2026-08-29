<template>
  <div class="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-950/20 transition-all duration-300 flex flex-col h-full">
    
    <!-- Contenu textuel de la carte -->
    <div class="p-6 flex-grow">
      <!-- Les badges de langages/technologies -->
      <div class="flex flex-wrap gap-2 mb-3">
        <span 
          v-for="tech in technologies" 
          :key="tech"
          class="text-xs px-2.5 py-1 rounded-md font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Titre du projet -->
      <h3 class="text-xl font-bold text-slate-100 mb-2 group-hover:text-emerald-400 transition-colors">
        {{ title }}
      </h3>

      <!-- Description -->
      <p class="text-sm text-slate-400 leading-relaxed mb-4">
        {{ description }}
      </p>
    </div>

    <!-- Liens en bas de carte -->
    <div class="p-6 pt-0 border-t border-slate-700/30 flex gap-4 mt-auto">
      <a 
        v-if="githubUrl" 
        :href="githubUrl" 
        target="_blank" 
        class="text-xs font-semibold text-slate-300 hover:text-emerald-400 flex items-center gap-1.5 transition-colors"
      >
        📁 Code source
      </a>
      <a 
        v-if="liveUrl" 
        :href="liveUrl" 
        target="_blank" 
        class="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors"
      >
        💻 Démo en ligne →
      </a>
    </div>
  </div>
</template>

<script setup>
// Définition des propriétés (Props) que la carte va recevoir
defineProps({
  title: String,
  description: String,
  technologies: Array,
  githubUrl: String,
  liveUrl: String
})
</script>