<script setup lang="ts">
import { ref } from 'vue'

const openIndex = ref<number | null>(null)
function toggle(i: number) { openIndex.value = openIndex.value === i ? null : i }

const faqs = [
  { q: 'What is PromptEdit?', a: 'PromptEdit is the most affordable AI marketplace, giving you access to 20+ premium AI tools — images, video, audio, and editing plugins — all from one platform with a simple pay-as-you-go credit system. No more juggling multiple subscriptions.' },
  { q: 'How do AI credits work?', a: 'Credits are like fuel for your creativity. Purchase them once and spend across any AI tool on the platform. Different tools cost different amounts. Think of it like buying gas — you only pay for what you use, and top up whenever you need more.' },
  { q: 'What AI tools are available?', a: 'PromptEdit includes 20+ tools: Midjourney, DALL-E, Kling AI, Veo, HeyGen, ElevenLabs, Suno, Ideogram, Nano Banana Pro, Grok, Seedance, Flux, and many more. We add new tools regularly.' },
  { q: 'Do I need a subscription?', a: 'No. The pay-as-you-go plan at $98 gets you $110 in credits with zero subscription. We also offer Creator Pro at $39/month for more credits, templates, and bonuses — but it\'s completely optional and cancels anytime.' },
  { q: 'Can I use content for commercial projects?', a: 'Yes. Content generated through PromptEdit is yours to use commercially — YouTube, social media, client work, ads, and more.' },
  { q: 'What are the Content Creator Templates?', a: 'Over 100,000 professionally designed templates included with Creator Pro: 4,000+ LUTs, text animations, transitions, sound effects, backgrounds, and motion graphics for your video projects.' },
  { q: 'How do the editing plugins work?', a: 'Our plugins for DaVinci Resolve and Adobe Premiere Pro let you access AI tools directly in your editor. Generate and add AI content to your timeline without switching apps.' },
  { q: 'Can I cancel my subscription anytime?', a: 'Absolutely. Cancel Creator Pro anytime with no penalties. Your access continues until the end of your billing period.' },
]

// Split into two columns
const leftFaqs = faqs.filter((_, i) => i % 2 === 0)
const rightFaqs = faqs.filter((_, i) => i % 2 === 1)
</script>

<template>
  <section id="faq" class="relative overflow-hidden" style="background: linear-gradient(to bottom, #07070f 0%, #0c0a1a 50%, #07070f 100%);">
    <div class="container-main py-20 lg:py-28">
      <!-- Header -->
      <div class="text-center section-header reveal">
        <span class="inline-block text-gold-400 text-xs font-bold tracking-[0.2em] uppercase mb-5">FAQ</span>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
          Got <span class="font-serif italic font-bold text-gold-400">questions?</span>
        </h2>
        <p class="mt-5 text-gray-400 text-base lg:text-lg max-w-md mx-auto">Everything you need to know about PromptEdit.</p>
      </div>

      <!-- Two column accordion -->
      <div class="grid lg:grid-cols-2 gap-4 lg:gap-6 reveal">
        <!-- Left column -->
        <div class="space-y-3">
          <div v-for="(faq, idx) in leftFaqs" :key="'l'+idx"
            :class="[
              'faq-item rounded-2xl overflow-hidden border transition-all duration-500',
              openIndex === idx * 2 ? 'border-gold-500/20 bg-gold-500/[0.03]' : 'border-white/8 hover:border-white/12'
            ]"
          >
            <button @click="toggle(idx * 2)" class="w-full flex items-center justify-between px-6 sm:px-7 py-5 text-left group">
              <span class="flex items-center gap-3">
                <span :class="['text-xs font-bold tabular-nums w-6', openIndex === idx * 2 ? 'text-gold-400' : 'text-gray-600']">{{ String(idx * 2 + 1).padStart(2, '0') }}</span>
                <span :class="['text-[15px] font-semibold transition-colors', openIndex === idx * 2 ? 'text-white' : 'text-gray-300 group-hover:text-white']">
                  {{ faq.q }}
                </span>
              </span>
              <div :class="['w-7 h-7 rounded-full shrink-0 flex items-center justify-center transition-all duration-500 ml-4', openIndex === idx * 2 ? 'bg-gold-500/15 rotate-45' : 'bg-white/[0.04]']">
                <svg class="w-3.5 h-3.5" :class="openIndex === idx * 2 ? 'text-gold-400' : 'text-gray-500'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </button>
            <Transition
              enter-active-class="transition-all duration-500 ease-out"
              enter-from-class="max-h-0 opacity-0"
              enter-to-class="max-h-80 opacity-100"
              leave-active-class="transition-all duration-300 ease-in"
              leave-from-class="max-h-80 opacity-100"
              leave-to-class="max-h-0 opacity-0"
            >
              <div v-if="openIndex === idx * 2" class="overflow-hidden">
                <p class="px-6 sm:px-7 pb-6 pl-[3.75rem] text-sm text-gray-400 leading-relaxed">{{ faq.a }}</p>
              </div>
            </Transition>
          </div>
        </div>

        <!-- Right column -->
        <div class="space-y-3">
          <div v-for="(faq, idx) in rightFaqs" :key="'r'+idx"
            :class="[
              'faq-item rounded-2xl overflow-hidden border transition-all duration-500',
              openIndex === idx * 2 + 1 ? 'border-gold-500/20 bg-gold-500/[0.03]' : 'border-white/8 hover:border-white/12'
            ]"
          >
            <button @click="toggle(idx * 2 + 1)" class="w-full flex items-center justify-between px-6 sm:px-7 py-5 text-left group">
              <span class="flex items-center gap-3">
                <span :class="['text-xs font-bold tabular-nums w-6', openIndex === idx * 2 + 1 ? 'text-gold-400' : 'text-gray-600']">{{ String(idx * 2 + 2).padStart(2, '0') }}</span>
                <span :class="['text-[15px] font-semibold transition-colors', openIndex === idx * 2 + 1 ? 'text-white' : 'text-gray-300 group-hover:text-white']">
                  {{ faq.q }}
                </span>
              </span>
              <div :class="['w-7 h-7 rounded-full shrink-0 flex items-center justify-center transition-all duration-500 ml-4', openIndex === idx * 2 + 1 ? 'bg-gold-500/15 rotate-45' : 'bg-white/[0.04]']">
                <svg class="w-3.5 h-3.5" :class="openIndex === idx * 2 + 1 ? 'text-gold-400' : 'text-gray-500'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </button>
            <Transition
              enter-active-class="transition-all duration-500 ease-out"
              enter-from-class="max-h-0 opacity-0"
              enter-to-class="max-h-80 opacity-100"
              leave-active-class="transition-all duration-300 ease-in"
              leave-from-class="max-h-80 opacity-100"
              leave-to-class="max-h-0 opacity-0"
            >
              <div v-if="openIndex === idx * 2 + 1" class="overflow-hidden">
                <p class="px-6 sm:px-7 pb-6 pl-[3.75rem] text-sm text-gray-400 leading-relaxed">{{ faq.a }}</p>
              </div>
            </Transition>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div class="text-center mt-16 reveal">
        <p class="text-gray-400 text-sm mb-6">Still have questions?</p>
        <a href="mailto:support@contentcreator.com"
          class="group inline-flex items-center gap-2.5 bg-white text-dark-950 font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] hover:scale-[1.03]"
        >
          Get in Touch
          <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </a>
      </div>
    </div>
  </section>
</template>
