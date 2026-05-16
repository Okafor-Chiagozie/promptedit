<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref(0)

const toolIcons: Record<string, string> = {
  'Midjourney': 'https://www.google.com/s2/favicons?domain=midjourney.com&sz=64',
  'DALL-E 3': 'https://www.google.com/s2/favicons?domain=openai.com&sz=64',
  'Ideogram': 'https://www.google.com/s2/favicons?domain=ideogram.ai&sz=64',
  'Flux': 'https://www.google.com/s2/favicons?domain=blackforestlabs.ai&sz=64',
  'Kling AI': 'https://www.google.com/s2/favicons?domain=klingai.com&sz=64',
  'Veo': 'https://www.google.com/s2/favicons?domain=deepmind.google&sz=64',
  'HeyGen': 'https://www.google.com/s2/favicons?domain=heygen.com&sz=64',
  'Nano Banana Pro': 'https://www.google.com/s2/favicons?domain=nanobanana.com&sz=64',
  'Seedance': 'https://www.google.com/s2/favicons?domain=seedance.ai&sz=64',
  'ElevenLabs': 'https://www.google.com/s2/favicons?domain=elevenlabs.io&sz=64',
  'Suno': 'https://www.google.com/s2/favicons?domain=suno.com&sz=64',
  'Udio': 'https://www.google.com/s2/favicons?domain=udio.com&sz=64',
  'DaVinci Resolve': 'https://www.google.com/s2/favicons?domain=blackmagicdesign.com&sz=64',
  'Premiere Pro': 'https://www.google.com/s2/favicons?domain=adobe.com&sz=64',
  'After Effects': 'https://www.google.com/s2/favicons?domain=adobe.com&sz=64',
}

const tabs = [
  {
    id: 'image', label: 'AI Image',
    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`,
    title: 'Generate stunning visuals in seconds',
    desc: 'Create AI-powered images for thumbnails, social media, ads, and more — using the best models on the planet.',
    tools: ['Midjourney', 'DALL-E 3', 'Ideogram', 'Flux'],
    features: ['AI Portraits & Clones', 'Social Media Graphics', 'YouTube Thumbnails', 'Product Photography', 'Concept Art', 'Logo Design'],
    img: '/f17ce022-5b9a-4caa-b408-17cb8f85522e.jpg',
  },
  {
    id: 'video', label: 'AI Video',
    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>`,
    title: 'Create cinematic video with AI',
    desc: 'Professional-quality video generation — from short-form reels to cinematic scenes — powered by world-class AI models.',
    tools: ['Kling AI', 'Veo', 'HeyGen', 'Nano Banana Pro', 'Seedance'],
    features: ['Cinematic Scenes', 'Video Ads & Reels', 'Visual Effects', 'AI Avatars', 'Clone Videos', 'TikTok & Shorts'],
    img: '/2747d765-d130-405e-b300-f70212a33284.jpg',
    video: '/hero-video.mp4',
  },
  {
    id: 'audio', label: 'AI Audio',
    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/></svg>`,
    title: 'Professional audio, zero recording',
    desc: 'Voiceovers, voice cloning, music generation, sound effects — everything for a professional soundtrack.',
    tools: ['ElevenLabs', 'Suno', 'Udio'],
    features: ['AI Voiceovers', 'Voice Cloning', 'Music Generation', 'Sound Effects', 'Voice Swaps', 'Podcast Audio'],
    img: '/14527635-1b7c-4c7c-aa74-01a1aa6e035c.png',
  },
  {
    id: 'plugins', label: 'Plugins',
    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/></svg>`,
    title: 'AI inside your editor',
    desc: 'Generate AI content directly within DaVinci Resolve and Premiere Pro. No switching apps.',
    tools: ['DaVinci Resolve', 'Premiere Pro', 'After Effects'],
    features: ['In-Editor Generation', 'Timeline Import', 'Batch Processing', 'Real-Time Preview', 'Multi-Format', 'Seamless Workflow'],
    img: '/e5090032-3d93-4b66-9b05-a84ba504f4c2.jpg',
  },
]

const current = ref(tabs[0])

function setTab(i: number) {
  activeTab.value = i
  current.value = tabs[i]
}
</script>

