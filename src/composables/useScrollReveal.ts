import { onMounted, onUnmounted, nextTick } from 'vue'

export function useScrollReveal() {
  let observer: IntersectionObserver | null = null
  let mutationObserver: MutationObserver | null = null

  const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger'

  function observeAll() {
    document.querySelectorAll(selectors).forEach((el) => {
      if (!el.classList.contains('visible')) {
        observer!.observe(el)
      }
    })
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer!.unobserve(entry.target)
          }
        })

        // Stop mutation observer once all reveals are done
        const remaining = document.querySelectorAll(selectors + ':not(.visible)')
        if (remaining.length === 0 && mutationObserver) {
          mutationObserver.disconnect()
          mutationObserver = null
        }
      },
      { threshold: 0.06, rootMargin: '0px 0px -30px 0px' }
    )

    nextTick(() => observeAll())

    // Watch for dynamically added elements (tab changes, etc.)
    mutationObserver = new MutationObserver(() => {
      nextTick(() => observeAll())
    })
    mutationObserver.observe(document.body, { childList: true, subtree: true })
  })

  onUnmounted(() => {
    observer?.disconnect()
    mutationObserver?.disconnect()
  })
}
