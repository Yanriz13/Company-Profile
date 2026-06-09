<template>
  <section class="py-32">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center">
        <span class="glass px-4 py-2 rounded-full"> TESTIMONIAL </span>

        <h2 class="text-6xl font-black mt-6">Apa Kata Client</h2>
      </div>

      <div class="grid md:grid-cols-3 gap-8 mt-20">
        <div
          v-for="item in testimonials"
          :key="item.name"
          class="glass rounded-3xl p-8 hover:-translate-y-3 duration-500"
        >
          <div class="flex items-center gap-4">
            <img :src="item.image" class="w-16 h-16 rounded-full object-cover" />

            <div>
              <h4 class="font-bold">
                {{ item.name }}
              </h4>

              <p class="text-slate-400">
                {{ item.position }}
              </p>
            </div>
          </div>

          <p class="mt-6 text-slate-300 leading-8">"{{ item.review }}"</p>

          <div class="mt-4 text-yellow-400">⭐⭐⭐⭐⭐</div>
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
