<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const tools = [
  { name: 'Midjourney', icon: 'https://www.google.com/s2/favicons?domain=midjourney.com&sz=64' },
  { name: 'DALL-E 3', icon: 'https://www.google.com/s2/favicons?domain=openai.com&sz=64' },
  { name: 'Kling AI', icon: 'https://www.google.com/s2/favicons?domain=klingai.com&sz=64' },
  { name: 'Veo', icon: 'https://www.google.com/s2/favicons?domain=deepmind.google&sz=64' },
  { name: 'HeyGen', icon: 'https://www.google.com/s2/favicons?domain=heygen.com&sz=64' },
  { name: 'ElevenLabs', icon: 'https://www.google.com/s2/favicons?domain=elevenlabs.io&sz=64' },
  { name: 'Suno', icon: 'https://www.google.com/s2/favicons?domain=suno.com&sz=64' },
  { name: 'Ideogram', icon: 'https://www.google.com/s2/favicons?domain=ideogram.ai&sz=64' },
  { name: 'Nano Banana', icon: 'https://www.google.com/s2/favicons?domain=nanobanana.com&sz=64' },
  { name: 'Seedance', icon: 'https://www.google.com/s2/favicons?domain=seedance.ai&sz=64' },
  { name: 'Flux', icon: 'https://www.google.com/s2/favicons?domain=blackforestlabs.ai&sz=64' },
  { name: 'Grok', icon: 'https://www.google.com/s2/favicons?domain=x.ai&sz=64' },
]

const toolsDoubled = [...tools, ...tools]

const stats = [
  { target: 20, suffix: '+', label: 'AI Models', sub: 'World-class tools' },
  { target: 100000, suffix: '+', label: 'Templates', sub: 'Ready to use' },
  { target: 4000, suffix: '+', label: 'LUTs', sub: 'Color grading' },
]

// Animated counters
const counters = ref(stats.map(() => 0))
const hasAnimated = ref(false)
const sectionRef = ref<HTMLElement | null>(null)

function formatNumber(n: number): string {
  if (n >= 1000) return Math.floor(n / 1000).toLocaleString() + 'K'
  return n.toLocaleString()
}

function animateCounters() {
  if (hasAnimated.value) return
  hasAnimated.value = true

  stats.forEach((stat, i) => {
    const duration = 2000
    const steps = 60
    let step = 0

    const timer = setInterval(() => {
      step++
      // Ease-out: fast start, slow end
      const progress = 1 - Math.pow(1 - step / steps, 3)
      counters.value[i] = Math.floor(stat.target * progress)

      if (step >= steps) {
        counters.value[i] = stat.target
        clearInterval(timer)
      }
    }, duration / steps)
  })
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animateCounters()
      }
    },
    { threshold: 0.3 }
  )
  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <section ref="sectionRef" class="relative overflow-hidden">
    <!-- Gradient background - starts from hero's dark-950 (#020207) and transitions down -->
    <div class="absolute inset-0" style="background: linear-gradient(to bottom, #020207 0%, #0d0b1a 50%, #110f20 100%);"></div>


    <!-- Stats: centered, dramatic, animated -->
    <div class="relative z-10 container-main py-14 lg:py-20">
      <div class="reveal grid grid-cols-3 gap-4 lg:gap-8 max-w-2xl mx-auto text-center">
        <div v-for="(stat, i) in stats" :key="stat.label" class="relative">
          <div class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight tabular-nums">
            {{ formatNumber(counters[i]) }}{{ stat.suffix }}
          </div>
          <div class="text-xs sm:text-sm text-gray-400 font-medium mt-2">{{ stat.label }}</div>
          <div class="hidden sm:block text-[11px] text-gray-600 mt-0.5">{{ stat.sub }}</div>
          <!-- Gold accent dot -->
          <div class="w-1 h-1 rounded-full bg-gold-500/50 mx-auto mt-4"></div>
        </div>
      </div>
    </div>

    <!-- Tool pills marquee -->
    <div class="overflow-hidden py-3 border-t border-white/[0.04]">
      <div class="flex animate-[marquee_45s_linear_infinite]">
        <div class="flex shrink-0 items-center gap-3 px-1.5">
          <span
            v-for="(tool, i) in toolsDoubled" :key="i"
            class="inline-flex items-center gap-3 text-[15px] text-gray-500 whitespace-nowrap font-medium tracking-wide"
          >
            <img :src="tool.icon" :alt="tool.name" class="w-5 h-5 rounded-sm opacity-50 grayscale" loading="lazy" decoding="async" />
            {{ tool.name }}
            <span class="mx-5 text-white/10">&#x2022;</span>
          </span>
        </div>
      </div>
    </div>

    <!-- Bottom glow line -->
    <div class="h-px w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
  </section>
</template>
