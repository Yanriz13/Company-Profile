<template>
  <nav class="fixed top-5 left-1/2 -z-0 transform -translate-x-1/2 w-[95%] max-w-7xl z-50">
    <div
      :class="[
        'glass rounded-3xl flex items-center justify-between duration-300 border',
        scrolled ? 'px-5 py-3 backdrop-blur-3xl bg-white/70 shadow-lg shadow-slate-200/40 border-slate-200/50' : 'px-6 py-4 bg-white/30 border-white/40',
      ]"
    >
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-3 group">
        <div
          class="w-11 h-11 rounded-2xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-orange-500/20 group-hover:rotate-12 duration-300"
        >
          iD
        </div>

        <div>
          <h1 class="text-xl font-black text-slate-900 leading-tight">
            i<span class="gradient-text">Develop</span>
          </h1>
          <p class="text-[9px] tracking-wider text-slate-500 font-bold uppercase">Digital Agency</p>
        </div>
      </router-link>

      <!-- Menu (Desktop) -->
      <div class="hidden lg:flex items-center gap-8">
        <router-link to="/" class="nav-link"> {{ $t('navbar.home') }} </router-link>
        <router-link to="/about" class="nav-link"> {{ $t('navbar.about') }} </router-link>
        <router-link to="/services" class="nav-link"> {{ $t('navbar.services') }} </router-link>
        <router-link to="/portfolio" class="nav-link"> {{ $t('navbar.portfolio') }} </router-link>
        <router-link to="/contact" class="nav-link"> {{ $t('navbar.contact') }} </router-link>
      </div>

      <!-- CTA (Desktop) -->
      <div class="hidden lg:block">
        <button
          @click="triggerConsultation"
          class="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-6 py-2.5 rounded-2xl font-semibold hover:scale-105 duration-300 inline-block text-white text-sm shadow-lg shadow-orange-500/15 glow cursor-pointer"
        >
          {{ $t('navbar.cta') }}
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="open = !open" class="lg:hidden text-2xl text-slate-700 focus:outline-none p-1">
        <span v-if="!open">☰</span>
        <span v-else>✕</span>
      </button>
    </div>

    <!-- Mobile Menu Drawer -->
    <transition name="fade">
      <div v-if="open" class="lg:hidden mt-3 glass rounded-[28px] p-6 border border-slate-200/50 shadow-xl bg-white/95 backdrop-blur-2xl">
        <div class="flex flex-col gap-4">
          <router-link to="/" class="nav-link py-2 border-b border-slate-100" @click="open = false"> {{ $t('navbar.home') }} </router-link>
          <router-link to="/about" class="nav-link py-2 border-b border-slate-100" @click="open = false"> {{ $t('navbar.about') }} </router-link>
          <router-link to="/services" class="nav-link py-2 border-b border-slate-100" @click="open = false"> {{ $t('navbar.services') }} </router-link>
          <router-link to="/portfolio" class="nav-link py-2 border-b border-slate-100" @click="open = false"> {{ $t('navbar.portfolio') }} </router-link>
          <router-link to="/contact" class="nav-link py-2" @click="open = false"> {{ $t('navbar.contact') }} </router-link>
          
          <button 
            @click="triggerConsultationMobile" 
            class="mt-4 px-6 py-3 rounded-2xl font-semibold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-center text-white text-sm shadow-md shadow-orange-500/10 cursor-pointer"
          >
            {{ $t('navbar.cta') }} 🚀
          </button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const open = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 40
}

const triggerConsultation = () => {
  window.dispatchEvent(new CustomEvent('open-consultation'))
}

const triggerConsultationMobile = () => {
  open.value = false
  window.dispatchEvent(new CustomEvent('open-consultation'))
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
