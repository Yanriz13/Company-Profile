<template>
  <section id="services" class="relative py-32 overflow-hidden">
    <!-- Background Glow -->
    <div
      class="absolute left-[-200px] top-0 w-[600px] h-[600px] rounded-full bg-orange-500/10 blur-[180px]"
    ></div>

    <div
      class="absolute right-[-200px] bottom-0 w-[600px] h-[600px] rounded-full bg-pink-500/10 blur-[180px]"
    ></div>

    <!-- Orbit -->
    <div
      class="absolute w-[800px] h-[800px] border border-white/5 rounded-full -right-[300px] top-20 animate-spin-slow"
    ></div>

    <div
      class="absolute w-[600px] h-[600px] border border-white/5 rounded-full -left-[250px] bottom-0 animate-spin-reverse"
    ></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- Header -->

      <div class="text-center">
        <span class="glass px-5 py-2 rounded-full text-orange-200 border border-orange-400/20">
          OUR SERVICES
        </span>

        <h2
          class="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight max-w-5xl mx-auto"
        >
          Solusi Digital Lengkap untuk

          <span class="gradient-text"> Bisnis Modern </span>
        </h2>

        <p class="text-slate-300 leading-8 max-w-3xl mx-auto mt-8 text-lg">
          Kami membantu perusahaan, startup dan UMKM membangun website, aplikasi, dashboard, dan
          sistem digital yang mampu meningkatkan efisiensi, kredibilitas serta pertumbuhan bisnis.
        </p>
      </div>

      <!-- Services Grid -->

      <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
        <div
          v-for="(item, index) in services"
          :key="item.title"
          class="group relative overflow-hidden rounded-[36px] glass border border-white/10 p-8 hover:-translate-y-4 hover:border-orange-500/30 duration-500"
        >
          <!-- Popular Badge -->

          <div
            v-if="index === 1"
            class="absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-orange-500 to-pink-500"
          >
            POPULAR
          </div>

          <!-- Glow -->

          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500">
            <div
              class="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl bg-orange-500/20"
            ></div>

            <div
              class="absolute bottom-0 left-0 w-52 h-52 rounded-full blur-3xl bg-pink-500/20"
            ></div>
          </div>

          <div class="relative z-10">
            <!-- Number -->

            <div class="text-sm font-bold text-orange-300 mb-5">0{{ index + 1 }}</div>

            <!-- Icon -->

            <div
              class="w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center text-4xl shadow-xl"
            >
              {{ item.icon }}
            </div>

            <!-- Title -->

            <h3 class="text-2xl font-bold mt-6">
              {{ item.title }}
            </h3>

            <!-- Description -->

            <p class="text-slate-300 leading-7 mt-4">
              {{ item.desc }}
            </p>

            <!-- Features -->

            <ul class="mt-8 space-y-4">
              <li
                v-for="feature in item.features"
                :key="feature"
                class="flex items-center gap-3 text-sm"
              >
                <div
                  class="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-orange-400 to-pink-500"
                ></div>

                <span class="text-slate-200">
                  {{ feature }}
                </span>
              </li>
            </ul>

            <!-- CTA -->

            <button
              class="mt-8 inline-flex items-center gap-2 font-semibold text-orange-300 group-hover:text-pink-300 duration-300"
            >
              Pelajari Lebih Lanjut

              <span class="group-hover:translate-x-2 duration-300"> → </span>
            </button>
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
