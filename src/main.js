/**
 * Point d'entrée de l'application.
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/main.css'


/* Initialisation de l'application */

createApp(App).use(router).mount('#app')
