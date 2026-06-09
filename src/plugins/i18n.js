import { ref, computed } from 'vue'

// Supported locales list
export const supportedLocales = [
  { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'en', name: 'English', flag: '🇬🇧' }
]

// Current locale loaded from localStorage or default to 'id'
export const currentLocale = ref(localStorage.getItem('idevelop-locale') || 'id')

// Set language helper
export const setLocale = (lang) => {
  if (supportedLocales.find(l => l.code === lang)) {
    currentLocale.value = lang
    localStorage.setItem('idevelop-locale', lang)
  }
}

// Full Translation Dictionary
export const translations = {
  id: {
    navbar: {
      home: 'Beranda',
      about: 'Tentang',
      services: 'Layanan',
      portfolio: 'Portofolio',
      contact: 'Kontak',
      cta: 'Konsultasi Gratis'
    },
    hero: {
      badge: '🚀 Dipercaya oleh 100+ Bisnis',
      title: 'Website & Sistem Digital',
      titleHighlight: 'untuk Bisnis Modern',
      subtitle: 'Membantu perusahaan meningkatkan kredibilitas, efisiensi operasional, dan penjualan melalui website, aplikasi dan sistem digital yang dibangun sesuai kebutuhan bisnis.',
      ctaConsultation: 'Konsultasi Gratis',
      ctaPortfolio: 'Lihat Portfolio',
      projects: 'Proyek',
      clients: 'Klien',
      rating: 'Rating',
      growth: 'Pertumbuhan Omset',
      projectDone: 'Proyek Selesai'
    },
    about: {
      badge: 'TENTANG KAMI',
      title: 'iDevelop Agency',
      subtitle: 'Kami adalah tim profesional yang berdedikasi untuk memberikan solusi teknologi inovatif dan membantu transformasi digital bisnis Anda.',
      historyBadge: 'SEJARAH KAMI',
      historyTitle: 'Membangun Solusi Digital Sejak Masa Awal',
      historyP1: 'iDevelop didirikan dengan keyakinan sederhana: bahwa teknologi harus membantu bisnis berkembang, bukan menjadi beban. Kami memulai perjalanan sebagai tim kecil pengembang web yang bersemangat untuk menciptakan kode yang bersih dan desain yang indah.',
      historyP2: 'Seiring berjalannya waktu, kami berkembang menjadi agensi digital berskala penuh, melayani ratusan klien mulai dari UMKM lokal hingga perusahaan multinasional. Kami terus berinvestasi pada keahlian tim kami untuk memastikan kami selalu menggunakan teknologi terdepan dalam setiap proyek.',
      historyP3: 'Fokus kami tetap sama sejak hari pertama: memberikan hasil berkualitas tinggi, menjunjung tinggi komunikasi transparan, dan membangun kemitraan jangka panjang dengan setiap klien kami.',
      yearsLabel: 'Tahun Melayani',
      journeyBadge: 'PERJALANAN KAMI',
      journeyTitle: 'Milestone Penting',
      journeySwipe: '← Geser horizontal untuk melihat milestone →',
      visionBadge: 'ARAH & TUJUAN',
      visionTitle: 'Visi & Misi Kami',
      visionSwipe: '← Geser horizontal untuk melihat Visi & Misi →',
      visionCardTitle: 'Visi',
      visionCardDesc: 'Menjadi mitra teknologi terdepan dan terpercaya secara global yang menginspirasi transformasi bisnis berkelanjutan melalui inovasi digital.',
      missionCardTitle: 'Misi',
      mission1: 'Menghadirkan solusi digital berkualitas tinggi yang disesuaikan dengan kebutuhan unik klien.',
      mission2: 'Mengoptimalkan proses operasional bisnis klien untuk efisiensi maksimal.',
      mission3: 'Menumbuhkan inovasi berkelanjutan dan pembelajaran teknologi bagi tim internal kami.',
      valuesBadge: 'NILAI UTAMA',
      valuesTitle: 'Budaya & Nilai Kerja',
      valuesSwipe: '← Geser horizontal untuk melihat nilai →',
      teamBadge: 'TIM KAMI',
      teamTitle: 'Di Balik Layar iDevelop',
      teamSwipe: '← Geser horizontal untuk melihat tim kami →'
    },
    servicesPage: {
      badge: 'LAYANAN KAMI',
      title: 'Solusi Teknologi Kreatif',
      titleHighlight: 'Untuk Menumbuhkan Bisnis',
      subtitle: 'Kami menyediakan berbagai layanan pengembangan perangkat lunak dan solusi digital dari konsep hingga eksekusi akhir.',
      mainServicesBadge: 'LAYANAN UTAMA',
      mainServicesTitle: 'Apa Yang Kami Lakukan',
      servicesSwipe: '← Geser horizontal untuk melihat layanan →',
      workflowBadge: 'ALUR KERJA',
      workflowTitle: 'Proses Pengerjaan Proyek',
      workflowSwipe: '← Geser horizontal untuk melihat alur kerja →',
      faqBadge: 'PERTANYAAN UMUM',
      faqTitle: 'Frequently Asked Questions'
    },
    portfolioPage: {
      badge: 'PORTOFOLIO',
      title: 'Karya Digital Kami',
      subtitle: 'Jelajahi proyek-proyek terbaru kami yang menggabungkan keindahan desain, kebersihan kode, dan performa tinggi.',
      all: 'Semua',
      web: 'Website',
      mobile: 'Aplikasi Mobile',
      details: 'Detail Proyek',
      techStack: 'Tech Stack',
      visitSite: 'Kunjungi Situs 🔗',
      challenge: 'Tantangan',
      solution: 'Solusi',
      impact: 'Dampak & Hasil',
      projectInfo: 'Informasi Proyek',
      releaseDate: 'Tanggal Rilis',
      clientTeam: 'Tim Pengembang',
      close: 'Tutup',
      ctaTitle: 'Tertarik Membuat Proyek Seperti Ini?',
      ctaSub: 'Diskusikan ide luar biasa Anda bersama tim ahli kami sekarang dan wujudkan produk digital impian Anda.',
      ctaButton: 'Mulai Konsultasi Gratis 🚀'
    },
    contact: {
      badge: 'KONTAK KAMI',
      title: 'Mari Bangun',
      titleHighlight: 'Proyek Digital',
      titleEnd: 'Anda',
      subtitle: 'Konsultasikan kebutuhan website, aplikasi mobile, dashboard monitoring, ERP maupun sistem informasi perusahaan Anda.',
      formTitle: 'Kirim Pesan',
      formSub: 'Isi formulir konsultasi di bawah ini, kami akan merespons dalam waktu 1x24 jam.',
      labelName: 'Nama Lengkap *',
      labelEmail: 'Alamat Email *',
      labelCompany: 'Nama Perusahaan',
      labelPhone: 'Nomor WhatsApp *',
      labelSubject: 'Subjek Diskusi *',
      labelMessage: 'Deskripsi Singkat Kebutuhan *',
      placeholderName: 'Contoh: John Doe',
      placeholderEmail: 'Contoh: john@example.com',
      placeholderCompany: 'Contoh: PT. Maju Bersama',
      placeholderPhone: 'Contoh: 081234567890',
      placeholderMessage: 'Ceritakan gambaran sistem atau website yang ingin Anda bangun...',
      btnSubmit: 'Kirim Form Konsultasi 🚀',
      btnSubmitting: 'Mengirim...',
      successTitle: 'Pesan Terkirim!',
      successDesc: 'Terima kasih {name}. Pesan Anda telah diterima oleh tim iDevelop. Kami akan menghubungi Anda kembali melalui WhatsApp/Email dalam waktu kurang dari 24 jam.',
      btnNewMessage: 'Kirim Pesan Baru',
      addressCardTitle: 'Alamat Kantor',
      addressCardDetail: 'Gedung iDevelop, Lantai 4, Jakarta, Indonesia',
      addressCardHour: 'Senin - Jumat: 09.00 - 18.00 WIB',
      emailCardTitle: 'Email Bisnis',
      phoneCardTitle: 'WhatsApp',
      phoneCardHour: 'Respon Cepat (Jam Kerja)',
      ctaTitle2: 'Butuh Cepat?',
      ctaSub2: 'Hubungi kami langsung melalui WhatsApp untuk konsultasi instan.',
      ctaBtn2: 'Chat WhatsApp 💬',
      mobileSwipeNotice: '← Geser horizontal untuk info kontak lainnya →'
    },
    consultationModal: {
      title: 'Konsultasi Gratis',
      sub: 'Isi data berikut untuk terhubung langsung dengan Developer kami melalui WhatsApp.',
      labelName: 'Nama Lengkap',
      labelEmail: 'Alamat Email',
      labelPhone: 'Nomor WhatsApp',
      labelProject: 'Nama Project / Perusahaan',
      labelDesc: 'Deskripsi Singkat Kebutuhan',
      placeholderName: 'Nama Anda',
      placeholderEmail: 'Email Anda',
      placeholderPhone: 'Nomor WA Aktif',
      placeholderProject: 'Nama Toko / PT / Instansi',
      placeholderDesc: 'Deskripsi Kebutuhan Anda...',
      btnSubmit: 'Kirim & Hubungkan ke WA 💬'
    },
    themeSettings: {
      customizer: 'Customizer',
      close: '✕ Close',
      themeMode: 'Theme Mode',
      light: 'Light',
      dark: 'Dark',
      gradientAccents: 'Gradient Accents',
      autoSaved: 'iDevelop Customizer • Saved Automatically 🚀',
      tipsTitle: '🎨 Tips Tampilan',
      tipsText: 'Halo! Jika tampilan web ini dirasa <strong>terlalu terang</strong> atau Anda kurang menyukai warnanya, Anda dapat mengubah tema ke <strong>Mode Gelap (Dark Mode)</strong> atau memilih <strong>kombinasi gradien warna</strong> kesukaan Anda melalui tombol roda gigi di bawah ini.',
      tipsBtn: 'Siap, Paham! 👍',
      language: 'Pilihan Bahasa'
    },
    footer: {
      slogan: 'Membangun solusi digital berkualitas tinggi untuk transformasi bisnis modern Anda.',
      services: 'Layanan',
      company: 'Perusahaan',
      contact: 'Hubungi Kami',
      about: 'Tentang Kami',
      portfolio: 'Portofolio',
      rights: 'Hak Cipta Terpelihara.'
    },
    whyUs: {
      badge: 'MENGAPA KAMI',
      title: 'Kelebihan iDevelop',
      subtitle: 'Kami berkomitmen untuk memberikan hasil kerja terbaik yang membantu meningkatkan performa dan kredibilitas bisnis Anda.'
    },
    testimonials: {
      badge: 'TESTIMONI',
      title: 'Apa Kata Klien Kami',
      subtitle: 'Kisah sukses kemitraan iDevelop dalam mewujudkan solusi digital untuk berbagai bisnis.'
    },
    stats: {
      projects: 'Proyek Sukses',
      clients: 'Klien Puas',
      rating: 'Rating Kepuasan',
      badge: 'STATISTIK KAMI',
      title: 'iDevelop Dalam Angka',
      subtitle: 'Rekam jejak kami dalam membangun produk teknologi berkualitas tinggi.'
    }
  },
  en: {
    navbar: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact',
      cta: 'Free Consultation'
    },
    hero: {
      badge: '🚀 Trusted by 100+ Businesses',
      title: 'Websites & Digital Systems',
      titleHighlight: 'for Modern Business',
      subtitle: 'Helping companies increase credibility, operational efficiency, and sales through websites, apps, and digital systems built according to business needs.',
      ctaConsultation: 'Free Consultation',
      ctaPortfolio: 'View Portfolio',
      projects: 'Projects',
      clients: 'Clients',
      rating: 'Rating',
      growth: 'Revenue Growth',
      projectDone: 'Projects Done'
    },
    about: {
      badge: 'ABOUT US',
      title: 'iDevelop Agency',
      subtitle: 'We are a dedicated team of professionals providing innovative technology solutions to help your business digital transformation.',
      historyBadge: 'OUR HISTORY',
      historyTitle: 'Building Digital Solutions Since the Early Days',
      historyP1: 'iDevelop was founded on a simple belief: that technology should help businesses grow, not be a burden. We started our journey as a small team of web developers passionate about creating clean code and beautiful design.',
      historyP2: 'Over time, we grew into a full-scale digital agency, serving hundreds of clients from local MSMEs to multinational companies. We continue to invest in our team\'s skills to ensure we always use state-of-the-art technology in every project.',
      historyP3: 'Our focus remains the same since day one: delivering high-quality results, upholding transparent communication, and building long-term partnerships with each of our clients.',
      yearsLabel: 'Years Serving',
      journeyBadge: 'OUR JOURNEY',
      journeyTitle: 'Key Milestones',
      journeySwipe: '← Swipe horizontally to view milestones →',
      visionBadge: 'VISION & MISSION',
      visionTitle: 'Our Vision & Mission',
      visionSwipe: '← Swipe horizontally to view Vision & Mission →',
      visionCardTitle: 'Vision',
      visionCardDesc: 'To be the leading and trusted global technology partner inspiring sustainable business transformation through digital innovation.',
      missionCardTitle: 'Mission',
      mission1: 'Deliver high-quality digital solutions tailored to the unique needs of clients.',
      mission2: 'Optimize clients\' business operational processes for maximum efficiency.',
      mission3: 'Foster continuous innovation and technology learning for our internal team.'
    },
    servicesPage: {
      badge: 'OUR SERVICES',
      title: 'Creative Tech Solutions',
      titleHighlight: 'To Grow Businesses',
      subtitle: 'We provide various software development and digital solution services from concept to final execution.',
      mainServicesBadge: 'MAIN SERVICES',
      mainServicesTitle: 'What We Do',
      servicesSwipe: '← Swipe horizontally to view services →',
      workflowBadge: 'WORKFLOW',
      workflowTitle: 'Project Execution Process',
      workflowSwipe: '← Swipe horizontally to view workflow →',
      faqBadge: 'COMMON QUESTIONS',
      faqTitle: 'Frequently Asked Questions'
    },
    portfolioPage: {
      badge: 'PORTFOLIO',
      title: 'Our Digital Works',
      subtitle: 'Explore our latest projects combining beautiful designs, clean code, and high performance.',
      all: 'All',
      web: 'Websites',
      mobile: 'Mobile Apps',
      details: 'Project Details',
      techStack: 'Tech Stack',
      visitSite: 'Visit Site 🔗',
      challenge: 'Challenge',
      solution: 'Solution',
      impact: 'Impacts & Results',
      projectInfo: 'Project Info',
      releaseDate: 'Release Date',
      clientTeam: 'Developer Team',
      close: 'Close',
      ctaTitle: 'Interested in Creating a Project Like This?',
      ctaSub: 'Discuss your amazing ideas with our expert team now and manifest your dream digital product.',
      ctaButton: 'Start Free Consultation 🚀'
    },
    contact: {
      badge: 'CONTACT US',
      title: 'Let\'s Build Your',
      titleHighlight: 'Digital Project',
      titleEnd: 'Together',
      subtitle: 'Consult your needs for website, mobile applications, dashboard monitoring, ERP or enterprise information systems.',
      formTitle: 'Send Message',
      formSub: 'Fill in the consultation form below, we will respond within 1x24 hours.',
      labelName: 'Full Name *',
      labelEmail: 'Email Address *',
      labelCompany: 'Company Name',
      labelPhone: 'WhatsApp Number *',
      labelSubject: 'Discussion Subject *',
      labelMessage: 'Brief Description of Needs *',
      placeholderName: 'Example: John Doe',
      placeholderEmail: 'Example: john@example.com',
      placeholderCompany: 'Example: PT. Maju Bersama',
      placeholderPhone: 'Example: 081234567890',
      placeholderMessage: 'Tell us about the system or website you want to build...',
      btnSubmit: 'Send Consultation Form 🚀',
      btnSubmitting: 'Sending...',
      successTitle: 'Message Sent!',
      successDesc: 'Thank you {name}. Your message has been received by the iDevelop team. We will contact you back via WhatsApp/Email in less than 24 hours.',
      btnNewMessage: 'Send New Message',
      addressCardTitle: 'Office Address',
      addressCardDetail: 'iDevelop Building, 4th Floor, Jakarta, Indonesia',
      addressCardHour: 'Monday - Friday: 09:00 - 18:00 WIB',
      emailCardTitle: 'Business Email',
      phoneCardTitle: 'WhatsApp',
      phoneCardHour: 'Fast Response (Business Hours)',
      ctaTitle2: 'Need it Fast?',
      ctaSub2: 'Contact us directly via WhatsApp for instant consultation.',
      ctaBtn2: 'Chat WhatsApp 💬',
      mobileSwipeNotice: '← Swipe horizontally for more contact info →'
    },
    consultationModal: {
      title: 'Free Consultation',
      sub: 'Fill in the following details to connect directly with our Developer via WhatsApp.',
      labelName: 'Full Name',
      labelEmail: 'Email Address',
      labelPhone: 'WhatsApp Number',
      labelProject: 'Project / Company Name',
      labelDesc: 'Brief Description of Needs',
      placeholderName: 'Your Name',
      placeholderEmail: 'Your Email',
      placeholderPhone: 'Active WA Number',
      placeholderProject: 'Shop / PT / Institution Name',
      placeholderDesc: 'Description of Your Needs...',
      btnSubmit: 'Send & Connect to WA 💬'
    },
    themeSettings: {
      customizer: 'Customizer',
      close: '✕ Close',
      themeMode: 'Theme Mode',
      light: 'Light',
      dark: 'Dark',
      gradientAccents: 'Gradient Accents',
      autoSaved: 'iDevelop Customizer • Saved Automatically 🚀',
      tipsTitle: '🎨 Display Tips',
      tipsText: 'Hello! If this web display feels <strong>too bright</strong> or you dislike the color, you can change the theme to <strong>Dark Mode</strong> or choose your favorite <strong>color gradient accent</strong> via the settings button below.',
      tipsBtn: 'Got it! 👍',
      language: 'Language Selection'
    },
    footer: {
      slogan: 'Building high-quality digital solutions for your modern business transformation.',
      services: 'Services',
      company: 'Company',
      contact: 'Contact Us',
      about: 'About Us',
      portfolio: 'Portfolio',
      rights: 'All Rights Reserved.'
    },
    whyUs: {
      badge: 'WHY US',
      title: 'iDevelop Advantages',
      subtitle: 'We are committed to delivering the best work that helps improve your business performance and credibility.'
    },
    testimonials: {
      badge: 'TESTIMONIALS',
      title: 'What Our Clients Say',
      subtitle: 'Success stories of iDevelop partnerships in realizing digital solutions for various businesses.'
    },
    stats: {
      projects: 'Successful Projects',
      clients: 'Satisfied Clients',
      rating: 'Satisfaction Rating',
      badge: 'OUR STATS',
      title: 'iDevelop in Numbers',
      subtitle: 'Our track record in building high-quality technology products.'
    }
  }
}

// Global Translate Function
export function t(key, replaceParams = {}) {
  const keys = key.split('.')
  let val = translations[currentLocale.value]
  for (const k of keys) {
    if (val && val[k] !== undefined) {
      val = val[k]
    } else {
      // Fallback to English
      let fallbackVal = translations['en']
      for (const fk of keys) {
        if (fallbackVal && fallbackVal[fk] !== undefined) {
          fallbackVal = fallbackVal[fk]
        } else {
          fallbackVal = null
          break
        }
      }
      val = fallbackVal || key
      break
    }
  }
  
  if (typeof val === 'string') {
    // Parameter replacement (e.g. {name})
    Object.keys(replaceParams).forEach(param => {
      val = val.replace(`{${param}}`, replaceParams[param])
    })
  }
  
  return val
}

export function useI18n() {
  return {
    locale: currentLocale,
    setLocale,
    supportedLocales,
    t
  }
}

// Vue Plugin Definition
export default {
  install(app) {
    app.config.globalProperties.$t = t
    app.config.globalProperties.$locale = currentLocale
  }
}
