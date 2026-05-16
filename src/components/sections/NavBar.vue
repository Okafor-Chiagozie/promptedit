<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 60
}

function scrollTo(id: string) {
  mobileOpen.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

// Lock body scroll when mobile menu is open
watch(mobileOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.body.style.overflow = ''
})

const links = [
  { label: 'Tools', id: 'tools' },
  { label: 'How It Works', id: 'how-it-works' },
  { label: 'Templates', id: 'templates' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'FAQ', id: 'faq' },
]
</script>

<template>
  <div>
    <nav
      :class="[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        (scrolled || mobileOpen)
          ? 'bg-dark-950 border-b border-white/8 shadow-2xl shadow-black/40 backdrop-blur-2xl'
          : ''
      ]"
    >
      <div class="container-main">
        <div class="flex items-center justify-between h-[72px] lg:h-[84px]">
          <!-- Logo -->
          <a href="#" class="flex items-center gap-2.5 shrink-0 group">
            <img src="/logo-dark.png" alt="PromptEdit" class="h-7 lg:h-8 w-auto transition-transform duration-300 group-hover:scale-105 invert" />
          </a>

          <!-- Desktop Nav -->
          <div class="hidden lg:flex items-center gap-1">
            <button
              v-for="link in links" :key="link.id"
              @click="scrollTo(link.id)"
              class="relative px-4 py-2 text-[13px] text-gray-400 hover:text-white font-medium tracking-wide transition-colors duration-300 rounded-lg hover:bg-white/[0.04]"
            >
              {{ link.label }}
            </button>
          </div>

          <!-- Desktop CTA -->
          <div class="hidden lg:flex items-center gap-5">
            <a href="https://promptedit.com" target="_blank" class="text-[13px] text-gray-400 hover:text-white font-medium transition-colors duration-300">Sign In</a>
            <a
              href="https://promptedit.com"
              target="_blank"
              class="relative bg-white text-dark-950 font-bold text-[13px] px-7 py-2.5 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:scale-[1.03]"
            >
              Get Started Free
            </a>
          </div>

          <!-- Mobile Toggle -->
          <button @click="mobileOpen = !mobileOpen" class="lg:hidden text-white/70 hover:text-white p-2 -mr-2" aria-label="Menu">
            <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" d="M4 7h16M4 12h12M4 17h8" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu: OUTSIDE nav so backdrop-filter doesn't trap fixed positioning -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="mobileOpen" class="fixed inset-0 z-9999 bg-dark-950 flex flex-col lg:hidden">
          <!-- Header with logo + close -->
          <div class="flex items-center justify-between shrink-0 px-6 h-18">
            <a href="#" class="flex items-center gap-2.5 shrink-0">
              <img src="/logo-dark.png" alt="PromptEdit" class="h-7 w-auto invert" />
            </a>
            <button @click="mobileOpen = false" class="text-white/70 hover:text-white p-2 -mr-2" aria-label="Close menu">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <!-- Scrollable content -->
          <div class="flex-1 overflow-y-auto px-6 py-6">
            <button
              v-for="link in links" :key="link.id"
              @click="scrollTo(link.id)"
              class="w-full text-left text-lg text-gray-300 hover:text-white py-3.5 font-medium border-b border-white/6 transition-colors"
            >
              {{ link.label }}
            </button>
            <div class="mt-8 flex flex-col gap-3">
              <a href="https://promptedit.com" target="_blank" class="text-center text-gray-400 hover:text-white py-3 font-medium">Sign In</a>
              <a href="https://promptedit.com" target="_blank" class="bg-white text-dark-950 font-bold text-center py-4 rounded-2xl text-base">
                Get Started Free
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

