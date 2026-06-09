<template>
  <div>
    <Navbar />

    <main>
      <slot />
    </main>

    <Footer />

    <!-- Floating Theme Customizer -->
    <ThemeSettings />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import ThemeSettings from '../components/ThemeSettings.vue'
</script>
