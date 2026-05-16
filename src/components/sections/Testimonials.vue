<script setup lang="ts">
const testimonials = [
  {
    quote: "PromptEdit saved me over $100/month. I used to pay for Midjourney, ElevenLabs, and Kling separately. Now it's all in one place and my content quality has never been better.",
    name: 'Alex Rivera',
    role: 'YouTube Creator · 2.4M subscribers',
    avatar: '/img-portrait.png',
  },
  {
    quote: "The DaVinci Resolve plugin is a game-changer. I generate AI b-roll and sound effects without leaving my editor. My workflow is 10x faster.",
    name: 'Sarah Chen',
    role: 'Filmmaker · Netflix & Amazon',
    avatar: '/img-fashion.png',
  },
  {
    quote: "I tested every AI marketplace out there. PromptEdit has the best selection of models and the most affordable credit system. It's not even close.",
    name: 'Marcus Blake',
    role: 'Content Creator · 800K followers',
    avatar: '/img-geometric.png',
  },
  {
    quote: "Being able to access Midjourney, Kling AI, and ElevenLabs from one dashboard changed everything. I create twice as much content in half the time.",
    name: 'Priya Sharma',
    role: 'Social Media Manager',
    avatar: '/img-portrait.png',
  },
]
</script>

<template>
  <section class="relative overflow-hidden" style="background: linear-gradient(to bottom, #07070f 0%, #0c0a1a 50%, #07070f 100%);">

    <div class="container-wide relative z-10 py-20 lg:py-28">
      <!-- Header -->
      <div class="text-center section-header reveal">
        <span class="inline-block text-gold-400 text-xs font-bold tracking-[0.2em] uppercase mb-5">Testimonials</span>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
          Loved by <span class="font-serif italic font-bold text-gold-400">creators.</span>
        </h2>
      </div>

      <!-- Mobile: vertical stack -->
      <div class="flex flex-col gap-5 lg:hidden reveal-stagger">
        <div v-for="t in testimonials" :key="'m'+t.name"
          class="flex flex-col justify-between rounded-2xl card p-6"
        >
          <div>
            <div class="flex gap-1 mb-5">
              <svg v-for="s in 5" :key="s" class="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <p class="text-base font-semibold leading-relaxed text-gray-300">"{{ t.quote }}"</p>
          </div>
          <div class="flex items-center gap-3.5 mt-6 pt-5 border-t border-white/6">
            <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-white/10">
              <img :src="t.avatar" :alt="t.name" class="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
            <div>
              <p class="text-sm font-semibold text-white">{{ t.name }}</p>
              <p class="text-xs text-gray-500 mt-0.5">{{ t.role }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Desktop: Fan spread -->
      <div class="group/fan hidden lg:flex relative justify-center items-end h-[480px] reveal-scale">
        <div v-for="(t, i) in testimonials" :key="t.name"
          class="testimonial-card absolute bottom-0 flex flex-col justify-between rounded-2xl w-[340px] h-[420px] card p-7"
          :style="{
            '--rotate': `${[-8, -2.5, 2.5, 8][i]}deg`,
            '--tx': `${[-420, -140, 140, 420][i]}px`,
            zIndex: 20 - Math.abs(i - 1.5),
          }"
        >
          <div>
            <div class="flex gap-1 mb-5">
              <svg v-for="s in 5" :key="s" class="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <p class="text-base font-semibold leading-relaxed text-gray-300">"{{ t.quote }}"</p>
          </div>
          <div class="flex items-center gap-3.5 mt-8 pt-6 border-t border-white/6">
            <div class="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-white/10">
              <img :src="t.avatar" :alt="t.name" class="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
            <div>
              <p class="text-sm font-semibold text-white">{{ t.name }}</p>
              <p class="text-xs text-gray-500 mt-0.5">{{ t.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonial-card {
  transform: rotate(var(--rotate)) translateX(var(--tx));
  transition: transform 0.9s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.9s cubic-bezier(0.16, 1, 0.3, 1),
              background-color 0.9s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.9s cubic-bezier(0.16, 1, 0.3, 1),
              backdrop-filter 0.9s cubic-bezier(0.16, 1, 0.3, 1);
}
.testimonial-card:hover {
  transform: rotate(0deg) translateX(var(--tx)) translateY(-8px) scale(1.03);
  z-index: 50 !important;
  border-color: rgba(245, 158, 11, 0.25);
  background: rgba(245, 158, 11, 0.04);
  box-shadow: 0 0 60px rgba(245, 158, 11, 0.06);
  backdrop-filter: blur(24px);
}
</style>
