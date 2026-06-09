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
      class="max-w-7xl mx-auto px-6 pt-10 lg:pt-0 grid lg:grid-cols-2 gap-16 xl:gap-24 items-center relative z-10"
    >
      <!-- LEFT -->

      <div>
        <span
          class="glass px-5 py-2 rounded-full inline-flex items-center gap-2 text-orange-200 border border-orange-400/20"
        >
          🚀 Trusted by 100+ Businesses
        </span>

        <h1
          class="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight max-w-2xl text-white"
        >
          Website & Sistem Digital

          <span class="gradient-text"> untuk Bisnis Modern </span>
        </h1>

        <p class="mt-6 max-w-xl text-lg leading-8 text-slate-300">
          Membantu perusahaan meningkatkan kredibilitas, efisiensi operasional, dan penjualan
          melalui website, aplikasi dan sistem digital yang dibangun sesuai kebutuhan bisnis.
        </p>

        <!-- CTA -->

        <div class="mt-10 flex flex-wrap gap-4">
          <router-link
            to="/contact"
            class="px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:scale-105 duration-300 glow inline-block text-center"
          >
            Konsultasi Gratis
          </router-link>

          <router-link
            to="/portfolio"
            class="glass px-8 py-4 rounded-2xl text-slate-200 hover:bg-white/10 hover:border-orange-400/20 duration-300 inline-block text-center"
          >
            Lihat Portfolio
          </router-link>
        </div>

        <!-- Stats -->

        <div class="grid grid-cols-3 gap-4 mt-12 max-w-xl">
          <div>
            <h3 class="text-3xl font-bold">100+</h3>

            <p class="text-slate-500">Project</p>
          </div>

          <div>
            <h3 class="text-3xl font-bold">50+</h3>

            <p class="text-slate-500">Clients</p>
          </div>

          <div>
            <h3 class="text-3xl font-bold">4.9★</h3>

            <p class="text-slate-500">Rating</p>
          </div>
        </div>
      </div>

      <!-- RIGHT -->

      <div class="relative">
        <!-- Main Dashboard -->

        <div class="glass p-3 rounded-[32px] floating shadow-2xl max-w-[650px] mx-auto">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200"
            class="rounded-[24px] w-full object-cover"
          />
        </div>

        <!-- Analytics -->

        <div class="absolute left-0 lg:-left-10 top-12 glass p-5 rounded-3xl floating">
          <div class="text-4xl">📈</div>

          <h4 class="font-bold mt-2">+45%</h4>

          <p class="text-sm text-slate-400">Revenue Growth</p>
        </div>

        <!-- Projects -->

        <div class="absolute right-0 lg:-right-8 bottom-10 glass p-5 rounded-3xl floating">
          <div class="text-4xl">🚀</div>

          <h4 class="font-bold mt-2">100+</h4>

          <p class="text-sm text-slate-400">Project Done</p>
        </div>

        <!-- Client -->

        <div class="absolute right-10 top-[-20px] glass px-5 py-3 rounded-2xl floating">
          ⭐ 4.9 Rating
        </div>
      </div>
    </div>
  </section>
</template>
