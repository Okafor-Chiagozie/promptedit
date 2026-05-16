<script setup lang="ts">
function scrollToPricing() {
  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
}

const categories = [
  { name: 'Color LUTs', count: '4,000+', icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>' },
  { name: 'Transitions', count: '10,000+', icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>' },
  { name: 'Text & Titles', count: '15,000+', icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h8m-8 6h16"/></svg>' },
  { name: 'Sound FX', count: '25,000+', icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>' },
  { name: 'Motion GFX', count: '12,000+', icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>' },
  { name: 'Backgrounds', count: '8,000+', icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>' },
]

const row1 = [
  '/img-fashion.png', '/2747d765-d130-405e-b300-f70212a33284.jpg', '/img-hollywood-neon.png',
  '/94d0afde-5eb9-40e0-b3be-546fba0f885a.png', '/img-geometric.png', '/e5090032-3d93-4b66-9b05-a84ba504f4c2.jpg',
  '/f17ce022-5b9a-4caa-b408-17cb8f85522e.jpg', '/img-portrait.png',
  '/img-fashion.png', '/2747d765-d130-405e-b300-f70212a33284.jpg', '/img-hollywood-neon.png',
  '/94d0afde-5eb9-40e0-b3be-546fba0f885a.png', '/img-geometric.png', '/e5090032-3d93-4b66-9b05-a84ba504f4c2.jpg',
  '/f17ce022-5b9a-4caa-b408-17cb8f85522e.jpg', '/img-portrait.png',
]

const row2 = [
  '/2d963ed9-9e2c-4f3e-9659-fe24e96e624e.png', '/6891e53a-40eb-4870-8a54-5de1e9e30ce8.jpg', '/ai_image_1.jpg',
  '/img-portrait.png', '/8fee39ac-c694-49d5-a154-9f9033739e25.png', '/ai_image_2.jpg',
  '/14527635-1b7c-4c7c-aa74-01a1aa6e035c.png', '/2070adb4-aba8-4fa6-a59d-b83bdedea968.jpg',
  '/2d963ed9-9e2c-4f3e-9659-fe24e96e624e.png', '/6891e53a-40eb-4870-8a54-5de1e9e30ce8.jpg', '/ai_image_1.jpg',
  '/img-portrait.png', '/8fee39ac-c694-49d5-a154-9f9033739e25.png', '/ai_image_2.jpg',
  '/14527635-1b7c-4c7c-aa74-01a1aa6e035c.png', '/2070adb4-aba8-4fa6-a59d-b83bdedea968.jpg',
]
</script>

<template>
  <section id="templates" class="relative overflow-hidden" style="background: linear-gradient(to bottom, #07070f 0%, #0a0a16 50%, #07070f 100%);">

    <!-- Header -->
    <div class="container-main relative z-10 pt-20 lg:pt-28">
      <div class="text-center section-header reveal">
        <span class="inline-block text-gold-400 text-xs font-bold tracking-[0.2em] uppercase mb-5">Content Creator Templates</span>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight">
          100,000+ templates.<br/>
          <span class="font-serif italic font-bold text-gold-400">Endless possibilities.</span>
        </h2>
        <p class="mt-6 text-gray-400 text-base lg:text-lg leading-relaxed max-w-lg mx-auto">
          Professionally designed editing templates, LUTs, motion graphics, and more — all included with Creator Pro.
        </p>
      </div>
    </div>

    <!-- Category pills -->
    <div class="container-main relative z-10 mb-10 lg:mb-14">
      <div class="flex flex-wrap justify-center gap-3 reveal-stagger">
        <div v-for="cat in categories" :key="cat.name"
          class="inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-white/8 bg-white/[0.02] hover:border-gold-500/20 hover:bg-gold-500/[0.03] transition-all duration-300 cursor-pointer group"
        >
          <span class="text-gray-500 group-hover:text-gold-400 transition-colors" v-html="cat.icon"></span>
          <span class="text-sm font-semibold text-white">{{ cat.name }}</span>
          <span class="text-gold-400 text-xs font-bold">{{ cat.count }}</span>
        </div>
      </div>
    </div>

    <!-- Scrolling rows - using all images -->
    <div class="space-y-3 lg:space-y-4 reveal-scale pb-16 lg:pb-20">
      <!-- Row 1: scrolls left -->
      <div class="scroll-fade overflow-hidden">
        <div class="marquee-row animate-[marquee_60s_linear_infinite]">
          <div v-for="(img, i) in row1" :key="'r1-'+i" class="relative shrink-0 rounded-xl overflow-hidden border border-white/[0.06] group cursor-pointer">
            <img :src="img" alt="" class="h-full w-auto object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" decoding="async" />
            <div class="absolute inset-0 bg-dark-950/10 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>
        </div>
      </div>

      <!-- Row 2: scrolls right -->
      <div class="scroll-fade overflow-hidden">
        <div class="marquee-row animate-[marquee-reverse_65s_linear_infinite]">
          <div v-for="(img, i) in row2" :key="'r2-'+i" class="relative shrink-0 rounded-xl overflow-hidden border border-white/[0.06] group cursor-pointer">
            <img :src="img" alt="" class="h-full w-auto object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" decoding="async" />
            <div class="absolute inset-0 bg-dark-950/10 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom CTA -->
    <div class="container-main pb-28 lg:pb-36 text-center reveal">
      <p class="text-sm text-gray-500 mb-5">All templates included with Creator Pro subscription</p>
      <div class="flex flex-wrap items-center justify-center gap-4">
        <button @click="scrollToPricing"
          class="group bg-white text-dark-950 font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] hover:scale-[1.03] inline-flex items-center gap-2"
        >
          View Pricing
          <svg class="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
        </button>
        <a href="https://promptedit.com" target="_blank" class="text-gold-400 hover:text-gold-300 font-semibold text-sm transition-colors">
          Browse All Templates
        </a>
      </div>
    </div>
  </section>
</template>
