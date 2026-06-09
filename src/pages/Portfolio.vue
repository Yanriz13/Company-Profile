<template>
  <MainLayout>
    <!-- Page Header Hero -->
    <section class="relative pt-40 pb-20 overflow-hidden hero-grid">
      <div class="noise-overlay"></div>
      <div class="mesh mesh-1"></div>
      <div class="mesh mesh-3"></div>
      
      <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <span class="glass px-5 py-2 rounded-full text-sm inline-block text-orange-200 border border-orange-400/20">
          PORTFOLIO KAMI
        </span>
        <h1 class="mt-6 text-5xl lg:text-7xl font-black text-white leading-tight">
          Karya Digital Terbaik <br />
          <span class="gradient-text">Yang Telah Kami Bangun</span>
        </h1>
        <p class="mt-6 max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed">
          Kumpulan studi kasus proyek-proyek sukses yang membantu klien kami mengotomatisasi proses bisnis dan berkembang di era digital.
        </p>
      </div>
    </section>

    <!-- Interactive Portfolio Filter Grid -->
    <section class="py-24 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <!-- Filter Tabs -->
        <div class="flex flex-wrap justify-center gap-4 mb-16">
          <button 
            v-for="cat in categories" 
            :key="cat"
            @click="activeCategory = cat"
            :class="[
              'px-6 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 cursor-pointer',
              activeCategory === cat 
                ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white border-transparent shadow-lg shadow-orange-500/20' 
                : 'glass text-slate-300 border-white/5 hover:border-white/20'
            ]"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Portfolio Cards Grid -->
        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          <div 
            v-for="project in filteredProjects" 
            :key="project.title" 
            class="group glass rounded-[36px] overflow-hidden border border-white/10 hover:border-orange-500/30 hover:-translate-y-3 duration-500 flex flex-col h-full"
          >
            <div class="overflow-hidden h-56 relative">
              <img 
                :src="project.image" 
                :alt="project.title" 
                class="w-full h-full object-cover group-hover:scale-110 duration-700" 
              />
              <span class="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold bg-slate-900/80 text-orange-300 backdrop-blur-sm border border-white/10">
                {{ project.category }}
              </span>
            </div>
            
            <div class="p-8 flex flex-col justify-between flex-1">
              <div>
                <span class="text-xs text-slate-500 block font-semibold mb-2">KLIEN: {{ project.client }}</span>
                <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 duration-300">{{ project.title }}</h3>
                <p class="text-slate-300 text-sm leading-relaxed mb-6">{{ project.desc }}</p>
              </div>

              <div>
                <!-- Tech Tags -->
                <div class="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/5">
                  <span 
                    v-for="tech in project.tech" 
                    :key="tech" 
                    class="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] text-slate-400"
                  >
                    {{ tech }}
                  </span>
                </div>
                
                <button 
                  @click="selectedProject = project"
                  class="font-semibold text-sm text-orange-400 group-hover:text-pink-400 flex items-center gap-2 duration-300 cursor-pointer"
                >
                  Lihat Detail Kasus <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-24 relative overflow-hidden bg-white/[0.01]">
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <span class="glass px-4 py-2 rounded-full text-xs text-orange-200 border border-orange-400/20">
            TESTIMONI KLIEN
          </span>
          <h2 class="text-4xl font-black mt-4 text-white">Apa Kata Mereka</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="item in testimonials" :key="item.name" class="glass rounded-3xl p-8 border border-white/10 hover:border-orange-500/20 duration-300">
            <div class="flex items-center gap-4">
              <img :src="item.image" :alt="item.name" class="w-14 h-14 rounded-full object-cover border-2 border-white/10" />
              <div>
                <h4 class="font-bold text-white">{{ item.name }}</h4>
                <p class="text-slate-500 text-xs">{{ item.position }}</p>
              </div>
            </div>
            <p class="mt-6 text-slate-300 text-sm leading-relaxed italic">"{{ item.review }}"</p>
            <div class="mt-4 text-yellow-400 text-xs">⭐⭐⭐⭐&nbsp;⭐</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 relative overflow-hidden">
      <div class="max-w-5xl mx-auto px-6 relative z-10">
        <div class="glass p-12 lg:p-16 rounded-[40px] border border-white/10 relative overflow-hidden text-center">
          <div class="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-600/10"></div>
          <div class="relative z-10">
            <h2 class="text-4xl lg:text-5xl font-black text-white leading-tight">
              Punya Ide Proyek <br />
              <span class="gradient-text">Yang Ingin Diwujudkan?</span>
            </h2>
            <p class="mt-6 text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Konsultasikan sekarang secara gratis. Tim developer dan desainer kami siap membantu mewujudkan produk digital impian Anda.
            </p>
            <div class="mt-10">
              <router-link 
                to="/contact" 
                class="px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:scale-105 inline-block duration-300 glow"
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
      class="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-6 overflow-y-auto"
    >
      <!-- Backdrop with blur -->
      <div 
        @click="selectedProject = null"
        class="fixed inset-0 bg-slate-950/80 backdrop-blur-xl transition-opacity duration-300"
      ></div>

      <!-- Modal Content Body -->
      <div class="relative glass max-w-4xl w-full rounded-[40px] border border-white/10 overflow-hidden z-10 shadow-2xl flex flex-col max-h-[90vh] duration-300 transform scale-100">
        
        <!-- Modal Header -->
        <div class="p-6 lg:p-8 flex items-center justify-between border-b border-white/10 shrink-0">
          <div>
            <span class="px-3 py-1 rounded-full text-[10px] font-bold bg-orange-500/10 text-orange-300 border border-orange-500/20">
              {{ selectedProject.category }}
            </span>
            <h3 class="text-2xl lg:text-3xl font-black text-white mt-2">{{ selectedProject.title }}</h3>
          </div>
          
          <!-- Close Button -->
          <button 
            @click="selectedProject = null"
            class="w-12 h-12 rounded-full glass border border-white/10 hover:border-white/20 flex items-center justify-center text-white text-xl hover:rotate-90 duration-300 cursor-pointer"
          >
            ✕
          </button>
        </div>

        <!-- Scrollable Modal Content -->
        <div class="p-6 lg:p-8 overflow-y-auto space-y-8 flex-1">
          <!-- Large Showcase Image -->
          <div class="relative rounded-[32px] overflow-hidden border border-white/5 shadow-inner">
            <img 
              :src="selectedProject.image" 
              :alt="selectedProject.title" 
              class="w-full h-64 lg:h-[300px] object-cover" 
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <span class="text-sm text-slate-300">Studi Kasus Detail & Integrasi Sistem</span>
            </div>
          </div>

          <!-- Two Column Detail Info -->
          <div class="grid lg:grid-cols-3 gap-8">
            <!-- Left Info (Tantangan & Solusi) -->
            <div class="lg:col-span-2 space-y-6">
              <div>
                <h4 class="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <span class="text-orange-400">⚡</span> Tantangan Proyek
                </h4>
                <p class="text-sm text-slate-300 leading-relaxed">
                  {{ selectedProject.details.challenge }}
                </p>
              </div>

              <div>
                <h4 class="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <span class="text-pink-400">💡</span> Solusi iDevelop
                </h4>
                <p class="text-sm text-slate-300 leading-relaxed">
                  {{ selectedProject.details.solution }}
                </p>
              </div>

              <div>
                <h4 class="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <span class="text-purple-400">📈</span> Hasil & Dampak Bisnis
                </h4>
                <div class="grid grid-cols-3 gap-4">
                  <div class="glass p-4 rounded-2xl border border-white/5" v-for="impact in selectedProject.details.impacts" :key="impact">
                    <span class="text-[10px] text-slate-500 block">DAMPAK</span>
                    <span class="font-bold text-white text-xs lg:text-sm">{{ impact }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Info (Metadata) -->
            <div class="glass p-6 rounded-3xl border border-white/5 space-y-6 h-fit">
              <div>
                <span class="text-xs text-slate-500 block font-semibold">NAMA KLIEN:</span>
                <span class="text-white font-bold text-sm">{{ selectedProject.client }}</span>
              </div>
              
              <div>
                <span class="text-xs text-slate-500 block font-semibold">TIM DEVELOPER:</span>
                <span class="text-white text-sm">3 Developers, 1 Designer</span>
              </div>

              <div>
                <span class="text-xs text-slate-500 block font-semibold">TANGGAL SELESAI:</span>
                <span class="text-white text-sm">Maret 2026</span>
              </div>

              <div>
                <span class="text-xs text-slate-500 block font-semibold">TEKNOLOGI KUNCI:</span>
                <div class="flex flex-wrap gap-1.5 mt-2">
                  <span 
                    v-for="tech in selectedProject.tech" 
                    :key="tech" 
                    class="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] text-slate-300"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <div class="pt-4">
                <a 
                  href="https://idevelop.id" 
                  target="_blank"
                  class="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 hover:scale-[1.02] active:scale-[0.98] duration-300 text-center font-bold text-xs text-white block shadow-lg shadow-orange-500/10 cursor-pointer"
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
import { ref, computed } from 'vue'
import MainLayout from '../layouts/MainLayout.vue'

const activeCategory = ref('All')
const selectedProject = ref(null)

const categories = ['All', 'Website', 'Mobile Apps', 'Enterprise Systems']

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
      solution: 'Kami membangun platform e-commerce dengan arsitektur Nuxt.js yang dioptimalkan untuk performa tinggi dan SEO. Kami mengintegrasikan Payment Gateway (Midtrans) untuk memproses pembayaran otomatis, dan menyambungkan API ekspedisi pihak ketiga untuk kalkulasi ongkos kirim instan.',
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
      solution: 'Kami membangun dasbor visualisasi data interaktif menggunakan React dan D3.js. Sistem secara otomatis menyaring data mentah dari API cloud dan mengubahnya menjadi grafik tren investasi interaktif, analisis risiko dinamis, dan ekspor laporan otomatis.',
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