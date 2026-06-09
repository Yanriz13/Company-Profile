<template>
  <div>
    <Navbar />

    <main>
      <slot />
    </main>

    <Footer />

    <!-- Floating Theme Customizer -->
    <ThemeSettings />

    <!-- Global Consultation Modal -->
    <ConsultationModal :isOpen="isConsultationOpen" @close="isConsultationOpen = false" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import ThemeSettings from '../components/ThemeSettings.vue'
import ConsultationModal from '../components/ConsultationModal.vue'

const isConsultationOpen = ref(false)

const handleOpenConsultation = () => {
  isConsultationOpen.value = true
}

onMounted(() => {
  window.addEventListener('open-consultation', handleOpenConsultation)
})

onUnmounted(() => {
  window.removeEventListener('open-consultation', handleOpenConsultation)
})
</script>
