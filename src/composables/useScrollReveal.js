import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Gère l'apparition d'un élément lors du défilement.
 *
 * L'élément reste visible une fois découvert.
 */
export function useScrollReveal() {
  const element = ref(null)
  const visible = ref(false)

  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible.value = true

          // L'animation n'a besoin d'être déclenchée qu'une fois.
          observer?.disconnect()
        }
      },
      {
        // Un seuil en ratio ne serait jamais atteint par une section
        // plus haute que l'écran, d'où une marge à la place.
        rootMargin: '0px 0px -15% 0px',
      },
    )

    if (element.value) {
      observer.observe(element.value)
    }
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return {
    element,
    visible,
  }
}
