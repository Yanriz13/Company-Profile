<template>
  <section class="relative overflow-hidden border-t border-white/10 bg-[#09090f]">
    <!-- Glow Background -->

    <div
      class="absolute left-[-200px] top-[-100px] w-[500px] h-[500px] rounded-full bg-orange-500/10 blur-[150px]"
    ></div>

    <div
      class="absolute right-[-200px] bottom-[-100px] w-[500px] h-[500px] rounded-full bg-pink-500/10 blur-[150px]"
    ></div>

    <div class="max-w-7xl mx-auto px-6 py-20 relative z-10">
      <div class="grid lg:grid-cols-4 gap-12">
        <!-- Company -->

        <div>
          <h2 class="text-3xl font-black gradient-text">iDevelop</h2>

          <p class="mt-5 text-slate-400 leading-8">
            Digital Agency yang membantu perusahaan berkembang melalui Website, Mobile Apps, ERP,
            Dashboard Monitoring dan solusi transformasi digital.
          </p>

          <div class="flex gap-4 mt-8">
            <a
              href="#"
              class="w-12 h-12 rounded-2xl glass flex items-center justify-center hover:scale-110 duration-300"
            >
              📸
            </a>

            <a
              href="#"
              class="w-12 h-12 rounded-2xl glass flex items-center justify-center hover:scale-110 duration-300"
            >
              💼
            </a>

            <a
              href="#"
              class="w-12 h-12 rounded-2xl glass flex items-center justify-center hover:scale-110 duration-300"
            >
              ▶️
            </a>
          </div>
        </div>

        <!-- Quick Menu -->

        <div>
          <h3 class="font-bold text-xl mb-6">Menu</h3>

          <ul class="space-y-4 text-slate-400">
            <li>
              <a href="#about" class="hover:text-white"> Tentang Kami </a>
            </li>

            <li>
              <a href="#services" class="hover:text-white"> Layanan </a>
            </li>

            <li>
              <a href="#portfolio" class="hover:text-white"> Portfolio </a>
            </li>

            <li>
              <a href="#contact" class="hover:text-white"> Kontak </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->

        <div>
          <h3 class="font-bold text-xl mb-6">Kontak</h3>

          <div class="space-y-5 text-slate-400">
            <div>📍 Jakarta, Indonesia</div>

            <div>📧 info@idevelop.id</div>

            <div>☎ +62 812 3456 7890</div>

            <div>🟢 WhatsApp Business</div>
          </div>
        </div>

        <!-- Maps -->

        <div>
          <h3 class="font-bold text-xl mb-6">Lokasi Kami</h3>

          <div class="overflow-hidden rounded-3xl border border-white/10">
            <iframe
              src="https://maps.google.com/maps?q=jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
              class="w-full h-[220px]"
              loading="lazy"
            >
            </iframe>
          </div>
        </div>
      </div>

      <!-- Divider -->

      <div class="border-t border-white/10 mt-16 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-slate-500">© 2026 iDevelop. All Rights Reserved.</p>

          <div class="flex gap-6 text-slate-500">
            <a href="#"> Privacy Policy </a>

            <a href="#"> Terms & Conditions </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
