<template>
  <section id="about" class="relative py-28 overflow-hidden">
    <!-- Background Effect -->

    <div class="about-planet"></div>

    <div class="about-orbit orbit-a"></div>
    <div class="about-orbit orbit-b"></div>

    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent"
    ></div>

    <div class="max-w-7xl mx-auto px-6 relative z-20">
      <div class="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
        <!-- LEFT -->

        <div class="relative">
          <div class="glass p-3 rounded-[36px] overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200"
              class="rounded-[28px] w-full h-[550px] object-cover"
            />
          </div>

          <!-- Experience -->

          <div
            class="absolute left-0 top-10 glass p-5 rounded-3xl floating border border-orange-500/20"
          >
            <h3 class="text-3xl font-black gradient-text">5+</h3>

            <p class="text-slate-300 text-sm">Tahun Pengalaman</p>
          </div>

          <!-- Client -->

          <div
            class="absolute right-0 bottom-10 glass p-5 rounded-3xl floating border border-pink-500/20"
          >
            <h3 class="text-3xl font-black gradient-text">50+</h3>

            <p class="text-slate-300 text-sm">Active Clients</p>
          </div>
        </div>

        <!-- RIGHT -->

        <div>
          <span class="glass px-5 py-2 rounded-full text-orange-200 border border-orange-400/20">
            ABOUT IDEVELOP
          </span>

          <h2 class="mt-6 text-4xl md:text-5xl font-black leading-tight">
            Membangun

            <span class="gradient-text"> Solusi Digital </span>

            untuk Masa Depan Bisnis
          </h2>

          <p class="mt-6 text-lg text-slate-300 leading-8">
            iDevelop membantu perusahaan, startup dan UMKM membangun website, aplikasi dan sistem
            digital yang modern, cepat, aman dan scalable.
          </p>

          <p class="mt-4 text-slate-400 leading-8">
            Fokus kami bukan hanya membuat software, tetapi menciptakan solusi yang membantu bisnis
            meningkatkan efisiensi, kredibilitas dan pertumbuhan.
          </p>

          <!-- Feature Cards -->

          <div class="grid sm:grid-cols-2 gap-4 mt-10">
            <div
              class="glass p-5 rounded-3xl border border-orange-500/10 hover:border-orange-500/30 duration-300"
            >
              <div
                class="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-xl"
              >
                🚀
              </div>

              <h4 class="font-bold mt-4">Fast Development</h4>

              <p class="text-slate-400 mt-2 text-sm">Pengerjaan cepat dengan teknologi modern.</p>
            </div>

            <div
              class="glass p-5 rounded-3xl border border-pink-500/10 hover:border-pink-500/30 duration-300"
            >
              <div
                class="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center text-xl"
              >
                ⚙️
              </div>

              <h4 class="font-bold mt-4">Custom Solution</h4>

              <p class="text-slate-400 mt-2 text-sm">Sistem sesuai proses bisnis perusahaan.</p>
            </div>

            <div
              class="glass p-5 rounded-3xl border border-purple-500/10 hover:border-purple-500/30 duration-300"
            >
              <div
                class="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-xl"
              >
                🎨
              </div>

              <h4 class="font-bold mt-4">Modern UI/UX</h4>

              <p class="text-slate-400 mt-2 text-sm">
                Desain premium yang meningkatkan kepercayaan.
              </p>
            </div>

            <div
              class="glass p-5 rounded-3xl border border-amber-500/10 hover:border-amber-500/30 duration-300"
            >
              <div
                class="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-xl"
              >
                🛠️
              </div>

              <h4 class="font-bold mt-4">Full Support</h4>

              <p class="text-slate-400 mt-2 text-sm">Maintenance dan support berkelanjutan.</p>
            </div>
          </div>

          <!-- Stats -->

          <div class="grid grid-cols-3 gap-4 mt-10">
            <div class="glass p-4 rounded-2xl text-center">
              <h4 class="text-2xl font-black gradient-text">100+</h4>

              <p class="text-xs text-slate-300">Projects</p>
            </div>

            <div class="glass p-4 rounded-2xl text-center">
              <h4 class="text-2xl font-black gradient-text">50+</h4>

              <p class="text-xs text-slate-300">Clients</p>
            </div>

            <div class="glass p-4 rounded-2xl text-center">
              <h4 class="text-2xl font-black gradient-text">4.9★</h4>

              <p class="text-xs text-slate-300">Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
