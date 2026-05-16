<script setup lang="ts">
const oldPrices = [
  { tool: 'Midjourney', price: '$20' },
  { tool: 'DALL-E / ChatGPT', price: '$20' },
  { tool: 'Kling AI', price: '$30' },
  { tool: 'ElevenLabs', price: '$24' },
  { tool: 'HeyGen', price: '$24' },
  { tool: 'Suno', price: '$10' },
  { tool: 'Runway', price: '$15' },
]
</script>

<template>
  <section class="relative overflow-hidden" style="background: linear-gradient(to bottom, #07070f 0%, #0c0a1a 50%, #07070f 100%);">
    <div class="container-main py-20 lg:py-28">
      <div class="reveal">
        <!-- Header -->
        <div class="text-center mb-16 lg:hidden">
          <span class="inline-block text-gold-400 text-xs font-bold tracking-[0.2em] uppercase mb-5">Why PromptEdit</span>
          <h2 class="text-4xl sm:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
            Stop paying <span class="font-serif italic font-bold text-red-400/80 line-through decoration-red-400/40 decoration-2">$143+/mo</span><br/>
            <span class="font-serif italic font-bold text-gold-400">for AI tools.</span>
          </h2>
        </div>

        <!-- Desktop: horizontal layout -->
        <div class="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">

          <!-- Left: The old way -->
          <div>
            <span class="hidden lg:inline-block text-gold-400 text-xs font-bold tracking-[0.2em] uppercase mb-5">Why PromptEdit</span>
            <h2 class="hidden lg:block text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-10">
              Stop paying<br/><span class="font-serif italic font-bold text-red-400/80 line-through decoration-red-400/40 decoration-2">$143+/mo</span>
              <span class="font-serif italic font-bold text-gold-400"> for AI tools.</span>
            </h2>
            <div class="flex flex-wrap gap-3">
              <div v-for="item in oldPrices" :key="item.tool" class="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/8 bg-white/[0.03]">
                <span class="text-sm text-gray-400">{{ item.tool }}</span>
                <span class="text-sm font-semibold text-gray-300 underline decoration-red-400 decoration-2 underline-offset-4">{{ item.price }}/mo</span>
              </div>
            </div>
          </div>

          <!-- Center: Arrow -->
          <div class="hidden lg:flex flex-col items-center gap-3">
            <div class="w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
            <div class="w-14 h-14 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
              <svg class="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </div>
            <div class="w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          </div>

          <!-- Mobile arrow -->
          <div class="flex justify-center lg:hidden">
            <div class="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
              <svg class="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
            </div>
          </div>

          <!-- Right: The PromptEdit way -->
          <div class="glow-border rounded-3xl">
            <div class="rounded-3xl p-8 sm:p-10 lg:p-12" style="background: rgba(245, 158, 11, 0.04); border: 2px solid rgba(245, 158, 11, 0.2);">
              <p class="text-gray-400 text-sm font-medium uppercase tracking-wider mb-4">With PromptEdit</p>
              <p class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gold-400 leading-none">$39<span class="text-lg text-gray-400 font-normal">/mo</span></p>
              <p class="text-gray-500 text-sm mt-1">or $98 one-time with pay-as-you-go</p>
              <p class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-4">20+ tools</p>

              <div class="flex flex-wrap gap-2.5 mt-8">
                <span v-for="perk in ['One account', 'One interface', 'All AI models', 'Editor plugins', '100K+ templates']" :key="perk"
                  class="px-3.5 py-1.5 rounded-full text-xs font-semibold text-gray-300 border border-white/8 bg-white/[0.03]"
                >
                  {{ perk }}
                </span>
              </div>

              <a href="https://promptedit.com" target="_blank"
                class="group mt-10 inline-flex items-center gap-2.5 bg-white text-dark-950 font-bold text-sm px-9 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:scale-[1.03]"
              >
                Start Creating
                <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
