<template>
  <section class="py-16 md:py-32 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-12 md:mb-20">
        <span class="px-4 py-1.5 rounded-full glass text-xs sm:text-sm text-orange-200 border border-orange-400/20"> HOW WE WORK </span>

        <h2 class="text-3xl sm:text-5xl lg:text-6xl font-black mt-4 text-white leading-tight">Proses Pengerjaan</h2>

        <p class="text-slate-400 mt-4 max-w-2xl mx-auto text-xs sm:text-sm">
          Dari ide hingga produk siap digunakan. Semua proses transparan dan terukur.
        </p>
        <p class="text-xs text-slate-400 mt-2 block md:hidden">← Geser horizontal untuk melihat proses kerja →</p>
      </div>

      <!-- Scrollable list for mobile, grid for desktop -->
      <div class="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-none md:grid md:grid-cols-4 md:gap-8 px-4 -mx-4 md:px-0 md:mx-0 pl-6 pr-6">
        <div
          v-for="step in steps"
          :key="step.id"
          class="min-w-[240px] md:min-w-0 snap-center glass rounded-3xl p-6 sm:p-8 relative group hover:-translate-y-3 duration-500 border border-white/10 flex flex-col justify-between"
        >
          <div>
            <div
              class="absolute -top-4 left-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center font-bold text-white shadow-md text-sm sm:text-base"
            >
              {{ step.id }}
            </div>

            <div class="text-5xl sm:text-6xl mt-4 sm:mt-6">
              {{ step.icon }}
            </div>

            <h3 class="text-xl sm:text-2xl font-bold mt-4 sm:mt-6 text-white">
              {{ step.title }}
            </h3>

            <p class="text-slate-400 mt-3 text-xs sm:text-sm leading-relaxed">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    id: '01',
    icon: '💡',
    title: 'Diskusi',
    description: 'Analisis kebutuhan bisnis dan tujuan website.',
  },
  {
    id: '02',
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Membuat desain modern dan responsif.',
  },
  {
    id: '03',
    icon: '⚙️',
    title: 'Development',
    description: 'Pengembangan website menggunakan teknologi terbaru.',
  },
  {
    id: '04',
    icon: '🚀',
    title: 'Launch',
    description: 'Deploy ke server dan siap digunakan.',
  },
]
</script>
