<script setup lang="ts">
const toolIcons: Record<string, string> = {
  'Midjourney': 'https://www.google.com/s2/favicons?domain=midjourney.com&sz=64',
  'DALL-E 3': 'https://www.google.com/s2/favicons?domain=openai.com&sz=64',
  'Ideogram': 'https://www.google.com/s2/favicons?domain=ideogram.ai&sz=64',
  'Flux': 'https://www.google.com/s2/favicons?domain=blackforestlabs.ai&sz=64',
  'Kling AI': 'https://www.google.com/s2/favicons?domain=klingai.com&sz=64',
  'Veo': 'https://www.google.com/s2/favicons?domain=deepmind.google&sz=64',
  'HeyGen': 'https://www.google.com/s2/favicons?domain=heygen.com&sz=64',
  'Seedance': 'https://www.google.com/s2/favicons?domain=seedance.ai&sz=64',
  'ElevenLabs': 'https://www.google.com/s2/favicons?domain=elevenlabs.io&sz=64',
  'Suno': 'https://www.google.com/s2/favicons?domain=suno.com&sz=64',
  'Udio': 'https://www.google.com/s2/favicons?domain=udio.com&sz=64',
  'Grok': 'https://www.google.com/s2/favicons?domain=x.ai&sz=64',
  'DaVinci Resolve': 'https://www.google.com/s2/favicons?domain=blackmagicdesign.com&sz=64',
  'Premiere Pro': 'https://www.google.com/s2/favicons?domain=adobe.com&sz=64',
  'After Effects': 'https://www.google.com/s2/favicons?domain=adobe.com&sz=64',
  'Final Cut Pro': 'https://www.google.com/s2/favicons?domain=apple.com&sz=64',
  'CapCut': 'https://www.google.com/s2/favicons?domain=capcut.com&sz=64',
}

const floatingTools = [
  // Top row
  { name: 'Midjourney', desc: 'Images', pos: 'top-[5%] left-[5%]', size: 'large', anim: 'float', delay: '0s', rotate: '-2deg', type: 'ai' },
  { name: 'ElevenLabs', desc: 'Voice', pos: 'top-[2%] left-[36%]', size: 'large', anim: 'float-delayed', delay: '1s', rotate: '1deg', type: 'ai' },
  { name: 'Kling AI', desc: 'Video', pos: 'top-[4%] right-[6%]', size: 'large', anim: 'float', delay: '0.5s', rotate: '3deg', type: 'ai' },

  // Upper flanks
  { name: 'DALL-E 3', desc: 'Images', pos: 'top-[22%] left-[1%]', size: 'medium', anim: 'float-delayed', delay: '0.3s', rotate: '2deg', type: 'ai' },
  { name: 'Veo', desc: 'Video', pos: 'top-[20%] right-[2%]', size: 'medium', anim: 'float', delay: '0.8s', rotate: '-3deg', type: 'ai' },

  // Lower flanks
  { name: 'Suno', desc: 'Music', pos: 'bottom-[22%] left-[2%]', size: 'medium', anim: 'float', delay: '1.2s', rotate: '-1deg', type: 'ai' },
  { name: 'HeyGen', desc: 'Avatars', pos: 'bottom-[24%] right-[1%]', size: 'medium', anim: 'float-delayed', delay: '0.6s', rotate: '2deg', type: 'ai' },

  // Bottom row - mix AI tools + editor plugins
  { name: 'Ideogram', desc: 'Images', pos: 'bottom-[5%] left-[6%]', size: 'medium', anim: 'float-delayed', delay: '1.5s', rotate: '4deg', type: 'ai' },
  { name: 'Flux', desc: 'Images', pos: 'bottom-[5%] left-[30%]', size: 'medium', anim: 'float-delayed', delay: '1.8s', rotate: '1deg', type: 'ai' },
  { name: 'Seedance', desc: 'Motion', pos: 'bottom-[12%] right-[3%]', size: 'medium', anim: 'float-delayed', delay: '1.3s', rotate: '3deg', type: 'ai' },
  { name: 'Udio', desc: 'Music', pos: 'bottom-[16%] left-[22%]', size: 'medium', anim: 'float', delay: '0.4s', rotate: '1deg', type: 'ai' },
  { name: 'Grok', desc: 'AI Chat', pos: 'bottom-[15%] right-[28%]', size: 'medium', anim: 'float-delayed', delay: '1.1s', rotate: '-2deg', type: 'ai' },
]

function pillClasses(size: string) {
  if (size === 'large') return 'px-5 py-3.5 lg:px-6 lg:py-4 text-sm lg:text-base gap-3'
  if (size === 'medium') return 'px-4 py-3 lg:px-5 lg:py-3.5 text-xs lg:text-sm gap-2.5'
  return 'px-3.5 py-2.5 lg:px-4 lg:py-3 text-xs gap-2'
}
function iconCls(size: string) {
  if (size === 'large') return 'w-7 h-7 lg:w-8 lg:h-8'
  if (size === 'medium') return 'w-5 h-5 lg:w-6 lg:h-6'
  return 'w-4 h-4 lg:w-5 lg:h-5'
}
</script>

