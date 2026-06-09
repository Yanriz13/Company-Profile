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
        <span class="glass px-4 py-1.5 rounded-full text-xs sm:text-sm text-orange-600 border border-orange-400/20"> OUR PORTFOLIO </span>

        <h2 class="mt-4 text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
          Project yang <br />
          <span class="gradient-text"> Kami Bangun </span>
        </h2>

        <p class="max-w-3xl mx-auto mt-4 text-sm sm:text-lg text-slate-300 leading-relaxed">
          Solusi digital yang membantu bisnis meningkatkan kredibilitas, efisiensi, dan pertumbuhan secara signifikan.
        </p>
        <p class="text-xs text-slate-400 mt-2 block lg:hidden">← Geser horizontal untuk melihat semua portofolio →</p>
      </div>

      <!-- Portfolio Grid: Horizontal Scroll on Mobile, Balanced Flow Grid on Desktop -->
      <div class="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-none lg:grid lg:grid-cols-3 lg:gap-8 px-4 -mx-4 lg:px-0 lg:mx-0 pl-6 pr-6">
        
        <!-- Featured Card (Spans 2 columns on Desktop, takes 85% screen width on Mobile) -->
        <div class="min-w-[85vw] lg:min-w-0 lg:col-span-2 snap-center group">
          <div class="glass overflow-hidden rounded-[24px] sm:rounded-[36px] h-full border border-white/10 flex flex-col justify-between">
            <div class="overflow-hidden h-48 sm:h-72">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600"
                class="w-full h-full object-cover group-hover:scale-110 duration-700"
              />
            </div>

            <div class="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <span class="px-3 py-1 rounded-full text-xs bg-orange-500/10 text-orange-600 border border-orange-500/20 font-bold">
                  Dashboard Analytics
                </span>

                <h3 class="mt-4 sm:mt-5 text-xl sm:text-3xl font-bold text-white">Enterprise Monitoring System</h3>

                <p class="mt-3 sm:mt-4 text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Platform monitoring real-time untuk mengelola data operasional, laporan dan analitik bisnis secara instan.
                </p>
              </div>

              <div class="mt-5">
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

        <!-- Standard Cards (Scrolls on Mobile, flows into normal columns on Desktop) -->
        <div
          v-for="item in portfolios"
          :key="item.title"
          class="min-w-[280px] lg:min-w-0 snap-center group glass overflow-hidden rounded-[24px] sm:rounded-[32px] hover:-translate-y-3 duration-500 border border-white/10 flex flex-col justify-between"
        >
          <div class="overflow-hidden h-40 sm:h-48">
            <img
              :src="item.image"
              class="h-full w-full object-cover group-hover:scale-110 duration-700"
            />
          </div>

          <div class="p-5 sm:p-6 flex-1 flex flex-col justify-between">
            <div>
              <span class="text-[10px] px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-600 border border-orange-500/20 font-bold">
                {{ item.category }}
              </span>

              <h4 class="mt-3 text-lg sm:text-xl font-bold text-white">
                {{ item.title }}
              </h4>

              <p class="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                {{ item.desc }}
              </p>
            </div>

            <div class="mt-4">
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
    title: 'Corporate Website',
    category: 'Company Profile',
    desc: 'Website profesional untuk meningkatkan branding perusahaan.',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200',
  },
  {
    title: 'ERP System',
    category: 'Enterprise',
    desc: 'Sistem ERP untuk mengelola operasional perusahaan.',
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=1200',
  },
  {
    title: 'Mobile Application',
    category: 'Android & iOS',
    desc: 'Aplikasi mobile dengan performa tinggi dan UI modern.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200',
  },
  {
    title: 'CRM Dashboard',
    category: 'Business System',
    desc: 'Dashboard CRM untuk monitoring sales dan customer.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200',
  },
]
</script>
