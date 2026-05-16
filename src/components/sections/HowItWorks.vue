<script setup lang="ts">
const steps = [
  {
    num: '01',
    label: 'Step One',
    title: 'Create Your Free Account',
    desc: 'Sign up in seconds. No credit card needed. Explore every AI tool on the platform instantly.',
    img: '/img-portrait.png',
  },
  {
    num: '02',
    label: 'Step Two',
    title: 'Get AI Credits',
    desc: 'Purchase credits starting at $98 — use them across any tool. Like fuel for your creativity.',
    img: '/img-geometric.png',
  },
  {
    num: '03',
    label: 'Step Three',
    title: 'Start Creating',
    desc: 'Generate images, videos, audio, and more with 20+ AI tools. Drop content straight into your projects.',
    video: '/hero-video.mp4',
    img: '/img-hollywood-neon.png',
  },
]
</script>

<template>
  <section id="how-it-works" class="relative overflow-hidden noise" style="background: linear-gradient(to bottom, #07070f 0%, #0a0a16 50%, #07070f 100%);">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.02] rounded-full blur-[80px]"></div>

    <!-- Header -->
    <div class="container-main relative z-10 pt-20 lg:pt-28 pb-16 lg:pb-20">
      <div class="grid lg:grid-cols-2 gap-6 items-end reveal">
        <div>
          <span class="inline-block text-gold-400 text-xs font-bold tracking-[0.2em] uppercase mb-5">How It Works</span>
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight">
            From idea to content<br/>
            <span class="font-serif italic font-bold text-gold-400">in minutes.</span>
          </h2>
        </div>
        <p class="text-gray-400 text-base lg:text-lg lg:text-right max-w-md lg:ml-auto leading-relaxed">
          Three simple steps to start creating professional AI content. No learning curve.
        </p>
      </div>
    </div>

    <!-- Steps: full-width alternating layout -->
    <div class="relative z-10 space-y-0">
      <!-- Step 1: image right -->
      <div class="reveal">
        <div class="grid lg:grid-cols-2 items-center">
          <div class="px-6 sm:px-8 lg:pl-[max(2rem,calc((100vw-1200px)/2+2rem))] lg:pr-16 py-14 lg:py-20">
            <div class="flex items-center gap-4 mb-6">
              <span class="text-6xl lg:text-7xl font-black text-white/[0.06]">01</span>
              <span class="text-gold-400 text-xs font-bold tracking-[0.15em] uppercase">{{ steps[0].label }}</span>
            </div>
            <h3 class="text-2xl lg:text-4xl font-bold text-white leading-tight">{{ steps[0].title }}</h3>
            <p class="mt-4 text-gray-400 text-base leading-relaxed max-w-md">{{ steps[0].desc }}</p>
            <a href="https://promptedit.com" target="_blank"
              class="group mt-8 inline-flex items-center gap-2.5 bg-white text-dark-950 font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] hover:scale-[1.03]"
            >
              Sign Up Free
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
          </div>
          <div class="relative h-[250px] sm:h-[300px] lg:h-[380px]">
            <img :src="steps[0].img" alt="" class="absolute inset-0 w-full h-full object-cover lg:rounded-l-3xl" loading="lazy" decoding="async" />
            <div class="absolute inset-0 bg-gradient-to-r from-dark-800/30 to-transparent lg:rounded-l-3xl"></div>
          </div>
        </div>
      </div>

      <!-- Step 2: image left -->
      <div class="reveal">
        <div class="grid lg:grid-cols-2 items-center">
          <div class="relative h-[250px] sm:h-[300px] lg:h-[380px] order-2 lg:order-1">
            <img :src="steps[1].img" alt="" class="absolute inset-0 w-full h-full object-cover lg:rounded-r-3xl" loading="lazy" decoding="async" />
            <div class="absolute inset-0 bg-gradient-to-l from-dark-800/30 to-transparent lg:rounded-r-3xl"></div>
          </div>
          <div class="px-6 sm:px-8 lg:pr-[max(2rem,calc((100vw-1200px)/2+2rem))] lg:pl-16 py-14 lg:py-20 order-1 lg:order-2">
            <div class="flex items-center gap-4 mb-6">
              <span class="text-6xl lg:text-7xl font-black text-white/[0.06]">02</span>
              <span class="text-gold-400 text-xs font-bold tracking-[0.15em] uppercase">{{ steps[1].label }}</span>
            </div>
            <h3 class="text-2xl lg:text-4xl font-bold text-white leading-tight">{{ steps[1].title }}</h3>
            <p class="mt-4 text-gray-400 text-base leading-relaxed max-w-md">{{ steps[1].desc }}</p>
          </div>
        </div>
      </div>

      <!-- Step 3: image right -->
      <div class="reveal">
        <div class="grid lg:grid-cols-2 items-center">
          <div class="px-6 sm:px-8 lg:pl-[max(2rem,calc((100vw-1200px)/2+2rem))] lg:pr-16 py-14 lg:py-20">
            <div class="flex items-center gap-4 mb-6">
              <span class="text-6xl lg:text-7xl font-black text-white/[0.06]">03</span>
              <span class="text-gold-400 text-xs font-bold tracking-[0.15em] uppercase">{{ steps[2].label }}</span>
            </div>
            <h3 class="text-2xl lg:text-4xl font-bold text-white leading-tight">{{ steps[2].title }}</h3>
            <p class="mt-4 text-gray-400 text-base leading-relaxed max-w-md">{{ steps[2].desc }}</p>
          </div>
          <div class="relative h-[250px] sm:h-[300px] lg:h-[380px]">
            <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover lg:rounded-l-3xl">
              <source :src="steps[2].video" type="video/mp4" />
            </video>
            <div class="absolute inset-0 bg-gradient-to-r from-dark-800/30 to-transparent lg:rounded-l-3xl"></div>
            <div class="absolute bottom-5 left-5 glass-strong px-3.5 py-2 rounded-full">
              <span class="text-xs text-white/80 font-semibold flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                AI Generated
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="h-20 lg:h-28"></div>
  </section>
</template>
