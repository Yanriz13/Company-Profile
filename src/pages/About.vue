<template>
  <MainLayout>
    <!-- Page Header Hero -->
    <section class="relative pt-40 pb-20 overflow-hidden hero-grid">
      <div class="noise-overlay"></div>
      <div class="mesh mesh-1"></div>
      <div class="mesh mesh-2"></div>

      <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <span
          class="glass px-5 py-2 rounded-full text-sm inline-block text-orange-200 border border-orange-400/20"
        >
          TENTANG KAMI
        </span>
        <h1 class="mt-6 text-5xl lg:text-7xl font-black text-white leading-tight">
          Mengenal Lebih Dekat <br />
          <span class="gradient-text">iDevelop Agency</span>
        </h1>
        <p class="mt-6 max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed">
          Kami adalah tim profesional yang berdedikasi untuk memberikan solusi teknologi inovatif
          dan membantu transformasi digital bisnis Anda.
        </p>
      </div>
    </section>

    <!-- Detailed Story Section -->
    <section class="py-24 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span
              class="glass px-4 py-2 rounded-full text-xs text-orange-200 border border-orange-400/20"
            >
              SEJARAH KAMI
            </span>
            <h2 class="text-4xl lg:text-5xl font-black mt-6 mb-8 text-white">
              Bagaimana Kami <br />
              <span class="gradient-text">Mulai Tumbuh</span>
            </h2>
            <div class="space-y-6 text-slate-300 leading-relaxed">
              <p>
                iDevelop didirikan dengan keyakinan sederhana: bahwa teknologi harus membantu bisnis
                berkembang, bukan menjadi beban. Kami memulai perjalanan sebagai tim kecil
                pengembang web yang bersemangat untuk menciptakan kode yang bersih dan desain yang
                indah.
              </p>
              <p>
                Seiring berjalannya waktu, kami berkembang menjadi agensi digital berskala penuh,
                melayani ratusan klien mulai dari UMKM lokal hingga perusahaan multinasional. Kami
                terus berinvestasi pada keahlian tim kami untuk memastikan kami selalu menggunakan
                teknologi terdepan dalam setiap proyek.
              </p>
              <p>
                Fokus kami tetap sama sejak hari pertama: memberikan hasil berkualitas tinggi,
                menjunjung tinggi komunikasi transparan, dan membangun kemitraan jangka panjang
                dengan setiap klien kami.
              </p>
            </div>
          </div>
          <div class="relative">
            <div class="glass p-3 rounded-[36px] overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200"
                class="rounded-[28px] w-full h-[450px] object-cover"
                alt="iDevelop Team Collaboration"
              />
            </div>
            <div
              class="absolute -bottom-6 -left-6 glass p-6 rounded-3xl border border-orange-500/20 floating"
            >
              <h3 class="text-4xl font-black gradient-text">6+</h3>
              <p class="text-slate-300 text-sm">Tahun Melayani</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="py-24 relative overflow-hidden bg-white/[0.01]">
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <span
            class="glass px-4 py-2 rounded-full text-xs text-orange-200 border border-orange-400/20"
          >
            PERJALANAN KAMI
          </span>
          <h2 class="text-4xl font-black mt-4 text-white">Milestone Penting</h2>
        </div>

        <div class="relative border-l border-white/10 max-w-4xl mx-auto pl-8 space-y-12">
          <div v-for="milestone in milestones" :key="milestone.year" class="relative">
            <!-- Dot -->
            <div
              class="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 border-4 border-slate-950"
            ></div>
            <div
              class="glass p-8 rounded-3xl border border-white/10 hover:border-orange-500/20 duration-300"
            >
              <span class="text-2xl font-black gradient-text">{{ milestone.year }}</span>
              <h4 class="text-xl font-bold text-white mt-2 mb-3">{{ milestone.title }}</h4>
              <p class="text-slate-300 leading-relaxed text-sm">{{ milestone.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision & Mission -->
    <section class="py-24 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <span
            class="glass px-4 py-2 rounded-full text-xs text-orange-200 border border-orange-400/20"
          >
            ARAH & TUJUAN
          </span>
          <h2 class="text-4xl font-black mt-4">Visi & Misi Kami</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div
            class="glass p-10 rounded-[32px] border border-white/10 relative overflow-hidden group hover:border-orange-500/30 duration-300"
          >
            <div
              class="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 duration-500"
            ></div>
            <div
              class="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-2xl mb-6"
            >
              👁️‍🗨️
            </div>
            <h3 class="font-bold text-2xl mb-4 text-white">Visi</h3>
            <p class="text-slate-300 leading-relaxed">
              Menjadi mitra teknologi terdepan dan terpercaya secara global yang menginspirasi
              transformasi bisnis berkelanjutan melalui inovasi digital.
            </p>
          </div>

          <div
            class="glass p-10 rounded-[32px] border border-white/10 relative overflow-hidden group hover:border-pink-500/30 duration-300"
          >
            <div
              class="absolute -top-10 -right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl group-hover:bg-pink-500/20 duration-500"
            ></div>
            <div
              class="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center text-2xl mb-6"
            >
              🎯
            </div>
            <h3 class="font-bold text-2xl mb-4 text-white">Misi</h3>
            <ul class="space-y-4 text-slate-300">
              <li class="flex items-start gap-3">
                <span class="text-pink-500 font-bold">✓</span>
                <span
                  >Menghadirkan solusi digital berkualitas tinggi yang disesuaikan dengan kebutuhan
                  unik klien.</span
                >
              </li>
              <li class="flex items-start gap-3">
                <span class="text-pink-500 font-bold">✓</span>
                <span
                  >Mengoptimalkan proses operasional bisnis klien untuk efisiensi maksimal.</span
                >
              </li>
              <li class="flex items-start gap-3">
                <span class="text-pink-500 font-bold">✓</span>
                <span
                  >Menumbuhkan inovasi berkelanjutan dan pembelajaran teknologi bagi tim internal
                  kami.</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values Section -->
    <section class="py-24 relative overflow-hidden bg-white/[0.01]">
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <span
            class="glass px-4 py-2 rounded-full text-xs text-orange-200 border border-orange-400/20"
          >
            NILAI UTAMA
          </span>
          <h2 class="text-4xl font-black mt-4">Budaya & Nilai Kerja</h2>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            class="glass p-8 rounded-3xl border border-white/5 hover:border-purple-500/20 hover:-translate-y-2 duration-300"
            v-for="val in values"
            :key="val.title"
          >
            <div
              class="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-xl mb-4"
            >
              {{ val.icon }}
            </div>
            <h4 class="font-bold text-lg text-white mb-2">{{ val.title }}</h4>
            <p class="text-sm text-slate-400 leading-relaxed">{{ val.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-24 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <span
            class="glass px-4 py-2 rounded-full text-xs text-orange-200 border border-orange-400/20"
          >
            TIM KAMI
          </span>
          <h2 class="text-4xl font-black mt-4 text-white">Di Balik Layar iDevelop</h2>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="member in team"
            :key="member.name"
            class="glass rounded-[32px] overflow-hidden border border-white/10 group hover:-translate-y-3 duration-500"
          >
            <div class="overflow-hidden h-72">
              <img
                :src="member.image"
                :alt="member.name"
                class="w-full h-full object-cover group-hover:scale-110 duration-700"
              />
            </div>
            <div class="p-6 text-center">
              <h4 class="text-xl font-bold text-white">{{ member.name }}</h4>
              <p class="text-orange-400 text-sm mt-1 mb-4">{{ member.role }}</p>
              <p class="text-slate-400 text-xs leading-relaxed">{{ member.bio }}</p>
              <div class="flex justify-center gap-4 mt-6">
                <a href="#" class="text-slate-500 hover:text-white duration-200">💼 LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue'

const milestones = [
  {
    year: '2020',
    title: 'Didirikan Sebagai Tim Freelance',
    desc: 'iDevelop lahir sebagai tim kecil yang terdiri dari 3 orang pengembang freelance, melayani jasa pembuatan landing page sederhana.',
  },
  {
    year: '2022',
    title: 'Ekspansi Layanan Mobile & Custom App',
    desc: 'Kami mulai mengembangkan sistem kustom yang lebih kompleks dan meluncurkan layanan aplikasi mobile native & cross-platform.',
  },
  {
    year: '2024',
    title: 'Pendirian Badan Hukum Resmi',
    desc: 'iDevelop resmi berbadan hukum sebagai PT iDevelop Solusi Digital untuk melayani klien-klien korporat berskala besar.',
  },
  {
    year: '2026',
    title: 'Fokus pada Inovasi Cloud & Integrasi AI',
    desc: 'Kami mengadopsi teknologi cloud modern dan model kecerdasan buatan untuk mengotomatisasi & mempercepat transformasi digital klien.',
  },
]

const values = [
  {
    icon: '💡',
    title: 'Inovasi',
    desc: 'Kami terus mengeksplorasi teknologi baru untuk memberikan solusi terbaik dan paling modern.',
  },
  {
    icon: '🤝',
    title: 'Kolaborasi',
    desc: 'Bekerja bersama klien sebagai mitra strategis untuk memastikan hasil akhir yang sempurna.',
  },
  {
    icon: '🛡️',
    title: 'Integritas',
    desc: 'Mengedepankan kejujuran, transparansi, dan komitmen penuh dalam setiap kesepakatan.',
  },
  {
    icon: '🏆',
    title: 'Kualitas',
    desc: 'Tidak berkompromi pada performa, keamanan, dan keindahan desain aplikasi yang kami buat.',
  },
]

const team = [
  {
    name: 'Adji Supriyono',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    bio: 'Berpengalaman 8+ tahun memimpin strategi bisnis digital & integrasi sistem.',
  },
  {
    name: 'Yanuar Rizki',
    role: 'Lead UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    bio: 'Menghadirkan desain interface yang modern, bersih, intuitif, dan berorientasi pengguna.',
  },
]
</script>
