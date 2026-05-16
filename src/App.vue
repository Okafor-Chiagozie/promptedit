<script setup lang="ts">
import NavBar from './components/sections/NavBar.vue'
import HeroSection from './components/sections/HeroSection.vue'
import SocialProof from './components/sections/SocialProof.vue'
import ShowcaseGallery from './components/sections/ShowcaseGallery.vue'
import AIToolsShowcase from './components/sections/AIToolsShowcase.vue'
import Integrations from './components/sections/Integrations.vue'
import HowItWorks from './components/sections/HowItWorks.vue'
import TemplateLibrary from './components/sections/TemplateLibrary.vue'
import Testimonials from './components/sections/Testimonials.vue'
import PriceComparison from './components/sections/PriceComparison.vue'
import PricingSection from './components/sections/PricingSection.vue'
import FAQSection from './components/sections/FAQSection.vue'
import FooterSection from './components/sections/FooterSection.vue'
import { useScrollReveal } from './composables/useScrollReveal'

useScrollReveal()
</script>

<template>
  <div>
    <NavBar />
    <main>
      <HeroSection />
      <SocialProof />
      <ShowcaseGallery />
      <AIToolsShowcase />
      <Integrations />
      <PriceComparison />
      <HowItWorks />
      <TemplateLibrary />
      <Testimonials />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </main>
  </div>
</template>
