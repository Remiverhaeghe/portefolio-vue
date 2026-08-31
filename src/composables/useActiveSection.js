import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Synchronise la navigation avec la section visible.
 */
export function useActiveSection(sectionIds = []) {
  const activeSection = ref('accueil')

  let ticking = false

  // Récupère les sections présentes dans la page.
  const getElements = () => {
    return sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)
  }

  // Détermine la section située sous la navbar.
  const updateActiveSection = () => {
    const elements = getElements()

    if (!elements.length) {
      ticking = false
      return
    }

    const navbar = document.querySelector('.navbar')
    const navbarHeight = navbar?.offsetHeight ?? 0

    const reference = navbarHeight + 30

    // En bas de page, la dernière section devient active.
    const scrollY = window.scrollY
    const viewportHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight

    if (scrollY + viewportHeight >= documentHeight - 10) {
      activeSection.value = elements[elements.length - 1].id
      ticking = false
      return
    }

    let current = elements[0].id

    for (const element of elements) {
      if (element.getBoundingClientRect().top <= reference) {
        current = element.id
      }
    }

    activeSection.value = current

    ticking = false
  }

  // Évite de multiplier les calculs pendant le scroll.
  const handleScroll = () => {
    if (ticking) {
      return
    }

    ticking = true

    window.requestAnimationFrame(updateActiveSection)
  }

  // Recalcule la section après un redimensionnement.
  const handleResize = () => {
    updateActiveSection()
  }

  onMounted(() => {
    updateActiveSection()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleResize)
  })

  return {
    activeSection,
  }
}