<template>
  <section id="tools" class="relative overflow-hidden" style="background: linear-gradient(to bottom, #07070f 0%, #0c0c18 50%, #07070f 100%);">
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/[0.02] rounded-full blur-[80px]"></div>

    <!-- Header - contained -->
    <div class="container-main relative z-10 pt-20 lg:pt-28">
      <div class="text-center section-header reveal">
        <span class="inline-block text-gold-400 text-xs font-bold tracking-[0.2em] uppercase mb-5">AI Toolkit</span>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight">
          Every tool you need.<br/>
          <span class="font-serif italic font-bold text-gold-400">Create anything.</span>
        </h2>
      </div>

      <!-- Tabs bar - contained -->
      <div class="reveal flex justify-center mb-14 lg:mb-20">
        <div class="inline-flex gap-1.5 p-1.5 rounded-full bg-white/[0.04] border border-white/[0.06]">
          <button v-for="(tab, i) in tabs" :key="tab.id" @click="setTab(i)"
            :class="[
              'flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-300',
              activeTab === i
                ? 'bg-white text-dark-950 shadow-[0_0_30px_rgba(255,255,255,0.1)]'
                : 'text-gray-500 hover:text-white'
            ]"
          >
            <span v-html="tab.icon"></span>
            <span class="hidden sm:inline">{{ tab.label }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Full-bleed split content - NO card, NO border -->
    <Transition
      mode="out-in"
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div :key="current.id" class="relative z-10 grid lg:grid-cols-2 items-center">
        <!-- Left: Info - padded from left edge -->
        <div class="px-6 sm:px-8 lg:pl-[max(2rem,calc((100vw-1200px)/2+2rem))] lg:pr-12 py-12 lg:py-20">
          <h3 class="text-2xl lg:text-4xl font-bold text-white leading-snug tracking-tight">{{ current.title }}</h3>
          <p class="mt-5 text-gray-400 text-base leading-relaxed max-w-lg">{{ current.desc }}</p>

          <div class="mt-10 grid grid-cols-2 gap-x-6 gap-y-4">
            <div v-for="f in current.features" :key="f" class="flex items-center gap-3">
              <svg class="w-4 h-4 text-gold-400 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
              <span class="text-sm text-gray-300">{{ f }}</span>
            </div>
          </div>

          <!-- Tool pills with favicons -->
          <div class="mt-10 flex flex-wrap gap-2.5">
            <span v-for="t in current.tools" :key="t" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium bg-white/[0.04] border border-white/[0.06] text-gray-400 hover:border-white/10 hover:text-gray-300 transition-colors">
              <img :src="toolIcons[t]" alt="" class="w-4 h-4 rounded-sm grayscale opacity-60" loading="lazy" decoding="async" />
              {{ t }}
            </span>
          </div>

          <a href="https://promptedit.com" target="_blank"
            class="group mt-12 inline-flex items-center gap-2.5 bg-white text-dark-950 font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:scale-[1.03]"
          >
            Try {{ current.label }} tools
            <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
        </div>

        <!-- Right: Visual - bleeds to screen edge -->
        <div class="relative h-[350px] sm:h-[450px] lg:h-[600px]">
          <template v-if="current.video">
            <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover lg:rounded-l-3xl">
              <source :src="current.video" type="video/mp4" />
            </video>
            <div class="absolute inset-0 bg-gradient-to-r from-dark-800/40 to-transparent lg:rounded-l-3xl"></div>
            <div class="absolute bottom-5 left-5 flex items-center gap-2 glass-strong px-3.5 py-2 rounded-full">
              <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span class="text-xs text-white/80 font-semibold">AI Generated &middot; {{ current.tools[0] }}</span>
            </div>
          </template>
          <template v-else>
            <img :src="current.img" alt="" class="absolute inset-0 w-full h-full object-cover lg:rounded-l-3xl" loading="lazy" decoding="async" />
            <div class="absolute inset-0 bg-gradient-to-r from-dark-800/30 to-transparent lg:rounded-l-3xl"></div>
            <div class="absolute bottom-5 left-5 flex items-center gap-2 glass-strong px-3.5 py-2 rounded-full">
              <svg class="w-3.5 h-3.5 text-gold-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              <span class="text-xs text-white/80 font-semibold">Made with PromptEdit</span>
            </div>
          </template>
        </div>
      </div>
    </Transition>

    <!-- Bottom padding -->
    <div class="h-20 lg:h-28"></div>
  </section>
</template>
