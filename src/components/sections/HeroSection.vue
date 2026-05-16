<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const show = ref(false)
const wordIndex = ref(0)
const words = ['Epic AI Tool.', 'Video Model.', 'Audio Engine.', 'Image Maker.']
let interval: ReturnType<typeof setInterval>

const videoSrc = '/hero-video.mp4'

const col1 = [
  { type: 'image', src: '/2747d765-d130-405e-b300-f70212a33284.jpg' },
  { type: 'video', src: videoSrc },
  { type: 'image', src: '/img-portrait.png' },
  { type: 'image', src: '/94d0afde-5eb9-40e0-b3be-546fba0f885a.png' },
  { type: 'image', src: '/6891e53a-40eb-4870-8a54-5de1e9e30ce8.jpg' },
  { type: 'image', src: '/f17ce022-5b9a-4caa-b408-17cb8f85522e.jpg' },
]
const col2 = [
  { type: 'image', src: '/img-fashion.png' },
  { type: 'image', src: '/2d963ed9-9e2c-4f3e-9659-fe24e96e624e.png' },
  { type: 'video', src: videoSrc },
  { type: 'image', src: '/e5090032-3d93-4b66-9b05-a84ba504f4c2.jpg' },
  { type: 'image', src: '/img-hollywood-neon.png' },
  { type: 'image', src: '/ai_image_1.jpg' },
]
const col3 = [
  { type: 'image', src: '/img-geometric.png' },
  { type: 'image', src: '/2070adb4-aba8-4fa6-a59d-b83bdedea968.jpg' },
  { type: 'image', src: '/img-portrait.png' },
  { type: 'video', src: videoSrc },
  { type: 'image', src: '/8fee39ac-c694-49d5-a154-9f9033739e25.png' },
  { type: 'image', src: '/14527635-1b7c-4c7c-aa74-01a1aa6e035c.png' },
]

onMounted(() => {
  requestAnimationFrame(() => { show.value = true })
  interval = setInterval(() => {
    wordIndex.value = (wordIndex.value + 1) % words.length
  }, 2800)
})
onUnmounted(() => clearInterval(interval))

