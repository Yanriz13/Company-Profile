<template>
  <section class="relative py-16 md:py-32 overflow-hidden">
    <!-- Background Effect -->
    <div class="absolute inset-0">
      <div
        class="absolute left-[-150px] top-10 w-[500px] h-[500px] rounded-full blur-[140px] bg-orange-500/10"
      ></div>

      <div
        class="absolute right-[-200px] bottom-0 w-[600px] h-[600px] rounded-full blur-[180px] bg-pink-500/10"
      ></div>

      <!-- Orbit -->
      <div
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-slate-200/50 animate-spin-slow"
      ></div>

      <div
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-slate-200/50 animate-spin-reverse"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
      <!-- Heading -->
      <div class="text-center mb-12 md:mb-20">
        <span
          class="glass px-4 py-1.5 rounded-full text-xs sm:text-sm text-orange-600 border border-orange-400/20"
        >
          OUR ACHIEVEMENT
        </span>

        <h2 class="mt-4 text-3xl sm:text-5xl font-black text-white leading-tight">
          Angka yang Membuktikan <br />
          <span class="gradient-text"> Kualitas Kami </span>
        </h2>

        <p class="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Kami telah membantu berbagai perusahaan, UMKM dan startup membangun solusi digital yang
          meningkatkan efisiensi serta pertumbuhan bisnis.
        </p>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
        <div
          v-for="item in stats"
          :key="item.title"
          class="glass rounded-2xl sm:rounded-[32px] p-5 sm:p-8 text-center relative overflow-hidden group hover:-translate-y-3 duration-500 border border-white/10"
        >
          <!-- Hover Glow -->
          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500 bg-gradient-to-br from-orange-500/5 via-pink-500/5 to-purple-500/5"
          ></div>

          <div class="relative z-10">
            <div
              class="w-12 h-12 sm:w-20 sm:h-20 mx-auto rounded-xl sm:rounded-3xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center text-xl sm:text-4xl shadow-lg"
            >
              {{ item.icon }}
            </div>

            <h3 class="mt-4 sm:mt-6 text-3xl sm:text-5xl font-black gradient-text leading-none">
              {{ item.value }}
            </h3>

            <p class="mt-2 text-xs sm:text-sm text-slate-300 font-medium leading-tight">
              {{ item.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  {
    icon: '🚀',
    value: '10+',
    title: 'Project Selesai',
  },
  {
    icon: '🏢',
    value: '20+',
    title: 'Client Aktif',
  },
  {
    icon: '⭐',
    value: '5+',
    title: 'Tahun Pengalaman',
  },
  {
    icon: '🛠️',
    value: '24/7',
    title: 'Support & Maintenance',
  },
]
</script>
