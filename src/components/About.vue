<template>
  <section id="about" class="relative py-20 md:py-28 overflow-hidden">
    <!-- Background Effect -->
    <div class="about-planet"></div>
    <div class="about-orbit orbit-a"></div>
    <div class="about-orbit orbit-b"></div>

    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-20">
      <div class="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-center">
        <!-- IMAGE COLUMN (Order 2 on mobile, 1 on desktop) -->
        <div class="relative order-2 lg:order-1 mt-8 lg:mt-0 min-w-0 w-full">
          <div
            class="glass p-2 sm:p-3 rounded-[24px] sm:rounded-[36px] overflow-hidden border border-white/10"
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200"
              class="rounded-[18px] sm:rounded-[28px] w-full h-[260px] sm:h-[400px] lg:h-[550px] object-cover"
            />
          </div>

          <!-- Experience -->
          <div
            class="absolute -left-2 top-6 glass p-2.5 sm:p-3 rounded-xl sm:rounded-2xl floating border border-orange-500/20 scale-75 sm:scale-100 origin-left"
          >
            <h3 class="text-2xl sm:text-3xl font-black gradient-text leading-none">5+</h3>
            <p class="text-slate-300 text-[9px] sm:text-sm mt-0.5">Tahun Pengalaman</p>
          </div>

          <!-- Client -->
          <div
            class="absolute -right-2 bottom-6 glass p-2.5 sm:p-3 rounded-xl sm:rounded-2xl floating border border-pink-500/20 scale-75 sm:scale-100 origin-right"
          >
            <h3 class="text-2xl sm:text-3xl font-black gradient-text leading-none">50+</h3>
            <p class="text-slate-300 text-[9px] sm:text-sm mt-0.5">Active Clients</p>
          </div>
        </div>

        <!-- TEXT COLUMN (Order 1 on mobile, 2 on desktop) -->
        <div class="order-1 lg:order-2 min-w-0 w-full">
          <span
            class="glass px-4 py-1.5 rounded-full text-xs sm:text-sm text-orange-200 border border-orange-400/20"
          >
            ABOUT IDEVELOP
          </span>

          <h2 class="mt-4 text-2xl sm:text-4xl md:text-5xl font-black leading-tight text-white">
            Membangun <span class="gradient-text">Solusi Digital</span> untuk Masa Depan Bisnis
          </h2>

          <p class="mt-4 text-sm sm:text-lg text-slate-300 leading-relaxed">
            iDevelop membantu perusahaan, startup dan UMKM membangun website, aplikasi dan sistem
            digital yang modern, cepat, aman dan scalable.
          </p>

          <p class="mt-3 text-xs sm:text-base text-slate-400 leading-relaxed">
            Fokus kami bukan hanya membuat software, tetapi menciptakan solusi yang membantu bisnis
            meningkatkan efisiensi, kredibilitas dan pertumbuhan.
          </p>

          <div class="mt-5">
            <router-link
              to="/about"
              class="inline-flex items-center gap-2 font-bold text-xs sm:text-sm text-orange-300 hover:text-pink-300 duration-300 cursor-pointer"
            >
              Pelajari Selengkapnya Tentang Kami <span>→</span>
            </router-link>
          </div>

          <!-- Feature Cards -->
          <div
            class="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-none sm:grid sm:grid-cols-2 sm:gap-4 mt-8 -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            <div
              class="min-w-[220px] sm:min-w-0 snap-center glass p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-orange-500/10 hover:border-orange-500/30 duration-300"
            >
              <div
                class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-lg text-white"
              >
                🚀
              </div>
              <h4 class="font-bold mt-3 text-sm sm:text-base text-white">Fast Development</h4>
              <p class="text-slate-400 mt-1.5 text-xs sm:text-sm">
                Pengerjaan cepat dengan teknologi modern.
              </p>
            </div>

            <div
              class="min-w-[220px] sm:min-w-0 snap-center glass p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-pink-500/10 hover:border-pink-500/30 duration-300"
            >
              <div
                class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-lg text-white"
              >
                ⚙️
              </div>
              <h4 class="font-bold mt-3 text-sm sm:text-base text-white">Custom Solution</h4>
              <p class="text-slate-400 mt-1.5 text-xs sm:text-sm">
                Sistem sesuai proses bisnis perusahaan.
              </p>
            </div>

            <div
              class="min-w-[220px] sm:min-w-0 snap-center glass p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-purple-500/10 hover:border-purple-500/30 duration-300"
            >
              <div
                class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-lg text-white"
              >
                🎨
              </div>
              <h4 class="font-bold mt-3 text-sm sm:text-base text-white">Modern UI/UX</h4>
              <p class="text-slate-400 mt-1.5 text-xs sm:text-sm">
                Desain premium meningkatkan konversi.
              </p>
            </div>

            <div
              class="min-w-[220px] sm:min-w-0 snap-center glass p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-amber-500/10 hover:border-amber-500/30 duration-300"
            >
              <div
                class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-lg text-white"
              >
                🛠️
              </div>
              <h4 class="font-bold mt-3 text-sm sm:text-base text-white">Full Support</h4>
              <p class="text-slate-400 mt-1.5 text-xs sm:text-sm">
                Maintenance dan support berkelanjutan.
              </p>
            </div>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-3 mt-8">
            <div class="glass p-3 rounded-2xl text-center border border-white/5">
              <h4 class="text-xl sm:text-2xl font-black gradient-text">100+</h4>
              <p class="text-[10px] sm:text-xs text-slate-300">Projects</p>
            </div>

            <div class="glass p-3 rounded-2xl text-center border border-white/5">
              <h4 class="text-xl sm:text-2xl font-black gradient-text">50+</h4>
              <p class="text-[10px] sm:text-xs text-slate-300">Clients</p>
            </div>

            <div class="glass p-3 rounded-2xl text-center border border-white/5">
              <h4 class="text-xl sm:text-2xl font-black gradient-text">4.9★</h4>
              <p class="text-[10px] sm:text-xs text-slate-300">Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
