<template>
  <MainLayout>
    <!-- Page Header Hero -->
    <section class="relative pt-36 pb-16 md:pt-40 md:pb-20 overflow-hidden hero-grid">
      <div class="noise-overlay"></div>
      <div class="mesh mesh-1"></div>
      <div class="mesh mesh-3"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <span class="glass px-4 py-1.5 rounded-full text-xs sm:text-sm inline-block text-orange-200 border border-orange-400/20">
          PORTFOLIO KAMI
        </span>
        <h1 class="mt-4 text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
          Karya Digital Terbaik <br />
          <span class="gradient-text">Yang Telah Kami Bangun</span>
        </h1>
        <p class="mt-4 max-w-3xl mx-auto text-sm sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
          Kumpulan studi kasus proyek-proyek sukses yang membantu klien kami mengotomatisasi proses bisnis dan berkembang di era digital.
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
                : 'glass text-slate-300 border-white/5 hover:border-white/20'
            ]"
          >
            {{ cat }}
          </button>
        </div>

        <p class="text-xs text-slate-400 mt-2 mb-4 text-center block md:hidden">← Geser horizontal untuk melihat portofolio →</p>

        <!-- Portfolio Cards Grid (Entire Card is Clickable) -->
        <div class="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-none lg:grid lg:grid-cols-3 md:grid-cols-2 lg:gap-8 px-4 -mx-4 lg:px-0 lg:mx-0 pl-6 pr-6">
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
              <span class="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-slate-900/80 text-orange-300 backdrop-blur-sm border border-white/10">
                {{ project.category }}
              </span>
            </div>
            
            <div class="p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <span class="text-[10px] sm:text-xs text-slate-500 block font-semibold mb-1.5">KLIEN: {{ project.client }}</span>
                <h3 class="text-lg sm:text-2xl font-bold text-white mb-2 group-hover:text-orange-400 duration-300 leading-snug">{{ project.title }}</h3>
                <p class="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3">{{ project.desc }}</p>
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
          <span class="glass px-3 py-1.5 rounded-full text-xs text-orange-200 border border-orange-400/20">
            TESTIMONI KLIEN
          </span>
          <h2 class="text-3xl sm:text-4xl font-black mt-4 text-white">Apa Kata Mereka</h2>
          <p class="text-xs text-slate-400 mt-2 block md:hidden">← Geser horizontal untuk melihat testimoni →</p>
        </div>

        <div class="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-none md:grid md:grid-cols-3 md:gap-8 px-4 -mx-4 md:px-0 md:mx-0 pl-6 pr-6">
          <div v-for="item in testimonials" :key="item.name" class="min-w-[280px] md:min-w-0 snap-center glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-orange-500/20 duration-300 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-3 sm:gap-4">
                <img :src="item.image" :alt="item.name" class="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-white/10" />
                <div>
                  <h4 class="font-bold text-sm sm:text-base text-white">{{ item.name }}</h4>
                  <p class="text-slate-500 text-[10px] sm:text-xs">{{ item.position }}</p>
                </div>
              </div>
              <p class="mt-4 sm:mt-6 text-slate-300 text-xs sm:text-sm leading-relaxed italic">"{{ item.review }}"</p>
            </div>
            <div class="mt-4 text-yellow-400 text-[10px] sm:text-xs">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 md:py-20 relative overflow-hidden">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div class="glass p-8 sm:p-12 lg:p-16 rounded-[28px] sm:rounded-[40px] border border-white/10 relative overflow-hidden text-center">
          <div class="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-600/10"></div>
          <div class="relative z-10">
            <h2 class="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Punya Ide Proyek <br />
              <span class="gradient-text">Yang Ingin Diwujudkan?</span>
            </h2>
            <p class="mt-4 sm:mt-6 text-xs sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Konsultasikan sekarang secara gratis. Tim developer dan desainer kami siap membantu mewujudkan produk digital impian Anda.
            </p>
            <div class="mt-8 sm:mt-10">
              <router-link 
                to="/contact" 
                class="px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:scale-105 inline-block duration-300 glow text-sm"
              >
                Hubungi Kami Sekarang 🚀
              </router-link>
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
      <div class="relative glass max-w-4xl w-full rounded-[24px] sm:rounded-[36px] border border-white/10 overflow-hidden z-10 shadow-2xl flex flex-col max-h-[85vh] md:max-h-[90vh] duration-300 transform scale-100 animate-fadeIn">
        
        <!-- Modal Header -->
        <div class="p-4 sm:p-6 lg:p-8 flex items-start justify-between border-b border-white/10 shrink-0 gap-4">
          <div>
            <span class="px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold bg-orange-500/10 text-orange-600 border border-orange-500/20">
              {{ selectedProject.category }}
            </span>
            <h3 class="text-lg sm:text-2xl lg:text-3xl font-black text-white mt-1.5 sm:mt-2 leading-snug">{{ selectedProject.title }}</h3>
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
              activeModalTab === 'overview' ? 'border-orange-500 text-orange-400 bg-white/[0.02]' : 'border-transparent text-slate-400'
            ]"
          >
            Info & Solusi
          </button>
          <button 
            @click="activeModalTab = 'impact'"
            :class="[
              'flex-1 py-3 text-xs font-bold text-center border-b-2 transition-all duration-300 focus:outline-none',
              activeModalTab === 'impact' ? 'border-orange-500 text-orange-400 bg-white/[0.02]' : 'border-transparent text-slate-400'
            ]"
          >
            Hasil & Dampak
          </button>
        </div>

        <!-- Scrollable Modal Content -->
        <div class="p-4 sm:p-6 lg:p-8 overflow-y-auto space-y-6 sm:space-y-8 flex-1">
          
          <!-- Large Showcase Image (Compact h-36 on Mobile, full height on Desktop) -->
          <div class="relative rounded-xl sm:rounded-[24px] overflow-hidden border border-white/5 shadow-inner">
            <img 
              :src="selectedProject.image" 
              :alt="selectedProject.title" 
              class="w-full h-36 sm:h-64 lg:h-[300px] object-cover" 
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4 sm:p-6">
              <span class="text-[9px] sm:text-xs text-slate-300">Studi Kasus Detail & Integrasi Sistem</span>
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
                  <div class="glass p-3 rounded-xl border border-green-500/20 bg-green-500/5 text-center" v-for="impact in selectedProject.details.impacts" :key="impact">
                    <span class="text-[9px] text-green-400 font-bold block uppercase tracking-wider">DAMPAK</span>
                    <span class="font-extrabold text-white text-xs sm:text-sm mt-0.5 block">{{ impact }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Info (Metadata Card) -->
            <div class="glass p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/5 space-y-4 sm:space-y-5 h-fit md:col-span-1">
              
              <!-- Metadata Fields (Hidden on mobile if tab is 'impact') -->
              <div :class="[activeModalTab === 'overview' ? 'space-y-4' : 'hidden md:block md:space-y-4']">
                <div>
                  <span class="text-[9px] sm:text-xs text-slate-500 block font-semibold">NAMA KLIEN:</span>
                  <span class="text-white font-bold text-xs sm:text-sm">{{ selectedProject.client }}</span>
                </div>
                
                <div>
                  <span class="text-[9px] sm:text-xs text-slate-500 block font-semibold">TIM DEVELOPER:</span>
                  <span class="text-white text-xs sm:text-sm">3 Developers, 1 Designer</span>
                </div>

                <div>
                  <span class="text-[9px] sm:text-xs text-slate-500 block font-semibold">TANGGAL SELESAI:</span>
                  <span class="text-white text-xs sm:text-sm">Maret 2026</span>
                </div>

                <div>
                  <span class="text-[9px] sm:text-xs text-slate-500 block font-semibold">TEKNOLOGI KUNCI:</span>
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
              <div :class="{ 'hidden md:block': activeModalTab !== 'impact' }">
                <a 
                  href="https://idevelop.id" 
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

const categories = ['All', 'Website', 'Mobile Apps', 'Enterprise Systems']

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
    title: 'Enterprise ERP System',
    category: 'Enterprise Systems',
    client: 'PT. Global Sentosa Logistik',
    desc: 'Sistem ERP kustom terintegrasi untuk mengotomatisasi logistik, inventaris pergudangan, dan pelacakan armada truk secara real-time.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    tech: ['Laravel', 'Vue.js', 'PostgreSQL', 'Docker'],
    details: {
      challenge: 'PT. Global Sentosa Logistik mengelola ratusan armada pengiriman dan ribuan inventaris gudang secara manual menggunakan spreadsheet terpisah. Hal ini menyebabkan keterlambatan laporan, seringnya kehilangan data status truk, dan sulitnya pelacakan inventaris secara real-time.',
      solution: 'iDevelop membangun sistem ERP terpusat dengan dashboard monitoring terintegrasi. Sistem dilengkapi dengan pelacakan GPS armada truk secara real-time, manajemen stok gudang otomatis, dan pembuatan e-invoice otomatis yang memangkas waktu kerja administrasi secara drastis.',
      impacts: ['Efisiensi Waktu +45%', 'Kehilangan Stok 0%', 'Laporan Real-time']
    }
  },
  {
    title: 'E-Commerce Marketplace',
    category: 'Website',
    client: 'Jaya Sembako Digital',
    desc: 'Platform belanja online grosir dengan integrasi payment gateway otomatis, sistem kupon belanja, dan kalkulasi ongkir real-time.',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800',
    tech: ['Nuxt.js', 'TailwindCSS', 'Node.js', 'MongoDB'],
    details: {
      challenge: 'Jaya Sembako Digital ingin mendigitalisasi toko grosir tradisional mereka agar dapat menjangkau pelanggan di luar kota. Mereka membutuhkan sistem transaksi yang aman, mampu menangani ribuan transaksi harian, dan kalkulasi ongkos kirim berdasarkan berat barang secara otomatis.',
      solution: 'Kami membangun platform e-commerce dengan arsitektur Nuxt.js yang dioptimalkan untuk performa tinggi and SEO. Kami mengintegrasikan Payment Gateway (Midtrans) untuk memproses pembayaran otomatis, dan menyambungkan API ekspedisi pihak ketiga untuk kalkulasi ongkos kirim instan.',
      impacts: ['Omset Naik +150%', 'Transaksi 99.9%', 'Load <1.2 Detik']
    }
  },
  {
    title: 'Smart School Mobile App',
    category: 'Mobile Apps',
    client: 'Yayasan Pendidikan Mentari',
    desc: 'Aplikasi mobile untuk orang tua, guru, dan murid guna memantau nilai akademis, kehadiran, tugas sekolah, dan pembayaran SPP.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
    tech: ['Flutter', 'Firebase', 'RESTful API'],
    details: {
      challenge: 'Yayasan Pendidikan Mentari menghadapi kendala komunikasi antara sekolah dengan orang tua murid mengenai absensi harian siswa, nilai ujian bulanan, dan keterlambatan pembayaran SPP bulanan.',
      solution: 'Kami mengembangkan aplikasi mobile multi-role menggunakan Flutter. Orang tua murid dapat menerima pemberitahuan instan ketika anak mereka absen, melihat buku rapor digital, dan membayar biaya sekolah langsung menggunakan e-wallet atau transfer bank.',
      impacts: ['Kehadiran +95%', 'Efisiensi SPP +60%', 'Notifikasi Real-time']
    }
  },
  {
    title: 'Financial Analytics Dashboard',
    category: 'Enterprise Systems',
    client: 'FinTech Capital Indonesia',
    desc: 'Dashboard interaktif dengan grafik analitik real-time untuk memantau arus kas, performa investasi portofolio, dan prediksi penjualan.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    tech: ['React.js', 'D3.js', 'Python', 'AWS'],
    details: {
      challenge: 'FinTech Capital Indonesia memiliki jutaan baris data transaksi keuangan dari berbagai portofolio investasi mereka, namun kesulitan dalam menganalisis tren performa, profitabilitas harian, dan risiko portofolio secara manual.',
      solution: 'Kami membangun dasbor visualisasi data interaktif menggunakan React and D3.js. Sistem secara otomatis menyaring data mentah dari API cloud dan mengubahnya menjadi grafik tren investasi interaktif, analisis risiko dinamis, dan ekspor laporan otomatis.',
      impacts: ['Analisis Real-time', 'Hemat Waktu Riset +50%', 'AWS Secure Cloud']
    }
  },
  {
    title: 'Hospital Management System',
    category: 'Enterprise Systems',
    client: 'RSUD Medika Sehat',
    desc: 'Sistem informasi manajemen rekam medis elektronik pasien, antrean berobat online, jadwal dokter, dan apotek terintegrasi.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800',
    tech: ['Vue.js', 'Laravel', 'MariaDB', 'Bootstrap'],
    details: {
      challenge: 'RSUD Medika Sehat mengalami penumpukan antrean pasien rawat jalan karena proses registrasi loket fisik yang lama, serta kesulitan pencarian rekam medis kertas pasien yang menumpuk di ruang arsip.',
      solution: 'Kami mengembangkan Sistem Informasi Manajemen Rumah Sakit (SIMRS) berbasis web. Sistem ini mencakup pendaftaran antrean online mandiri untuk pasien melalui WhatsApp bot, modul Rekam Medis Elektronik (RME) yang aman, dan integrasi inventory obat apotek.',
      impacts: ['Antrean Turun 70%', 'Cari RME <3 Detik', 'Integrasi BPJS']
    }
  },
  {
    title: 'Property Booking Platform',
    category: 'Website',
    client: 'CozyStay Villa & Apartment',
    desc: 'Situs web pemesanan dan penyewaan villa eksklusif dengan kalender ketersediaan interaktif, e-invoice, dan chat langsung ke pengelola.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
    tech: ['Vite.js', 'TailwindCSS', 'Express.js', 'PostgreSQL'],
    details: {
      challenge: 'CozyStay Villa & Apartment mengeluhkan seringnya terjadi double-booking kamar villa karena pemesanan manual lewat chat WhatsApp yang bertabrakan dengan platform pemesanan eksternal.',
      solution: 'Kami merancang situs web pemesanan properti mandiri dengan fitur sinkronisasi kalender real-time (iCal). Dilengkapi e-invoice otomatis, integrasi live chat support ke pengelola, dan fitur ulasan terverifikasi bagi penyewa villa.',
      impacts: ['Double-Booking 0%', 'Booking Langsung +80%', 'Invoice Otomatis']
    }
  }
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') {
    return projects
  }
  return projects.filter(p => p.category === activeCategory.value)
})

const testimonials = [
  {
    name: 'Budi Santoso',
    position: 'CEO Logistik Sentosa',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    review: 'Sistem ERP yang dibangun oleh iDevelop membantu kami menghemat biaya operasional hingga 30% dan mendigitalisasi ratusan pengiriman setiap harinya.'
  },
  {
    name: 'Andi Wijaya',
    position: 'Owner Sembako Jaya',
    image: 'https://randomuser.me/api/portraits/men/44.jpg',
    review: 'Website e-commerce kami berjalan sangat cepat dan mudah dikelola. Penjualan bulanan naik signifikan berkat interface pemesanan yang sederhana.'
  },
  {
    name: 'Siti Rahma',
    position: 'Kepala IT Yayasan Mentari',
    image: 'https://randomuser.me/api/portraits/women/28.jpg',
    review: 'Aplikasi Smart School buatan tim iDevelop sangat stabil. Guru dan orang tua murid merasa sangat terbantu dalam memantau kegiatan akademik anak.'
  }
]
</script>