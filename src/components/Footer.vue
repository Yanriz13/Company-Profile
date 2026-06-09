<template>
  <section class="relative overflow-hidden border-t border-slate-200 bg-[#f8fafc]">
    <!-- Glow Background -->
    <div
      class="absolute left-[-200px] top-[-100px] w-[500px] h-[500px] rounded-full bg-orange-500/5 blur-[150px]"
    ></div>

    <div
      class="absolute right-[-200px] bottom-[-100px] w-[500px] h-[500px] rounded-full bg-pink-500/5 blur-[150px]"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10">
      <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        <!-- Company (Spans 2 columns on small/medium screens to give it room) -->
        <div class="col-span-2 lg:col-span-1">
          <h2 class="text-2xl sm:text-3xl font-black gradient-text">iDevelop</h2>

          <p class="mt-4 text-xs sm:text-sm text-slate-500 leading-relaxed">
            Digital Agency yang membantu perusahaan berkembang melalui Website, Mobile Apps, ERP,
            Dashboard Monitoring dan solusi transformasi digital.
          </p>

          <div class="flex gap-3 mt-6">
            <a
              href="#"
              class="w-10 h-10 rounded-xl glass flex items-center justify-center hover:scale-110 duration-300 text-sm"
            >
              📸
            </a>

            <a
              href="#"
              class="w-10 h-10 rounded-xl glass flex items-center justify-center hover:scale-110 duration-300 text-sm"
            >
              💼
            </a>

            <a
              href="#"
              class="w-10 h-10 rounded-xl glass flex items-center justify-center hover:scale-110 duration-300 text-sm"
            >
              ▶️
            </a>
          </div>
        </div>

        <!-- Quick Menu (1 column) -->
        <div class="col-span-1">
          <h3 class="font-bold text-sm sm:text-base text-slate-900 mb-4 sm:mb-6">Menu</h3>

          <ul class="space-y-2.5 sm:space-y-4 text-xs sm:text-sm text-slate-500">
            <li>
              <router-link to="/about" class="hover:text-orange-500 transition"> Tentang Kami </router-link>
            </li>

            <li>
              <router-link to="/services" class="hover:text-orange-500 transition"> Layanan </router-link>
            </li>

            <li>
              <router-link to="/portfolio" class="hover:text-orange-500 transition"> Portfolio </router-link>
            </li>

            <li>
              <router-link to="/contact" class="hover:text-orange-500 transition"> Kontak </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact (1 column) -->
        <div class="col-span-1">
          <h3 class="font-bold text-sm sm:text-base text-slate-900 mb-4 sm:mb-6">Kontak</h3>

          <ul class="space-y-2.5 sm:space-y-4 text-xs sm:text-sm text-slate-500">
            <li class="flex items-center gap-1.5">
              <span>📍</span> Jakarta, Indonesia
            </li>

            <li class="flex items-center gap-1.5">
              <span>📧</span> info@idevelop.id
            </li>

            <li class="flex items-center gap-1.5">
              <span>☎</span> +62 812 3456 7890
            </li>

            <li class="flex items-center gap-1.5">
              <span>🟢</span> WhatsApp
            </li>
          </ul>
        </div>

        <!-- Location Maps (Spans 2 columns on mobile, 1 column on desktop) -->
        <div class="col-span-2 lg:col-span-1">
          <h3 class="font-bold text-sm sm:text-base text-slate-900 mb-4 sm:mb-6">Lokasi Kami</h3>

          <div class="overflow-hidden rounded-2xl border border-slate-200">
            <iframe
              src="https://maps.google.com/maps?q=jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
              class="w-full h-[150px] border-0 opacity-90 hover:opacity-100 duration-300"
              loading="lazy"
            >
            </iframe>
          </div>
        </div>
      </div>

      <!-- Divider & Bottom Info -->
      <div class="border-t border-slate-200 mt-12 pt-6 sm:pt-8">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-slate-400">
          <p class="text-center sm:text-left">© 2026 iDevelop. All Rights Reserved.</p>

          <div class="flex gap-4 sm:gap-6">
            <a href="#" class="hover:text-orange-500 transition"> Privacy Policy </a>
            <a href="#" class="hover:text-orange-500 transition"> Terms & Conditions </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
