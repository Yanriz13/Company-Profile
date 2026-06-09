<template>
  <section id="services" class="relative py-16 md:py-32 overflow-hidden">
    <!-- Background Glow -->
    <div
      class="absolute left-[-200px] top-0 w-[600px] h-[600px] rounded-full bg-orange-500/10 blur-[180px]"
    ></div>

    <div
      class="absolute right-[-200px] bottom-0 w-[600px] h-[600px] rounded-full bg-pink-500/10 blur-[180px]"
    ></div>

    <!-- Orbit -->
    <div
      class="absolute w-[800px] h-[800px] border border-slate-200/50 rounded-full -right-[300px] top-20 animate-spin-slow"
    ></div>

    <div
      class="absolute w-[600px] h-[600px] border border-slate-200/50 rounded-full -left-[250px] bottom-0 animate-spin-reverse"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
      <!-- Header -->
      <div class="text-center mb-12 md:mb-20">
        <span class="glass px-4 py-1.5 rounded-full text-xs sm:text-sm text-orange-600 border border-orange-400/20">
          OUR SERVICES
        </span>

        <h2
          class="mt-4 text-3xl sm:text-5xl lg:text-6xl font-black leading-tight max-w-5xl mx-auto text-white"
        >
          Solusi Digital Lengkap untuk <br />
          <span class="gradient-text"> Bisnis Modern </span>
        </h2>

        <p class="text-slate-300 leading-relaxed max-w-3xl mx-auto mt-4 text-sm sm:text-lg">
          Kami membantu perusahaan, startup dan UMKM membangun website, aplikasi, dashboard, dan sistem digital yang mampu meningkatkan efisiensi, kredibilitas serta pertumbuhan bisnis.
        </p>
        <p class="text-xs text-slate-400 mt-2 block lg:hidden">← Geser horizontal untuk melihat semua layanan →</p>
      </div>

      <!-- Services Grid with Horizontal Scroll on Mobile -->
      <div class="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-none lg:grid lg:grid-cols-3 md:grid-cols-2 lg:gap-8 px-4 -mx-4 md:px-0 md:mx-0 pl-6 pr-6">
        <div
          v-for="(item, index) in services"
          :key="item.title"
          class="min-w-[280px] md:min-w-0 snap-center group relative overflow-hidden rounded-[32px] glass border border-white/10 p-6 sm:p-8 hover:-translate-y-4 hover:border-orange-500/30 duration-500 flex flex-col justify-between"
        >
          <!-- Popular Badge -->
          <div
            v-if="index === 1"
            class="absolute top-5 right-5 px-3 py-1 rounded-full text-[10px] font-bold bg-gradient-to-r from-orange-500 to-pink-500 text-white"
          >
            POPULAR
          </div>

          <!-- Glow -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500">
            <div
              class="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl bg-orange-500/10"
            ></div>

            <div
              class="absolute bottom-0 left-0 w-52 h-52 rounded-full blur-3xl bg-pink-500/10"
            ></div>
          </div>

          <div class="relative z-10 flex flex-col justify-between h-full">
            <div>
              <!-- Number -->
              <div class="text-xs sm:text-sm font-bold text-orange-600 mb-4 sm:mb-5">0{{ index + 1 }}</div>

              <!-- Icon -->
              <div
                class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center text-3xl sm:text-4xl shadow-xl text-white"
              >
                {{ item.icon }}
              </div>

              <!-- Title -->
              <h3 class="text-xl sm:text-2xl font-bold mt-5 sm:mt-6 text-white">
                {{ item.title }}
              </h3>

              <!-- Description -->
              <p class="text-slate-300 leading-relaxed mt-3 text-xs sm:text-sm">
                {{ item.desc }}
              </p>

              <!-- Features -->
              <ul class="mt-6 space-y-2 sm:space-y-3">
                <li
                  v-for="feature in item.features"
                  :key="feature"
                  class="flex items-center gap-2.5 text-xs sm:text-sm"
                >
                  <div
                    class="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 shrink-0"
                  ></div>

                  <span class="text-slate-200">
                    {{ feature }}
                  </span>
                </li>
              </ul>
            </div>

            <!-- CTA -->
            <div>
              <router-link
                to="/services"
                class="mt-6 sm:mt-8 inline-flex items-center gap-2 font-semibold text-xs sm:text-sm text-orange-500 group-hover:text-pink-500 duration-300 cursor-pointer"
              >
                Pelajari Lebih Lanjut

                <span class="group-hover:translate-x-2 duration-300"> → </span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    icon: '🌐',
    title: 'Website Development',
    desc: 'Website profesional yang dirancang untuk meningkatkan kredibilitas, branding dan penjualan bisnis.',
    features: ['Company Profile', 'Landing Page', 'E-Commerce', 'SEO Friendly'],
  },
  {
    icon: '⚙️',
    title: 'Custom System',
    desc: 'Sistem digital yang dibangun sesuai kebutuhan dan proses bisnis perusahaan.',
    features: ['ERP', 'CRM', 'HRIS', 'Inventory System'],
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    desc: 'Aplikasi Android dan iOS modern dengan performa tinggi dan pengalaman pengguna terbaik.',
    features: ['Android', 'iOS', 'Flutter', 'React Native'],
  },
  {
    icon: '📊',
    title: 'Dashboard Analytics',
    desc: 'Monitoring data real-time untuk membantu pengambilan keputusan bisnis yang lebih cepat.',
    features: ['Monitoring', 'Reporting', 'Business Intelligence', 'Data Visualization'],
  },
  {
    icon: '🎨',
    title: 'UI / UX Design',
    desc: 'Desain modern yang meningkatkan pengalaman pengguna dan konversi bisnis.',
    features: ['Wireframe', 'Prototype', 'Design System', 'Figma Design'],
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    desc: 'Deployment, optimasi server dan maintenance infrastruktur cloud perusahaan.',
    features: ['AWS', 'Google Cloud', 'CI/CD', 'Server Management'],
  },
]
</script>
