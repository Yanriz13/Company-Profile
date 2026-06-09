<template>
  <section class="py-16 md:py-32 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-12 md:mb-20">
        <span class="glass px-4 py-1.5 rounded-full text-xs sm:text-sm text-orange-200 border border-orange-400/20"> TESTIMONIAL </span>

        <h2 class="text-3xl sm:text-5xl lg:text-6xl font-black mt-4 text-white leading-tight">Apa Kata Client</h2>
        <p class="text-xs text-slate-400 mt-2 block md:hidden">← Geser horizontal untuk melihat testimoni →</p>
      </div>

      <!-- Scrollable list for mobile, grid for desktop -->
      <div class="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-none md:grid md:grid-cols-3 md:gap-8 px-4 -mx-4 md:px-0 md:mx-0 pl-6 pr-6">
        <div
          v-for="item in testimonials"
          :key="item.name"
          class="min-w-[280px] md:min-w-0 snap-center glass rounded-3xl p-6 sm:p-8 hover:-translate-y-3 duration-500 border border-white/10 flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center gap-4">
              <img :src="item.image" class="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-white/10" />

              <div>
                <h4 class="font-bold text-sm sm:text-base text-white">
                  {{ item.name }}
                </h4>

                <p class="text-slate-400 text-xs sm:text-sm">
                  {{ item.position }}
                </p>
              </div>
            </div>

            <p class="mt-5 sm:mt-6 text-slate-300 leading-relaxed text-xs sm:text-sm italic">"{{ item.review }}"</p>
          </div>

          <div class="mt-4 text-yellow-400 text-xs sm:text-sm">⭐⭐⭐⭐⭐</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: 'Budi Santoso',
    position: 'CEO Startup',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    review: 'Website yang dibuat sangat profesional dan meningkatkan kepercayaan customer kami.',
  },
  {
    name: 'Andi Wijaya',
    position: 'Owner Restaurant',
    image: 'https://randomuser.me/api/portraits/men/44.jpg',
    review: 'Pelayanan cepat, hasil modern dan sangat responsif di semua perangkat.',
  },
  {
    name: 'Siti Rahma',
    position: 'Marketing Manager',
    image: 'https://randomuser.me/api/portraits/women/28.jpg',
    review: 'Tim iDevelop membantu digitalisasi bisnis kami dari nol hingga launch.',
  },
]
</script>
