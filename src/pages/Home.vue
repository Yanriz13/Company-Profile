<template>
  <MainLayout>
    <Hero />
    <AboutSection />
    <ServicesSection />
    <Stats />
    <PortfolioSection />
    <ContactSection />
  </MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue'
import Hero from '../components/Hero.vue'
import AboutSection from '../components/About.vue'
import ServicesSection from '../components/Services.vue'
import Stats from '../components/Stats.vue'
import PortfolioSection from '../components/Portfolio.vue'
import ContactSection from '../components/Contact.vue'
</script>