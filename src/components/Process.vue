<template>
  <section class="py-32 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-20">
        <span class="px-4 py-2 rounded-full glass text-sm"> HOW WE WORK </span>

        <h2 class="text-6xl font-black mt-6">Proses Pengerjaan</h2>

        <p class="text-slate-400 mt-4 max-w-2xl mx-auto">
          Dari ide hingga produk siap digunakan. Semua proses transparan dan terukur.
        </p>
      </div>

      <div class="grid md:grid-cols-4 gap-8">
        <div
          v-for="step in steps"
          :key="step.id"
          class="glass rounded-3xl p-8 relative group hover:-translate-y-3 duration-500"
        >
          <div
            class="absolute -top-5 left-8 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold"
          >
            {{ step.id }}
          </div>

          <div class="text-6xl mt-8">
            {{ step.icon }}
          </div>

          <h3 class="text-2xl font-bold mt-6">
            {{ step.title }}
          </h3>

          <p class="text-slate-400 mt-4">
            {{ step.description }}
          </p>
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
