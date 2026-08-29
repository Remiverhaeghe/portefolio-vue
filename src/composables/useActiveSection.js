import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Gère la section actuellement active dans la navigation.
 */
export function useActiveSection(sectionIds = []) {
  const activeSection = ref('accueil')

  let elements = []
  let ticking = false

  const updateActiveSection = () => {
    if (!elements.length) {
      ticking = false
      return
    }

    const scrollY = window.scrollY
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight

    /*
     * Si on est arrivé tout en bas de la page,
     * la dernière section devient automatiquement active.
     */
    if (scrollY + windowHeight >= documentHeight - 10) {
      activeSection.value =
        elements[elements.length - 1].id

      ticking = false
      return
    }

    /*
     * Ligne virtuelle utilisée pour déterminer
     * la section actuellement traversée.
     */
    const referencePosition = scrollY + 180

    let currentSection = elements[0].id

    for (const element of elements) {
      if (element.offsetTop <= referencePosition) {
        currentSection = element.id
      }
    }

    activeSection.value = currentSection

    ticking = false
  }

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateActiveSection)
      ticking = true
    }
  }

  const handleResize = () => {
    updateActiveSection()
  }

  onMounted(() => {
    elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

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
