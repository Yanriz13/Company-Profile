<template>
  <section id="portfolio" class="relative py-32 overflow-hidden">
    <!-- Background Effect -->

    <div
      class="absolute left-[-200px] top-20 w-[600px] h-[600px] rounded-full blur-[180px] bg-orange-500/15"
    ></div>

    <div
      class="absolute right-[-200px] bottom-0 w-[700px] h-[700px] rounded-full blur-[180px] bg-pink-500/15"
    ></div>

    <!-- Orbit -->

    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-white/5 animate-spin-slow"
    ></div>

    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full border border-white/5 animate-spin-reverse"
    ></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- Header -->

      <div class="text-center mb-20">
        <span class="glass px-5 py-2 rounded-full text-sm"> OUR PORTFOLIO </span>

        <h2 class="mt-6 text-5xl lg:text-7xl font-black">
          Project yang

          <span class="gradient-text"> Kami Bangun </span>
        </h2>

        <p class="max-w-3xl mx-auto mt-6 text-lg text-slate-300 leading-8">
          Solusi digital yang membantu bisnis meningkatkan kredibilitas, efisiensi, dan pertumbuhan
          secara signifikan.
        </p>
      </div>

      <!-- Portfolio Grid -->

      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Featured -->

        <div class="lg:col-span-2 lg:row-span-2 group">
          <div class="glass overflow-hidden rounded-[36px] h-full">
            <div class="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600"
                class="w-full h-full object-cover group-hover:scale-110 duration-700"
              />
            </div>

            <div class="p-8">
              <span class="px-4 py-2 rounded-full text-sm bg-orange-500/20 text-orange-300">
                Dashboard Analytics
              </span>

              <h3 class="mt-5 text-3xl font-bold">Enterprise Monitoring System</h3>

              <p class="mt-4 text-slate-300 leading-8">
                Platform monitoring real-time untuk mengelola data operasional, laporan dan analitik
                bisnis.
              </p>
            </div>
          </div>
        </div>

        <!-- Card -->

        <div
          v-for="item in portfolios"
          :key="item.title"
          class="group glass overflow-hidden rounded-[32px] hover:-translate-y-3 duration-500"
        >
          <div class="overflow-hidden">
            <img
              :src="item.image"
              class="h-56 w-full object-cover group-hover:scale-110 duration-700"
            />
          </div>

          <div class="p-6">
            <span class="text-xs px-3 py-1 rounded-full bg-white/10">
              {{ item.category }}
            </span>

            <h4 class="mt-4 text-xl font-bold">
              {{ item.title }}
            </h4>

            <p class="mt-3 text-sm text-slate-400 leading-7">
              {{ item.desc }}
            </p>

            <button class="mt-6 font-semibold text-orange-400 hover:text-pink-400 duration-300">
              View Case Study →
            </button>
          </div>
        </div>
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
