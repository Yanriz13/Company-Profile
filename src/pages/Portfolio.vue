<template>
  <MainLayout>
    <!-- Page Header Hero -->
    <section class="relative pt-36 pb-16 md:pt-40 md:pb-20 overflow-hidden hero-grid">
      <div class="noise-overlay"></div>
      <div class="mesh mesh-1"></div>
      <div class="mesh mesh-3"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <span
          class="glass px-4 py-1.5 rounded-full text-xs sm:text-sm inline-block text-orange-200 border border-orange-400/20"
        >
          PORTFOLIO KAMI
        </span>
        <h1 class="mt-4 text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
          Karya Digital Terbaik <br />
          <span class="gradient-text">Yang Telah Kami Bangun</span>
        </h1>
        <p
          class="mt-4 max-w-3xl mx-auto text-sm sm:text-lg lg:text-xl text-slate-300 leading-relaxed"
        >
          Kumpulan studi kasus proyek-proyek sukses yang membantu klien kami mengotomatisasi proses
          bisnis dan berkembang di era digital.
        </p>
      </div>
    </section>

    <!-- Interactive Portfolio Filter Grid -->
    <section class="py-16 md:py-24 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <!-- Filter Tabs -->
        <div class="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 sm:mb-16">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="activeCategory = cat"
            :class="[
              'px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-300 cursor-pointer',
              activeCategory === cat
                ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white border-transparent shadow-lg shadow-orange-500/20'
                : 'glass text-slate-300 border-white/5 hover:border-white/20',
            ]"
          >
            {{ cat }}
          </button>
        </div>

        <p class="text-xs text-slate-400 mt-2 mb-4 text-center block md:hidden">
          ← Geser horizontal untuk melihat portofolio →
        </p>

        <!-- Portfolio Cards Grid (Entire Card is Clickable) -->
        <div
          class="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-none lg:grid lg:grid-cols-3 md:grid-cols-2 lg:gap-8 px-4 -mx-4 lg:px-0 lg:mx-0 pl-6 pr-6"
        >
          <div
            v-for="project in filteredProjects"
            :key="project.title"
            @click="selectedProject = project"
            class="min-w-[285px] md:min-w-0 snap-center group glass rounded-[24px] sm:rounded-[36px] overflow-hidden border border-white/10 hover:border-orange-500/30 hover:-translate-y-2 duration-300 flex flex-col h-full cursor-pointer"
          >
            <div class="overflow-hidden h-48 sm:h-56 relative">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-110 duration-700"
              />
              <span
                class="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-slate-900/80 text-orange-300 backdrop-blur-sm border border-white/10"
              >
                {{ project.category }}
              </span>
            </div>

            <div class="p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <span class="text-[10px] sm:text-xs text-slate-500 block font-semibold mb-1.5"
                  >KLIEN: {{ project.client }}</span
                >
                <h3
                  class="text-lg sm:text-2xl font-bold text-white mb-2 group-hover:text-orange-400 duration-300 leading-snug"
                >
                  {{ project.title }}
                </h3>
                <p
                  class="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3"
                >
                  {{ project.desc }}
                </p>
              </div>

              <div>
                <!-- Tech Tags -->
                <div class="flex flex-wrap gap-1.5 mb-4 sm:mb-6 pt-4 border-t border-white/5">
                  <span
                    v-for="tech in project.tech"
                    :key="tech"
                    class="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] sm:text-[10px] text-slate-400"
                  >
                    {{ tech }}
                  </span>
                </div>

                <span
                  class="font-semibold text-xs sm:text-sm text-orange-400 group-hover:text-pink-400 flex items-center gap-2 duration-300"
                >
                  Lihat Detail Kasus <span>→</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 md:py-24 relative overflow-hidden bg-white/[0.01]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div class="text-center mb-12 md:mb-16">
          <span
            class="glass px-3 py-1.5 rounded-full text-xs text-orange-200 border border-orange-400/20"
          >
            TESTIMONI KLIEN
          </span>
          <h2 class="text-3xl sm:text-4xl font-black mt-4 text-white">Apa Kata Mereka</h2>
          <p class="text-xs text-slate-400 mt-2 block md:hidden">
            ← Geser horizontal untuk melihat testimoni →
          </p>
        </div>

        <div
          class="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-none md:grid md:grid-cols-3 md:gap-8 px-4 -mx-4 md:px-0 md:mx-0 pl-6 pr-6"
        >
          <div
            v-for="item in testimonials"
            :key="item.name"
            class="min-w-[280px] md:min-w-0 snap-center glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-orange-500/20 duration-300 flex flex-col justify-between"
          >
            <div>
              <div class="flex items-center gap-3 sm:gap-4">
                <img
                  :src="item.image"
                  :alt="item.name"
                  class="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-white/10"
                />
                <div>
                  <h4 class="font-bold text-sm sm:text-base text-white">{{ item.name }}</h4>
                  <p class="text-slate-500 text-[10px] sm:text-xs">{{ item.position }}</p>
                </div>
              </div>
              <p class="mt-4 sm:mt-6 text-slate-300 text-xs sm:text-sm leading-relaxed italic">
                "{{ item.review }}"
              </p>
            </div>
            <div class="mt-4 text-yellow-400 text-[10px] sm:text-xs">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 md:py-20 relative overflow-hidden">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div
          class="glass p-8 sm:p-12 lg:p-16 rounded-[28px] sm:rounded-[40px] border border-white/10 relative overflow-hidden text-center"
        >
          <div
            class="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-600/10"
          ></div>
          <div class="relative z-10">
            <h2 class="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Punya Ide Proyek <br />
              <span class="gradient-text">Yang Ingin Diwujudkan?</span>
            </h2>
            <p
              class="mt-4 sm:mt-6 text-xs sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              Konsultasikan sekarang secara gratis. Tim developer dan desainer kami siap membantu
              mewujudkan produk digital impian Anda.
            </p>
            <div class="mt-8 sm:mt-10">
              <button
                @click="triggerConsultation"
                class="px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:scale-105 inline-block duration-300 glow text-sm cursor-pointer font-bold"
              >
                Hubungi Kami Sekarang 🚀
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CASE STUDY POPUP MODAL -->
    <div
      v-if="selectedProject"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
    >
      <!-- Backdrop with blur -->
      <div
        @click="selectedProject = null"
        class="fixed inset-0 bg-slate-950/80 backdrop-blur-xl transition-opacity duration-300"
      ></div>

      <!-- Modal Content Body -->
      <div
        class="relative glass max-w-4xl w-full rounded-[24px] sm:rounded-[36px] border border-white/10 overflow-hidden z-10 shadow-2xl flex flex-col max-h-[85vh] md:max-h-[90vh] duration-300 transform scale-100 animate-fadeIn"
      >
        <!-- Modal Header -->
        <div
          class="p-4 sm:p-6 lg:p-8 flex items-start justify-between border-b border-white/10 shrink-0 gap-4"
        >
          <div>
            <span
              class="px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold bg-orange-500/10 text-orange-600 border border-orange-500/20"
            >
              {{ selectedProject.category }}
            </span>
            <h3
              class="text-lg sm:text-2xl lg:text-3xl font-black text-white mt-1.5 sm:mt-2 leading-snug"
            >
              {{ selectedProject.title }}
            </h3>
          </div>

          <!-- Close Button -->
          <button
            @click="selectedProject = null"
            class="w-10 h-10 rounded-full glass border border-white/10 hover:border-white/20 flex items-center justify-center text-white text-base sm:text-lg hover:rotate-90 duration-300 cursor-pointer focus:outline-none shrink-0"
          >
            ✕
          </button>
        </div>

        <!-- Mobile Tabs (Visible only on Mobile) -->
        <div class="flex border-b border-white/10 md:hidden shrink-0">
          <button
            @click="activeModalTab = 'overview'"
            :class="[
              'flex-1 py-3 text-xs font-bold text-center border-b-2 transition-all duration-300 focus:outline-none',
              activeModalTab === 'overview'
                ? 'border-orange-500 text-orange-400 bg-white/[0.02]'
                : 'border-transparent text-slate-400',
            ]"
          >
            Info & Solusi
          </button>
          <button
            @click="activeModalTab = 'impact'"
            :class="[
              'flex-1 py-3 text-xs font-bold text-center border-b-2 transition-all duration-300 focus:outline-none',
              activeModalTab === 'impact'
                ? 'border-orange-500 text-orange-400 bg-white/[0.02]'
                : 'border-transparent text-slate-400',
            ]"
          >
            Hasil & Dampak
          </button>
        </div>

        <!-- Scrollable Modal Content -->
        <div class="p-4 sm:p-6 lg:p-8 overflow-y-auto space-y-6 sm:space-y-8 flex-1">
          <!-- Large Showcase Image (Compact h-36 on Mobile, full height on Desktop) -->
          <div
            class="relative rounded-xl sm:rounded-[24px] overflow-hidden border border-white/5 shadow-inner"
          >
            <img
              :src="selectedProject.image"
              :alt="selectedProject.title"
              class="w-full h-36 sm:h-64 lg:h-[300px] object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4 sm:p-6"
            >
              <span class="text-[9px] sm:text-xs text-slate-300"
                >Studi Kasus Detail & Integrasi Sistem</span
              >
            </div>
          </div>

          <!-- Two Column Detail Info -->
          <div class="grid md:grid-cols-3 gap-6 sm:gap-8">
            <!-- Left Info (Tantangan & Solusi) -->
            <div class="md:col-span-2 space-y-5 sm:space-y-6">
              <!-- Challenge: Hidden on mobile if Active Tab is 'impact' -->
              <div :class="{ 'hidden md:block': activeModalTab !== 'overview' }">
                <h4 class="text-sm sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <span class="text-orange-400">⚡</span> Tantangan Proyek
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {{ selectedProject.details.challenge }}
                </p>
              </div>

              <!-- Solution: Hidden on mobile if Active Tab is 'impact' -->
              <div :class="{ 'hidden md:block': activeModalTab !== 'overview' }">
                <h4 class="text-sm sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <span class="text-pink-400">💡</span> Solusi iDevelop
                </h4>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {{ selectedProject.details.solution }}
                </p>
              </div>

              <!-- Impacts: Hidden on mobile if Active Tab is 'overview' -->
              <div :class="{ 'hidden md:block': activeModalTab !== 'impact' }">
                <h4 class="text-sm sm:text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <span class="text-purple-400">📈</span> Hasil & Dampak Bisnis
                </h4>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div
                    class="glass p-3 rounded-xl border border-green-500/20 bg-green-500/5 text-center"
                    v-for="impact in selectedProject.details.impacts"
                    :key="impact"
                  >
                    <span class="text-[9px] text-green-400 font-bold block uppercase tracking-wider"
                      >DAMPAK</span
                    >
                    <span class="font-extrabold text-white text-xs sm:text-sm mt-0.5 block">{{
                      impact
                    }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Info (Metadata Card) -->
            <div
              class="glass p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/5 space-y-4 sm:space-y-5 h-fit md:col-span-1"
            >
              <!-- Metadata Fields (Hidden on mobile if tab is 'impact') -->
              <div
                :class="[
                  activeModalTab === 'overview' ? 'space-y-4' : 'hidden md:block md:space-y-4',
                ]"
              >
                <div>
                  <span class="text-[9px] sm:text-xs text-slate-500 block font-semibold"
                    >NAMA KLIEN:</span
                  >
                  <span class="text-white font-bold text-xs sm:text-sm">{{
                    selectedProject.client
                  }}</span>
                </div>

                <div>
                  <span class="text-[9px] sm:text-xs text-slate-500 block font-semibold"
                    >TIM DEVELOPER:</span
                  >
                  <span class="text-white text-xs sm:text-sm">{{
                    selectedProject.details.team
                  }}</span>
                </div>

                <div>
                  <span class="text-[9px] sm:text-xs text-slate-500 block font-semibold"
                    >TANGGAL SELESAI:</span
                  >
                  <span class="text-white text-xs sm:text-sm">{{
                    selectedProject.details.date
                  }}</span>
                </div>

                <div>
                  <span class="text-[9px] sm:text-xs text-slate-500 block font-semibold"
                    >TEKNOLOGI KUNCI:</span
                  >
                  <div class="flex flex-wrap gap-1.5 mt-2">
                    <span
                      v-for="tech in selectedProject.tech"
                      :key="tech"
                      class="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] sm:text-[10px] text-slate-300"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Live Visit Button (Hidden on mobile if tab is 'overview') -->
              <div
                :class="{ 'hidden md:block': activeModalTab !== 'impact' }"
                v-if="selectedProject.link"
              >
                <a
                  :href="selectedProject.link"
                  target="_blank"
                  class="w-full py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 hover:scale-[1.02] active:scale-[0.98] duration-300 text-center font-bold text-xs text-white block shadow-lg shadow-orange-500/10 cursor-pointer"
                >
                  Kunjungi Website Live 🔗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import MainLayout from '../layouts/MainLayout.vue'

