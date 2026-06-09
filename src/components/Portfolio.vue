<template>
  <section id="portfolio" class="relative py-16 md:py-32 overflow-hidden">
    <!-- Background Effect -->
    <div
      class="absolute left-[-200px] top-20 w-[600px] h-[600px] rounded-full blur-[180px] bg-orange-500/10"
    ></div>

    <div
      class="absolute right-[-200px] bottom-0 w-[700px] h-[700px] rounded-full blur-[180px] bg-pink-500/10"
    ></div>

    <!-- Orbit -->
    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-slate-200/50 animate-spin-slow"
    ></div>

    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full border border-slate-200/50 animate-spin-reverse"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
      <!-- Header -->
      <div class="text-center mb-12 md:mb-20">
        <span
          class="glass px-4 py-1.5 rounded-full text-xs sm:text-sm text-orange-600 border border-orange-400/20"
        >
          OUR PORTFOLIO
        </span>

        <h2 class="mt-4 text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
          Project yang <br />
          <span class="gradient-text"> Kami Bangun </span>
        </h2>

        <p class="max-w-3xl mx-auto mt-4 text-sm sm:text-lg text-slate-300 leading-relaxed">
          Solusi digital yang membantu bisnis meningkatkan kredibilitas, efisiensi, dan pertumbuhan
          secara signifikan.
        </p>
        <p class="text-xs text-slate-400 mt-2 block lg:hidden">
          ← Geser horizontal untuk melihat semua portofolio →
        </p>
      </div>

      <!-- Portfolio Grid: Horizontal Scroll on Mobile, 2 Columns on Desktop -->
      <div
        class="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-none lg:grid lg:grid-cols-2 lg:gap-8 px-4 -mx-4 lg:px-0 lg:mx-0 pl-6 pr-6"
      >
        <div
          v-for="item in portfolios"
          :key="item.title"
          class="min-w-[85vw] lg:min-w-0 snap-center group glass overflow-hidden rounded-[24px] sm:rounded-[36px] hover:-translate-y-3 duration-500 border border-white/10 flex flex-col justify-between"
        >
          <div class="overflow-hidden h-48 sm:h-72">
            <img
              :src="item.image"
              :alt="item.title"
              class="h-full w-full object-cover group-hover:scale-110 duration-700"
            />
          </div>

          <div class="p-6 sm:p-8 flex-1 flex flex-col justify-between">
            <div>
              <span
                class="text-[10px] px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-600 border border-orange-500/20 font-bold"
              >
                {{ item.category }}
              </span>

              <h4
                class="mt-4 text-xl sm:text-2xl font-bold text-white group-hover:text-orange-400 duration-300 leading-snug"
              >
                {{ item.title }}
              </h4>

              <p class="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {{ item.desc }}
              </p>
            </div>

            <div class="mt-6">
              <router-link
                to="/portfolio"
                class="font-semibold text-xs sm:text-sm text-orange-500 hover:text-pink-500 duration-300 inline-block cursor-pointer"
              >
                View Case Study →
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Projects Button -->
      <div class="text-center mt-12 sm:mt-16">
        <router-link
          to="/portfolio"
          class="px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:scale-105 duration-300 inline-block glow text-xs sm:text-sm"
        >
          Lihat Semua Portofolio 🚀
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
const portfolios = [
  {
    title: 'Eka Akurasi Envitama',
    category: 'Website & Mobile',
    desc: 'Sistem Laporan Pengujian Laboratorium Terintegrasi.',
    image: '/assets/ekalab.png',
  },
  {
    title: 'Bank BPRS BTB',
    category: 'Website',
    desc: 'Website resmi Bank BPRS BTB yang menyediakan informasi layanan perbankan, produk pembiayaan, profil perusahaan, berita terkini, serta kemudahan akses informasi bagi nasabah dan calon nasabah.',
    image: '/assets/fos.png',
  },
]
</script>
