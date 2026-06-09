<template>
  <MainLayout>
    <!-- Page Header Hero -->
    <section class="relative pt-36 pb-16 md:pt-40 md:pb-20 overflow-hidden hero-grid">
      <div class="noise-overlay"></div>
      <div class="mesh mesh-3"></div>
      <div class="mesh mesh-4"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <span class="glass px-4 py-1.5 rounded-full text-xs sm:text-sm inline-block text-orange-200 border border-orange-400/20">
          LAYANAN KAMI
        </span>
        <h1 class="mt-4 text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
          Solusi Teknologi Kreatif <br />
          <span class="gradient-text">Untuk Menumbuhkan Bisnis</span>
        </h1>
        <p class="mt-4 max-w-3xl mx-auto text-sm sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
          Kami menyediakan berbagai layanan pengembangan perangkat lunak dan solusi digital dari konsep hingga eksekusi akhir.
        </p>
      </div>
    </section>

    <!-- Detailed Services List -->
    <section class="py-16 md:py-24 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div class="text-center mb-12 md:mb-20">
          <span class="glass px-3 py-1.5 rounded-full text-xs text-orange-200 border border-orange-400/20">
            LAYANAN UTAMA
          </span>
          <h2 class="text-3xl sm:text-4xl font-black mt-4 text-white">Apa Yang Kami Lakukan</h2>
          <p class="text-xs text-slate-400 mt-2 block md:hidden">← Geser horizontal untuk melihat layanan →</p>
        </div>

        <div class="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-none lg:grid lg:grid-cols-3 md:grid-cols-2 lg:gap-8 px-4 -mx-4 lg:px-0 lg:mx-0 pl-6 pr-6">
          <div 
            v-for="service in services" 
            :key="service.title" 
            class="min-w-[285px] md:min-w-0 snap-center glass rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 border border-white/10 hover:border-orange-500/30 group hover:-translate-y-3 duration-500 flex flex-col justify-between"
          >
            <div>
              <div class="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center text-2xl sm:text-3xl shadow-lg">
                {{ service.icon }}
              </div>
              <h3 class="text-xl sm:text-2xl font-bold mt-5 sm:mt-6 text-white">{{ service.title }}</h3>
              <p class="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">{{ service.desc }}</p>
              
              <!-- Features -->
              <ul class="mt-5 space-y-2">
                <li v-for="feat in service.features" :key="feat" class="flex items-center gap-2 text-xs text-slate-300">
                  <span class="text-orange-500">•</span>
                  <span>{{ feat }}</span>
                </li>
              </ul>
            </div>
            
            <!-- Tech Stack Badges -->
            <div class="mt-6 pt-5 border-t border-white/5">
              <span class="text-[10px] text-slate-500 block mb-2 font-semibold">TECH STACK:</span>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="tech in service.tech" :key="tech" class="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] sm:text-[10px] text-slate-400">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Detailed Workflow / Process -->
    <section class="py-16 md:py-24 relative overflow-hidden bg-white/[0.01]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div class="text-center mb-12 md:mb-20">
          <span class="glass px-3 py-1.5 rounded-full text-xs text-orange-200 border border-orange-400/20">
            ALUR KERJA
          </span>
          <h2 class="text-3xl sm:text-4xl font-black mt-4 text-white">Proses Pengerjaan Proyek</h2>
          <p class="text-xs text-slate-400 mt-2 block md:hidden">← Geser horizontal untuk melihat alur kerja →</p>
        </div>

        <div class="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-none lg:grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-8 px-4 -mx-4 lg:px-0 lg:mx-0 pl-6 pr-6">
          <div v-for="(step, idx) in steps" :key="step.title" class="min-w-[240px] lg:min-w-0 snap-center glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 relative hover:-translate-y-2 duration-300 flex flex-col justify-between">
            <div>
              <div class="absolute -top-4 left-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center font-bold text-white shadow-md text-sm sm:text-base">
                {{ idx + 1 }}
              </div>
              <div class="text-4xl sm:text-5xl mt-4 sm:mt-6 mb-3 sm:mb-4">{{ step.icon }}</div>
              <h4 class="text-lg sm:text-xl font-bold text-white mb-2">{{ step.title }}</h4>
              <p class="text-xs text-slate-400 leading-relaxed">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 md:py-24 relative overflow-hidden">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div class="text-center mb-12">
          <span class="glass px-3 py-1.5 rounded-full text-xs text-orange-200 border border-orange-400/20">
            PERTANYAAN UMUM
          </span>
          <h2 class="text-3xl sm:text-4xl font-black mt-4 text-white">Frequently Asked Questions</h2>
        </div>

        <div class="space-y-4">
          <div 
            v-for="(faq, idx) in faqs" 
            :key="idx" 
            class="glass rounded-xl sm:rounded-2xl border border-white/5 overflow-hidden duration-300"
          >
            <button 
              @click="toggleFaq(idx)" 
              class="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-left font-bold text-base sm:text-lg text-white hover:bg-white/[0.02] duration-200 focus:outline-none"
            >
              <span>{{ faq.question }}</span>
              <span class="text-orange-400 text-xl">{{ activeFaq === idx ? '−' : '+' }}</span>
            </button>
            <div 
              v-show="activeFaq === idx" 
              class="px-5 pb-5 sm:px-6 sm:pb-6 text-slate-300 leading-relaxed text-xs sm:text-sm border-t border-white/5 pt-4"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import { ref } from 'vue'