function scrollToPricing() {
  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">

    <!-- === SCROLLING COLUMNS BACKGROUND === -->
    <div class="absolute inset-0 z-0 grid grid-cols-3 gap-2 lg:gap-3 p-2 lg:p-3 opacity-80">
      <!-- Column 1: scrolls up -->
      <div class="overflow-hidden">
        <div class="flex flex-col gap-2 lg:gap-3 animate-[scroll-up_30s_linear_infinite]">
          <div v-for="(item, i) in [...col1, ...col1]" :key="'c1-'+i"
            class="relative w-full aspect-[3/4] rounded-xl overflow-hidden shrink-0"
          >
            <video v-if="item.type === 'video'" autoplay muted loop playsinline class="w-full h-full object-cover">
              <source :src="item.src" type="video/mp4" />
            </video>
            <img v-else :src="item.src" alt="" class="w-full h-full object-cover" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>

      <!-- Column 2: scrolls down -->
      <div class="overflow-hidden">
        <div class="flex flex-col gap-2 lg:gap-3 animate-[scroll-down_35s_linear_infinite]">
          <div v-for="(item, i) in [...col2, ...col2]" :key="'c2-'+i"
            class="relative w-full aspect-[3/4] rounded-xl overflow-hidden shrink-0"
          >
            <video v-if="item.type === 'video'" autoplay muted loop playsinline class="w-full h-full object-cover">
              <source :src="item.src" type="video/mp4" />
            </video>
            <img v-else :src="item.src" alt="" class="w-full h-full object-cover" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>

      <!-- Column 3: scrolls up slower -->
      <div class="overflow-hidden">
        <div class="flex flex-col gap-2 lg:gap-3 animate-[scroll-up_40s_linear_infinite]">
          <div v-for="(item, i) in [...col3, ...col3]" :key="'c3-'+i"
            class="relative w-full aspect-[3/4] rounded-xl overflow-hidden shrink-0"
          >
            <video v-if="item.type === 'video'" autoplay muted loop playsinline class="w-full h-full object-cover">
              <source :src="item.src" type="video/mp4" />
            </video>
            <img v-else :src="item.src" alt="" class="w-full h-full object-cover" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </div>

    <!-- === DARK OVERLAYS === -->
    <div class="absolute inset-0 z-[1] bg-dark-950/30"></div>
    <div class="absolute inset-0 z-[1] bg-gradient-to-b from-dark-950/20 via-transparent to-dark-950/70"></div>
    <!-- Radial vignette - just edges -->
    <div class="absolute inset-0 z-[1]" style="background: radial-gradient(ellipse at center, transparent 40%, rgba(2,2,7,0.4) 75%, rgba(2,2,7,0.8) 100%);"></div>

    <!-- Aurora glows -->
    <div class="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
      <div class="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-gold-500/[0.04] rounded-full blur-[80px] animate-[glow-pulse_6s_ease-in-out_infinite]"></div>
      <div class="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent/[0.04] rounded-full blur-[70px] animate-[glow-pulse_8s_ease-in-out_infinite_2s]"></div>
    </div>

    <!-- === CENTRAL CONTENT === -->
    <div class="relative z-10 text-center px-6 sm:px-8 pt-28 pb-24 max-w-5xl mx-auto">
      <!-- Badge -->
      <div :class="['transition-all duration-700 delay-200', show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6']">
        <span class="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-strong text-[13px] font-medium tracking-wide">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-gold-400"></span>
          </span>
          <span class="text-gold-300">The #1 AI Marketplace for Creators</span>
        </span>
      </div>

      <!-- Headline -->
      <h1 :class="['mt-10 transition-all duration-1000 delay-400', show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']">
        <span class="block text-[clamp(3rem,7vw,5.5rem)] font-extrabold leading-[1.02] tracking-tight text-white">
          One Platform.
        </span>
        <span class="block text-[clamp(3rem,7vw,5.5rem)] leading-[1.02] tracking-tight mt-1">
          <span class="text-white font-extrabold">Every </span>
          <span class="relative inline-block h-[1.1em] overflow-hidden align-bottom">
            <TransitionGroup
              enter-active-class="transition-all duration-500 ease-out"
              enter-from-class="opacity-0 translate-y-[100%]"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition-all duration-400 ease-in absolute left-0 w-full"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-[100%]"
            >
              <span :key="wordIndex" class="block font-serif italic font-bold text-gradient whitespace-nowrap">
                {{ words[wordIndex] }}
              </span>
            </TransitionGroup>
          </span>
        </span>
      </h1>

      <!-- Sub -->
      <p :class="['mt-8 text-lg sm:text-xl text-gray-400 leading-relaxed max-w-lg mx-auto transition-all duration-1000 delay-600', show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6']">
        Access Midjourney, Kling, Veo, ElevenLabs, and 20+ premium AI tools.
        No subscriptions — pay only for what you create.
      </p>

      <!-- CTAs -->
      <div :class="['mt-10 flex flex-wrap items-center justify-center gap-4 transition-all duration-1000 delay-700', show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6']">
        <a href="https://promptedit.com" target="_blank"
          class="group relative bg-white text-dark-950 font-bold text-[15px] px-10 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] hover:scale-[1.04] flex items-center gap-3"
        >
          Start Creating Free
          <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </a>
        <button
          @click="scrollToPricing"
          class="glass-strong text-white/90 font-medium text-[15px] px-10 py-4 rounded-full transition-all duration-300 hover:bg-white/[0.08] hover:scale-[1.02]"
        >
          View Pricing
        </button>
      </div>

      <!-- Trust signals -->
      <div :class="['mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-gray-500 transition-all duration-1000 delay-[900ms]', show ? 'opacity-100' : 'opacity-0']">
        <span class="flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
          No credit card required
        </span>
        <span class="flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
          20+ premium AI tools
        </span>
        <span class="flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
          Cancel anytime
        </span>
      </div>
    </div>

    <!-- Bottom fade -->
    <div class="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-950 to-transparent z-[8]"></div>

    <!-- Scroll indicator -->
    <div :class="['absolute bottom-10 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 delay-[1500ms]', show ? 'opacity-40' : 'opacity-0']">
      <div class="w-[26px] h-[42px] rounded-full border-2 border-white/20 flex justify-center pt-2">
        <div class="w-1 h-3 rounded-full bg-white/40 animate-bounce"></div>
      </div>
    </div>
  </section>
</template>
