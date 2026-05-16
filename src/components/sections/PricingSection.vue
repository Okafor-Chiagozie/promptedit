<script setup lang="ts">
</script>

<template>
  <section id="pricing" class="relative section-pad bg-dark-900 noise overflow-hidden">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gold-500/[0.03] rounded-full blur-[60px]"></div>

    <div class="relative container-main">
      <!-- Header -->
      <div class="text-center section-header reveal">
        <span class="inline-block text-gold-400 text-xs font-bold tracking-[0.2em] uppercase mb-5">Pricing</span>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
          Simple pricing.<br/>
          <span class="font-serif italic font-bold text-gold-400">Powerful tools.</span>
        </h2>
        <p class="mt-6 text-gray-400 text-lg max-w-lg mx-auto leading-relaxed">No hidden fees. No long-term contracts. Cancel anytime.</p>
      </div>

      <!-- Cards -->
      <div class="max-w-[920px] mx-auto grid md:grid-cols-2 gap-6 lg:gap-8 reveal-stagger">
        <!-- Pay As You Go -->
        <div class="card p-8 sm:p-10 rounded-2xl">
          <div class="mb-8">
            <h3 class="text-base font-semibold text-gray-300">Pay As You Go</h3>
            <p class="text-sm text-gray-500 mt-1.5">Perfect for trying things out</p>
          </div>

          <div class="mb-8">
            <div class="flex items-baseline gap-2">
              <span class="text-5xl lg:text-6xl font-extrabold text-white tracking-tight">$98</span>
              <span class="text-gray-500 text-base font-medium">one-time</span>
            </div>
            <p class="text-sm text-gold-400 mt-3 font-medium">$110 worth of AI credits — save 10%</p>
          </div>

          <ul class="space-y-4 mb-10">
            <li v-for="f in [
              'Access all 20+ AI tools',
              '$110 worth of AI credits',
              'Use credits across any tool',
              'No subscription required',
              'Purchase more anytime',
            ]" :key="f" class="flex items-start gap-3">
              <svg class="w-5 h-5 text-gray-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span class="text-sm text-gray-400">{{ f }}</span>
            </li>
          </ul>

          <a href="https://promptedit.com" target="_blank"
            class="block text-center font-semibold text-sm py-4 rounded-2xl border border-white/10 text-white hover:bg-white/5 hover:border-white/15 transition-all duration-300"
          >
            Get Started
          </a>
        </div>

        <!-- Creator Pro - with animated glow border -->
        <div class="glow-border card-gold p-8 sm:p-10 rounded-2xl">
          <!-- Badge -->
          <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
            <span class="bg-gold-500 text-dark-950 text-[11px] font-extrabold px-5 py-1.5 rounded-full uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              Most Popular
            </span>
          </div>

          <div class="mb-8">
            <h3 class="text-base font-semibold text-white">Creator Pro</h3>
            <p class="text-sm text-gray-400 mt-1.5">For serious creators. Maximum value.</p>
          </div>

          <div class="mb-8">
            <div class="flex items-baseline gap-2">
              <span class="text-5xl lg:text-6xl font-extrabold text-white tracking-tight">$39</span>
              <span class="text-gray-400 text-base font-medium">/month</span>
            </div>
            <p class="text-sm text-gold-400 mt-3 font-medium">$49 in credits/mo + 20% lifetime bonus</p>
          </div>

          <ul class="space-y-4 mb-10">
            <li v-for="f in [
              'Everything in Pay As You Go',
              '$49 in monthly AI credits',
              '20% lifetime credit boost',
              '10% off all additional credits',
              '100,000+ editing templates',
              '4,000+ professional LUTs',
              'Faster generation speeds',
              'Run multiple generations at once',
            ]" :key="f" class="flex items-start gap-3">
              <svg class="w-5 h-5 text-gold-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span class="text-sm text-gray-300">{{ f }}</span>
            </li>
          </ul>

          <a href="https://promptedit.com" target="_blank"
            class="block text-center font-bold text-sm py-4 rounded-2xl bg-white text-dark-950 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:scale-[1.01] transition-all duration-300"
          >
            Start Creator Pro
          </a>
          <p class="text-center text-xs text-gray-500 mt-3">Cancel easily at any time</p>
        </div>
      </div>

      <p class="text-center text-sm text-gray-600 mt-12 reveal">
        All plans include full access to 20+ AI tools &middot; Secure payment &middot; Instant access
      </p>
    </div>
  </section>
</template>
