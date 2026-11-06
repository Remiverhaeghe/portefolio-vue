import { ref } from 'vue'

const STORAGE_KEY = 'portfolio-theme'

/**
 * Gestion globale du thème clair / sombre.
 *
 * Le thème initial est posé par le script inline d'index.html
 * avant le rendu, pour éviter un flash du mauvais thème.
 */
const isDark = ref(
  document.documentElement.getAttribute('data-theme') === 'dark',
)

export function useTheme() {

  /**
   * Applique et mémorise le thème.
   */
  const applyTheme = (dark) => {
    const theme = dark ? 'dark' : 'light'

    isDark.value = dark
    document.documentElement.setAttribute('data-theme', theme)

    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // Stockage indisponible : le thème s'applique sans être mémorisé.
    }
  }

  /**
   * Inverse le thème actuel.
   */
  const toggleTheme = () => {
    applyTheme(!isDark.value)
  }

  return {
    isDark,
    toggleTheme,
  }
}
