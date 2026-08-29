import { ref, onMounted } from 'vue'

const isDark = ref(false)

export function useTheme() {

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

  const toggleTheme = () => {
    applyTheme(!isDark.value)
  }

  onMounted(() => {
    const savedTheme =
      localStorage.getItem('portfolio-theme')

    if (savedTheme) {
      applyTheme(savedTheme === 'dark')
      return
    }

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