<template>
  <section class="relative overflow-hidden" style="background: linear-gradient(to bottom, #07070f 0%, #0e0c1c 50%, #07070f 100%);">

    <!-- Desktop: floating playground with title centered -->
    <div class="hidden lg:block relative h-[560px] max-w-[1200px] mx-auto reveal-scale">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold-500/[0.03] rounded-full blur-[70px] pointer-events-none"></div>
      <div class="absolute top-[30%] left-[15%] w-[250px] h-[250px] bg-accent/[0.03] rounded-full blur-[60px] pointer-events-none"></div>

      <!-- Floating pills -->
      <div
        v-for="(tool, i) in floatingTools" :key="tool.name"
        :class="['absolute z-10', tool.pos]"
        :style="{ animation: `${tool.anim} ${6 + i * 0.4}s ease-in-out infinite`, animationDelay: tool.delay, transform: `rotate(${tool.rotate})` }"
      >
        <div :class="[
          'inline-flex items-center rounded-full font-semibold text-white backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:scale-110 transition-all duration-500 cursor-pointer',
          pillClasses(tool.size),
          tool.type === 'plugin'
            ? 'border border-accent/20 bg-accent/[0.06] hover:border-accent/40 hover:bg-accent/[0.1] hover:shadow-[0_8px_40px_rgba(129,140,248,0.1)]'
            : 'border border-white/10 bg-white/[0.04] hover:border-gold-500/30 hover:bg-white/[0.08] hover:shadow-[0_8px_40px_rgba(245,158,11,0.08)]'
        ]">
          <img :src="toolIcons[tool.name]" :alt="tool.name" :class="['rounded-lg shrink-0', iconCls(tool.size)]" loading="lazy" decoding="async" />
          <span>{{ tool.name }}</span>
          <span class="text-gray-500 text-[11px] font-normal">&middot; {{ tool.desc }}</span>
        </div>
      </div>

      <!-- Centered title -->
      <div class="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <div class="text-center">
          <span class="inline-block text-gold-400 text-xs font-bold tracking-[0.2em] uppercase mb-5">Integrations</span>
          <h2 class="text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
            20+ tools.<br/>
            <span class="font-serif italic font-bold text-gold-400">One credit system.</span>
          </h2>
          <p class="mt-5 text-gray-400 text-lg max-w-md mx-auto leading-relaxed">The best AI models in the world, all in one platform.</p>
        </div>
      </div>
    </div>

    <!-- Mobile fallback -->
    <div class="lg:hidden container-main py-20">
      <div class="text-center mb-12 reveal">
        <span class="inline-block text-gold-400 text-xs font-bold tracking-[0.2em] uppercase mb-5">Integrations</span>
        <h2 class="text-4xl sm:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
          20+ tools.<br/>
          <span class="font-serif italic font-bold text-gold-400">One credit system.</span>
        </h2>
        <p class="mt-5 text-gray-400 text-base max-w-md mx-auto">The best AI models in the world, all in one platform.</p>
      </div>
      <div class="flex flex-wrap justify-center gap-3 reveal-stagger">
        <div v-for="tool in floatingTools" :key="tool.name"
          :class="['inline-flex items-center gap-2.5 px-4 py-3 rounded-full text-sm font-semibold text-white', tool.type === 'plugin' ? 'border border-accent/20 bg-accent/[0.06]' : 'border border-white/10 bg-white/[0.04]']"
        >
          <img :src="toolIcons[tool.name]" :alt="tool.name" class="w-5 h-5 rounded-md shrink-0" loading="lazy" decoding="async" />
          {{ tool.name }}
        </div>
      </div>
    </div>
    <!-- Editor plugins mini section -->
    <div class="container-wide pt-6 lg:pt-8 pb-20 lg:pb-24 reveal">
      <div class="rounded-3xl p-8 lg:p-12" style="background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(129,140,248,0.04) 100%); border: 1px solid rgba(255,255,255,0.06);">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <!-- Left: Text -->
          <div class="shrink-0">
            <span class="text-accent-light text-xs font-bold tracking-[0.15em] uppercase">Editor Plugins</span>
            <h3 class="text-2xl lg:text-3xl font-bold text-white mt-3">AI inside your editor.</h3>
            <p class="text-sm text-gray-400 mt-2 max-w-sm">Generate and add AI content to your timeline without leaving your editing software.</p>
          </div>

          <!-- Right: Editor cards -->
          <div class="flex flex-wrap lg:justify-end gap-3">
            <div v-for="editor in [
              { name: 'DaVinci Resolve', available: true },
              { name: 'Premiere Pro', available: true },
              { name: 'After Effects', available: false },
              { name: 'Final Cut Pro', available: false },
              { name: 'CapCut', available: false },
            ]" :key="editor.name"
              :class="['flex items-center gap-3 px-4 py-3.5 rounded-xl border transition-all duration-300', editor.available ? 'text-white border-white/8 bg-white/[0.03] hover:border-accent/30' : 'border-white/[0.04] bg-white/[0.01] opacity-40']"
            >
              <img :src="toolIcons[editor.name]" alt="" class="w-8 h-8 rounded-lg shrink-0" loading="lazy" decoding="async" />
              <div>
                <p class="text-sm font-semibold text-white">{{ editor.name }}</p>
                <p :class="['text-[11px] mt-0.5', editor.available ? 'text-gray-400' : 'text-gray-600']">{{ editor.available ? 'Available' : 'Coming soon' }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
