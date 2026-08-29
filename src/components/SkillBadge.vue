<template>
  <div class="flex items-center gap-2 px-4 py-2.5 bg-slate-800/40 border border-slate-700/60 rounded-xl hover:border-emerald-500/40 hover:bg-slate-800/80 transition-all duration-200 group cursor-default">
    <!-- Point coloré décoratif qui s'anime au survol -->
    <span class="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform duration-200"></span>
    
    <!-- Nom de la compétence -->
    <span class="text-sm font-medium text-slate-300 group-hover:text-slate-100 transition-colors">
      {{ name }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>