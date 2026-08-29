import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Gère l'apparition et la disparition d'un élément
 * lors du défilement.
 */
export function useScrollReveal() {
  const element = ref(null)
  const visible = ref(false)

  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        visible.value = entry.isIntersecting
      },
      {
        threshold: 0.15,
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
