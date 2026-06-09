<template>
  <section class="relative py-32 overflow-hidden">
    <!-- Background Effect -->

    <div class="absolute inset-0">
      <div
        class="absolute left-[-150px] top-10 w-[500px] h-[500px] rounded-full blur-[140px] bg-orange-500/20"
      ></div>

      <div
        class="absolute right-[-200px] bottom-0 w-[600px] h-[600px] rounded-full blur-[180px] bg-pink-500/20"
      ></div>

      <!-- Orbit -->

      <div
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/5 animate-spin-slow"
      ></div>

      <div
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-white/5 animate-spin-reverse"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- Heading -->

      <div class="text-center mb-20">
        <span class="glass px-5 py-2 rounded-full text-sm"> OUR ACHIEVEMENT </span>

        <h2 class="mt-6 text-4xl md:text-5xl font-black">
          Angka yang Membuktikan

          <span class="gradient-text"> Kualitas Kami </span>
        </h2>

        <p class="mt-5 text-slate-300 max-w-2xl mx-auto leading-8">
          Kami telah membantu berbagai perusahaan, UMKM dan startup membangun solusi digital yang
          meningkatkan efisiensi serta pertumbuhan bisnis.
        </p>
      </div>

      <!-- Stats -->

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="item in stats"
          :key="item.title"
          class="glass rounded-[32px] p-8 text-center relative overflow-hidden group hover:-translate-y-3 duration-500"
        >
          <!-- Hover Glow -->

          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500 bg-gradient-to-br from-orange-500/10 via-pink-500/10 to-purple-500/10"
          ></div>

          <div class="relative z-10">
            <div
              class="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center text-4xl shadow-lg"
            >
              {{ item.icon }}
            </div>

            <h3 class="mt-6 text-5xl font-black gradient-text">
              {{ item.value }}
            </h3>

            <p class="mt-3 text-slate-300 font-medium">
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
    value: '150+',
    title: 'Project Selesai',
  },
  {
    icon: '🏢',
    value: '80+',
    title: 'Client Aktif',
  },
  {
    icon: '⭐',
    value: '12+',
    title: 'Tahun Pengalaman',
  },
  {
    icon: '🛠️',
    value: '24/7',
    title: 'Support & Maintenance',
  },
]
</script>