const activeCategory = ref('All')
const selectedProject = ref(null)
const activeModalTab = ref('overview')

const categories = ['All', 'Website & Mobile', 'Website']

const triggerConsultation = () => {
  window.dispatchEvent(new CustomEvent('open-consultation'))
}

// Lock body scrolling and reset active tab when modal is opened/closed
watch(selectedProject, (newVal) => {
  if (newVal) {
    activeModalTab.value = 'overview'
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

const projects = [
  {
    title: 'Eka Akurasi Envitama',
    category: 'Website & Mobile',
    client: 'PT. Eka Akurasi Envitama',
    desc: 'Sistem Laporan Pengujian Laboratorium Terintegrasi.',
    image: './public/assets/ekalab.png',
    tech: ['Laravel', 'Vue.js', 'PostgreSQL', 'Docker'],
    details: {
      challenge:
        'PT. Eka Akurasi Envitama memiliki kendala dalam pengelolaan data pengujian laboratorium, termasuk data klien, data sampel, data hasil pengujian, dan data invoice. Selain itu, sistem yang ada saat ini masih menggunakan sistem manual yang memakan waktu dan rentan terhadap kesalahan.',
      solution:
        'iDevelop membangun sistem ERP terpusat dengan dashboard monitoring terintegrasi. Sistem dilengkapi dengan pelacakan GPS armada truk secara real-time, manajemen stok gudang otomatis, dan pembuatan e-invoice otomatis yang memangkas waktu kerja administrasi secara drastis.',
      impacts: ['Efisiensi Waktu +45%', 'Kehilangan Stok 0%', 'Laporan Real-time'],
      date: 'Februari 2020',
      team: '3 Developers, 1 Designer',
    },
    link: 'https://ekalab.co.id/',
  },
  {
    title: 'Bank BPRS BTB',
    category: 'Website',
    client: 'Bank BPRS BTB',
    desc: 'Website resmi Bank BPRS BTB yang menyediakan informasi layanan perbankan, produk pembiayaan, profil perusahaan, berita terkini, serta kemudahan akses informasi bagi nasabah dan calon nasabah.',
    image: './public/assets/fos.png',
    tech: ['Nuxt.js', 'TailwindCSS', 'Node.js', 'MongoDB'],
    details: {
      challenge:
        'Bank BPRS BTB membutuhkan website modern yang mampu meningkatkan kredibilitas perusahaan, mempermudah penyampaian informasi produk dan layanan kepada nasabah, serta menghadirkan pengalaman akses yang cepat, aman, dan responsif di berbagai perangkat.',
      solution:
        'Kami mengembangkan website company profile dan layanan informasi digital menggunakan Nuxt.js yang dioptimalkan untuk performa dan SEO. Sistem dirancang dengan antarmuka yang modern, manajemen konten yang mudah diperbarui, serta struktur yang mendukung akses informasi produk perbankan, berita, dan layanan nasabah secara efektif.',
      impacts: [
        'Peningkatan Visibilitas Digital',
        'Akses Informasi Lebih Cepat',
        'Pengalaman Pengguna Lebih Baik',
      ],
      date: 'Maret 2020',
      team: '2 Developers, 1 UI/UX Designer',
    },
    link: 'https://fos.corebtb.com/',
  },
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') {
    return projects
  }
  return projects.filter((p) => p.category === activeCategory.value)
})

const testimonials = [
  {
    name: 'Budi Santoso',
    position: 'CEO Logistik Sentosa',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    review:
      'Sistem ERP yang dibangun oleh iDevelop membantu kami menghemat biaya operasional hingga 30% dan mendigitalisasi ratusan pengiriman setiap harinya.',
  },
  {
    name: 'Andi Wijaya',
    position: 'Owner Sembako Jaya',
    image: 'https://randomuser.me/api/portraits/men/44.jpg',
    review:
      'Website e-commerce kami berjalan sangat cepat dan mudah dikelola. Penjualan bulanan naik signifikan berkat interface pemesanan yang sederhana.',
  },
  {
    name: 'Siti Rahma',
    position: 'Kepala IT Yayasan Mentari',
    image: 'https://randomuser.me/api/portraits/women/28.jpg',
    review:
      'Aplikasi Smart School buatan tim iDevelop sangat stabil. Guru dan orang tua murid merasa sangat terbantu dalam memantau kegiatan akademik anak.',
  },
]
</script>