import MainLayout from '../layouts/MainLayout.vue'

const activeFaq = ref(null)

const toggleFaq = (idx) => {
  activeFaq.value = activeFaq.value === idx ? null : idx
}

const services = [
  {
    icon: '🌐',
    title: 'Web Development',
    desc: 'Kami merancang dan membangun website premium yang cepat, aman, dan dioptimalkan untuk SEO untuk memperluas jangkauan online Anda.',
    features: ['Company Profile & Branding', 'Landing Page Konversi Tinggi', 'E-Commerce Custom', 'Optimasi Performa & Kecepatan'],
    tech: ['Vue.js', 'Nuxt.js', 'Laravel', 'TailwindCSS']
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    desc: 'Aplikasi mobile berkinerja tinggi untuk Android dan iOS dengan pengalaman pengguna yang ramah dan integrasi API yang mulus.',
    features: ['Android & iOS Apps', 'Cross-Platform Framework', 'Offline Mode Capability', 'Push Notifications Integration'],
    tech: ['Flutter', 'React Native', 'Firebase', 'Swift/Kotlin']
  },
  {
    icon: '⚙️',
    title: 'Enterprise Custom System',
    desc: 'Solusi sistem informasi yang disesuaikan untuk mengotomatisasi proses bisnis internal dan manajemen data operasional perusahaan.',
    features: ['ERP & CRM Dashboard', 'Sistem Absensi & HRIS', 'Inventory & Asset Management', 'Laporan Keuangan Otomatis'],
    tech: ['Laravel', 'PostgreSQL', 'Docker', 'RESTful API']
  },
  {
    icon: '📊',
    title: 'Dashboard Analytics',
    desc: 'Visualisasikan data bisnis Anda secara real-time untuk mempermudah pengambilan keputusan strategis yang berbasis data.',
    features: ['Interactive Charts & Graphs', 'Data Monitoring Real-time', 'Export PDF & Excel Otomatis', 'Role-based Access Control'],
    tech: ['Vue.js', 'D3.js', 'Node.js', 'Python']
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    desc: 'Desain prototipe interaktif modern dengan fokus penuh pada kegunaan, keindahan visual, dan kenyamanan user experience.',
    features: ['User Research & Persona', 'High-Fidelity Wireframes', 'Interactive Prototypes', 'Complete Design Systems'],
    tech: ['Figma', 'Adobe XD', 'Illustrator', 'Prototyping']
  },
  {
    icon: '☁️',
    title: 'DevOps & Cloud Server',
    desc: 'Manajemen infrastruktur server cloud, deployment otomatis, integrasi database, dan monitoring keamanan sistem tingkat lanjut.',
    features: ['AWS / GCP Configuration', 'CI/CD Pipeline Automation', 'Server Security Hardening', 'Regular Backup System'],
    tech: ['AWS', 'Google Cloud', 'Docker', 'CI/CD']
  }
]

const steps = [
  {
    icon: '💡',
    title: '1. Konsultasi & Diskusi',
    desc: 'Menganalisis kebutuhan bisnis, memetakan tantangan, dan menentukan tujuan utama pengembangan produk digital.'
  },
  {
    icon: '🎨',
    title: '2. Wireframing & Design',
    desc: 'Merancang arsitektur informasi dan interface UI/UX yang modern sebelum mulai masuk to tahap pemrograman.'
  },
  {
    icon: '⚙️',
    title: '3. Agile Development',
    desc: 'Mengkode sistem dengan metodologi gesit (Agile), memungkinkan umpan balik bertahap dan fleksibilitas penyesuaian.'
  },
  {
    icon: '🚀',
    title: '4. Testing & Launch',
    desc: 'Melakukan uji coba QA yang ketat terhadap bug, meluncurkan produk ke server publik, serta memberikan garansi.'
  }
]

const faqs = [
  {
    question: 'Berapa lama proses pembuatan website atau aplikasi?',
    answer: 'Waktu pembuatan bervariasi tergantung pada kompleksitas proyek. Untuk Landing Page biasanya membutuhkan waktu 1-2 minggu, sedangkan sistem custom atau aplikasi mobile ERP dapat memakan waktu 4-12 minggu.'
  },
  {
    question: 'Apakah saya bisa mengajukan custom sistem yang unik?',
    answer: 'Tentu saja. Kami spesialis dalam pengembangan sistem kustom (custom system) seperti ERP, CRM, HRIS, atau sistem dashboard analitis yang dibangun tepat sesuai alur proses bisnis unik perusahaan Anda.'
  },
  {
    question: 'Bagaimana dengan maintenance setelah proyek selesai?',
    answer: 'Kami menyediakan garansi bug-free serta opsi paket support & maintenance bulanan/tahunan untuk memastikan website atau aplikasi Anda selalu berjalan lancar, aman, dan mendapatkan pembaruan berkala.'
  },
  {
    question: 'Apakah desain web yang dibuat responsif di mobile?',
    answer: 'Ya, seluruh produk digital yang kami bangun (baik website, dashboard, maupun aplikasi) dirancang dengan pendekatan mobile-first sehingga tampilannya responsif, cepat, dan bekerja sempurna di semua ukuran layar.'
  }
]
</script>