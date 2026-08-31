import { ref, onMounted } from 'vue'

/**
 * Gestion globale du thème clair / sombre.
 */
const isDark = ref(false)

export function useTheme() {

  /**
   * Applique et mémorise le thème.
   */
  const applyTheme = (dark) => {
    isDark.value = dark

    document.documentElement.setAttribute(
      'data-theme',
      dark ? 'dark' : 'light',
    )

    localStorage.setItem(
      'portfolio-theme',
      dark ? 'dark' : 'light',
    )
  }

  /**
   * Inverse le thème actuel.
   */
  const toggleTheme = () => {
    applyTheme(!isDark.value)
  }

  /**
   * Initialise le thème au chargement.
   */
  onMounted(() => {
    const savedTheme =
      localStorage.getItem('portfolio-theme')

    // Priorité au choix enregistré.
    if (savedTheme) {
      applyTheme(savedTheme === 'dark')
      return
    }

    // Sinon, utilise le thème du système.
    const systemDark =
      window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches

    applyTheme(systemDark)
  })

  return {
    isDark,
    toggleTheme,
  }
}
