<script setup lang="ts">
</script>

<template>
  <section class="relative section-pad bg-dark-950 overflow-hidden noise">
    <div class="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

    <div class="relative container-main">
      <!-- Header -->
      <div class="text-center section-header reveal">
        <span class="inline-block text-gold-400 text-xs font-bold tracking-[0.2em] uppercase mb-5">Why PromptEdit</span>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
          Stop juggling subscriptions.<br/>
          <span class="font-serif italic font-bold text-gold-400">Start creating.</span>
        </h2>
      </div>

      <!-- Before / After comparison -->
      <div class="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-28 reveal-stagger">
        <!-- Before -->
        <div class="card p-8 sm:p-10">
          <div class="flex items-center gap-3 mb-8">
            <div class="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
              <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-white">Without PromptEdit</h3>
              <p class="text-sm text-gray-500">The old way of creating AI content</p>
            </div>
          </div>
          <ul class="space-y-4">
            <li v-for="item in [
              '$20/mo for Midjourney',
              '$20/mo for ChatGPT / DALL-E',
              '$30/mo for Kling AI',
              '$24/mo for ElevenLabs',
              '$10/mo for Suno',
              'Learning 5+ different interfaces',
              'Managing 5+ separate accounts',
            ]" :key="item" class="flex items-start gap-4">
              <svg class="w-5 h-5 text-red-400/60 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 12H4"/></svg>
              <span class="text-[15px] text-gray-400 leading-relaxed">{{ item }}</span>
            </li>
          </ul>
          <div class="mt-8 pt-6 border-t border-white/8">
            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-extrabold text-red-400">$104+</span>
              <span class="text-sm text-gray-500">/month for basic access</span>
            </div>
          </div>
        </div>

        <!-- After -->
        <div class="card-gold p-8 sm:p-10">
          <div class="flex items-center gap-3 mb-8">
            <div class="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
              <svg class="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-white">With PromptEdit</h3>
              <p class="text-sm text-gold-400/80">The smarter way</p>
            </div>
          </div>
          <ul class="space-y-4">
            <li v-for="item in [
              'All 20+ AI tools in one place',
              'One account, one interface',
              'Pay only for what you use',
              'No monthly commitments needed',
              'Switch between tools instantly',
              'Editor plugins for DaVinci & Premiere',
              '100K+ templates with Creator Pro',
            ]" :key="item" class="flex items-start gap-4">
              <svg class="w-5 h-5 text-gold-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
              <span class="text-[15px] text-gray-300 leading-relaxed">{{ item }}</span>
            </li>
          </ul>
          <div class="mt-8 pt-6 border-t border-gold-500/15">
            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-extrabold text-gold-400">$98</span>
              <span class="text-sm text-gray-400">one-time, or $39/mo for everything</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Feature highlights -->
      <div class="grid md:grid-cols-3 gap-6 reveal-stagger">
        <!-- Card 1 -->
        <div class="group card overflow-hidden hover:border-gold-500/20 transition-all duration-500">
          <div class="relative h-52 overflow-hidden">
            <img src="/img-hollywood-neon.png" alt="One Platform" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" decoding="async" />
            <div class="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent"></div>
          </div>
          <div class="p-7 lg:p-8">
            <div class="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-5">
              <svg class="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">One Unified Platform</h3>
            <p class="text-sm text-gray-400 leading-relaxed">Access every major AI model from a single dashboard. No more tab-switching between Midjourney, Kling, and ElevenLabs.</p>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="group card overflow-hidden hover:border-gold-500/20 transition-all duration-500">
          <div class="relative h-52 overflow-hidden">
            <img src="/img-portrait.png" alt="Pay As You Go" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" decoding="async" />
            <div class="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent"></div>
          </div>
          <div class="p-7 lg:p-8">
            <div class="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-5">
              <svg class="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Pay Only For What You Use</h3>
            <p class="text-sm text-gray-400 leading-relaxed">No monthly subscriptions needed. Buy credits and use them across any tool. Like gas for a car — fill up when you need to.</p>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="group card overflow-hidden hover:border-gold-500/20 transition-all duration-500">
          <div class="relative h-52 overflow-hidden">
            <img src="/img-fashion.png" alt="Editor Plugins" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" decoding="async" />
            <div class="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent"></div>
          </div>
          <div class="p-7 lg:p-8">
            <div class="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-5">
              <svg class="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/></svg>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Built Into Your Editor</h3>
            <p class="text-sm text-gray-400 leading-relaxed">Plugins for DaVinci Resolve and Premiere Pro. Generate AI content and drop it straight into your timeline.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
