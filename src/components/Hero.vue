<template>
  <section class="relative min-h-screen pt-36 lg:pt-40 flex items-center overflow-hidden hero-grid">
    <!-- Noise -->
    <div class="noise-overlay"></div>

    <!-- Light Effect -->
    <div class="light-beam light-1"></div>
    <div class="light-beam light-2"></div>

    <!-- Planet -->
    <div class="planet"></div>

    <!-- Orbit -->
    <div class="orbit orbit-1"></div>
    <div class="orbit orbit-2"></div>

    <!-- Existing Mesh -->
    <div class="mesh mesh-1"></div>

    <div class="mesh mesh-2"></div>

    <div class="mesh mesh-3"></div>

    <div class="mesh mesh-4"></div>

    <!-- Existing Particles -->
    <div class="particles">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- Content -->

    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 pt-10 lg:pt-0 grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-center relative z-10"
    >
      <!-- LEFT -->

      <div class="min-w-0 w-full">
        <span
          class="glass px-5 py-2 rounded-full inline-flex items-center gap-2 text-orange-200 border border-orange-400/20"
        >
          {{ $t('hero.badge') }}
        </span>

        <h1
          class="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight max-w-2xl text-white"
        >
          {{ $t('hero.title') }}

          <span class="gradient-text"> {{ $t('hero.titleHighlight') }} </span>
        </h1>

        <p class="mt-6 max-w-xl text-lg leading-8 text-slate-300">
          {{ $t('hero.subtitle') }}
        </p>

        <!-- CTA -->

        <div class="mt-10 flex flex-wrap gap-4">
          <button
            @click="triggerConsultation"
            class="px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:scale-105 duration-300 glow inline-block text-center cursor-pointer font-bold"
          >
            {{ $t('hero.ctaConsultation') }}
          </button>

          <router-link
            to="/portfolio"
            class="glass px-8 py-4 rounded-2xl text-slate-200 hover:bg-white/10 hover:border-orange-400/20 duration-300 inline-block text-center cursor-pointer"
          >
            {{ $t('hero.ctaPortfolio') }}
          </router-link>
        </div>

        <!-- Stats -->

        <div class="grid grid-cols-3 gap-4 mt-12 max-w-xl">
          <div>
            <h3 class="text-3xl font-bold">100+</h3>

            <p class="text-slate-500">{{ $t('hero.projects') }}</p>
          </div>

          <div>
            <h3 class="text-3xl font-bold">50+</h3>

            <p class="text-slate-500">{{ $t('hero.clients') }}</p>
          </div>

          <div>
            <h3 class="text-3xl font-bold">4.9★</h3>

            <p class="text-slate-500">{{ $t('hero.rating') }}</p>
          </div>
        </div>
      </div>

      <!-- RIGHT -->

      <div class="relative mt-8 lg:mt-0 min-w-0 w-full">
        <!-- Main Dashboard -->

        <div class="glass p-2 sm:p-3 rounded-[24px] sm:rounded-[32px] floating shadow-2xl max-w-[650px] mx-auto border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200"
            class="rounded-[18px] sm:rounded-[24px] w-full object-cover"
          />
        </div>

        <!-- Analytics -->

        <div class="absolute -left-3 sm:-left-10 top-12 glass p-3 sm:p-5 rounded-2xl sm:rounded-3xl floating border border-white/10 scale-75 sm:scale-100 origin-left">
          <div class="text-2xl sm:text-4xl">📈</div>

          <h4 class="font-bold mt-1 sm:mt-2 text-white text-sm sm:text-base">+45%</h4>

          <p class="text-[10px] sm:text-sm text-slate-400">{{ $t('hero.growth') }}</p>
        </div>

        <!-- Projects -->

        <div class="absolute -right-3 sm:-right-8 bottom-10 glass p-3 sm:p-5 rounded-2xl sm:rounded-3xl floating border border-white/10 scale-75 sm:scale-100 origin-right">
          <div class="text-2xl sm:text-4xl">🚀</div>

          <h4 class="font-bold mt-1 sm:mt-2 text-white text-sm sm:text-base">100+</h4>

          <p class="text-[10px] sm:text-sm text-slate-400">{{ $t('hero.projectDone') }}</p>
        </div>

        <!-- Client -->

        <div class="absolute right-4 sm:right-10 top-[-15px] sm:top-[-20px] glass px-3 py-1.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl floating border border-white/10 scale-75 sm:scale-100 origin-right text-[10px] sm:text-sm text-white">
          ⭐ 4.9 {{ $t('hero.rating') }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const triggerConsultation = () => {
  window.dispatchEvent(new CustomEvent('open-consultation'))
}
</script>
