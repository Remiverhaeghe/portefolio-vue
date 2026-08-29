<template>
  <main class="py-12 space-y-20">
    
    <!-- Section d'accueil / Présentation rapide -->
    <section class="text-center max-w-2xl mx-auto py-10">
      <h2 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 mb-4">
        Bonjour, je suis Rémi
      </h2>
      <p class="text-slate-400 text-lg leading-relaxed">
        Développeur en reconversion passionné. J'aime concevoir des architectures logicielles claires et explorer différents écosystèmes. Découvrez mes réalisations ci-dessous.
      </p>
    </section>

    <!-- SECTION DES COMPÉTENCES (SKILLS) -->
    <section class="bg-slate-800/20 border border-slate-800 p-8 rounded-2xl">
      <h3 class="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-2">
        🛠️ Compétences Techniques
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Catégorie : Langages principaux -->
        <div class="space-y-4">
          <h4 class="text-sm font-semibold uppercase tracking-wider text-emerald-400">Langages</h4>
          <div class="flex flex-wrap gap-3">
            <SkillBadge name="JavaScript (ES6+)" />
            <SkillBadge name="Python 3" />
            <SkillBadge name="Java" />
            <SkillBadge name="PHP 8" />
          </div>
        </div>

        <!-- Catégorie : Frameworks / Web -->
        <div class="space-y-4">
          <h4 class="text-sm font-semibold uppercase tracking-wider text-emerald-400">Frameworks & Web</h4>
          <div class="flex flex-wrap gap-3">
            <SkillBadge name="Vue.js 3" />
            <SkillBadge name="Tailwind CSS" />
            <SkillBadge name="Vite" />
            <SkillBadge name="MySQL" />
          </div>
        </div>

        <!-- Catégorie : Outils de dev -->
        <div class="space-y-4">
          <h4 class="text-sm font-semibold uppercase tracking-wider text-emerald-400">Outils & Environnement</h4>
          <div class="flex flex-wrap gap-3">
            <SkillBadge name="Git & GitHub" />
            <SkillBadge name="VS Code" />
            <SkillBadge name="Terminal Linux" />
            <SkillBadge name="Architecture MVC" />
          </div>
        </div>
      </div>
    </section>

    <!-- Section de la Grille des Projets -->
    <section>
      <h3 class="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-2">
        🚀 Mes Projets
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.title"
          v-bind="project" 
        />
      </div>
    </section>

  </main>
</template>

<script setup>
import ProjectCard from '../components/ProjectCard.vue'
import SkillBadge from '../components/SkillBadge.vue' // <-- Importation du nouveau composant

// Liste de vos projets reste identique
const projects = [
  {
    title: 'Portfolio Interactif',
    description: 'Conception de ma vitrine professionnelle en ligne. Code structuré par composants réutilisables.',
    technologies: ['Vue.js 3', 'Vite', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: '#'
  },
  {
    title: 'Web Scraper Automatique',
    description: 'Script d\'automatisation conçu pour extraire, nettoyer et exporter des données cibles au format CSV/Excel.',
    technologies: ['Python 3', 'BeautifulSoup', 'Pandas'],
    githubUrl: '#',
    liveUrl: null
  },
  {
    title: 'Gestionnaire d\'Inventaire',
    description: 'Application métier appliquant les concepts stricts de la programmation orientée objet (POO) et du modèle MVC.',
    technologies: ['Java', 'OpenJDK', 'MVC'],
    githubUrl: '#',
    liveUrl: null
  },
  {
    title: 'Blog Dynamique Sécurisé',
    description: 'Plateforme web complète avec espace membre, hachage des mots de passe et requêtes préparées anti-injections SQL.',
    technologies: ['PHP', 'MySQL', 'Sécurité Web'],
    githubUrl: '#',
    liveUrl: '#'
  }
]
</script>
