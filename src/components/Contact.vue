<template>
  <section id="contact" class="relative py-32 overflow-hidden">
    <!-- Background -->

    <div
      class="absolute left-[-200px] top-0 w-[600px] h-[600px] rounded-full bg-orange-500/15 blur-[180px]"
    ></div>

    <div
      class="absolute right-[-200px] bottom-0 w-[700px] h-[700px] rounded-full bg-pink-500/15 blur-[180px]"
    ></div>

    <!-- Orbit -->

    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-white/5 animate-spin-slow"
    ></div>

    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full border border-white/5 animate-spin-reverse"
    ></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- Heading -->

      <div class="text-center mb-20">
        <span class="glass px-5 py-2 rounded-full text-sm"> CONTACT US </span>

        <h2 class="mt-6 text-5xl lg:text-7xl font-black">
          Mari Bangun

          <span class="gradient-text"> Proyek Digital </span>

          Anda
        </h2>

        <p class="mt-6 max-w-3xl mx-auto text-slate-300 leading-8">
          Konsultasikan kebutuhan website, aplikasi mobile, dashboard monitoring, ERP maupun sistem
          informasi perusahaan Anda.
        </p>
      </div>

      <!-- Content -->

      <div class="grid lg:grid-cols-5 gap-10">
        <!-- Form -->

        <div class="lg:col-span-3 glass rounded-[36px] p-8 lg:p-10">
          <h3 class="text-3xl font-bold mb-8">Kirim Pesan</h3>

          <div class="grid md:grid-cols-2 gap-5">
            <input type="text" placeholder="Nama Lengkap" class="contact-input" />

            <input type="email" placeholder="Email" class="contact-input" />

            <input type="text" placeholder="Nama Perusahaan" class="contact-input" />

            <input type="text" placeholder="Nomor WhatsApp" class="contact-input" />
          </div>

          <textarea
            rows="6"
            placeholder="Ceritakan kebutuhan project Anda..."
            class="contact-input mt-5"
          >
          </textarea>

          <button
            class="mt-6 px-8 py-4 rounded-2xl text-white font-semibold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:scale-105 duration-300 glow"
          >
            Kirim Konsultasi Gratis 🚀
          </button>
        </div>

        <!-- Info -->

        <div class="lg:col-span-2 space-y-6">
          <div class="glass rounded-[32px] p-8">
            <h3 class="text-2xl font-bold mb-6">Informasi Kontak</h3>

            <div class="space-y-5">
              <div class="flex gap-4">
                <div
                  class="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center"
                >
                  📍
                </div>

                <div>
                  <p class="font-semibold">Lokasi</p>
                  <p class="text-slate-400">Jakarta, Indonesia</p>
                </div>
              </div>

              <div class="flex gap-4">
                <div class="w-12 h-12 rounded-2xl bg-pink-500/20 flex items-center justify-center">
                  📧
                </div>

                <div>
                  <p class="font-semibold">Email</p>
                  <p class="text-slate-400">hello@idevelop.id</p>
                </div>
              </div>

              <div class="flex gap-4">
                <div
                  class="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center"
                >
                  📱
                </div>

                <div>
                  <p class="font-semibold">WhatsApp</p>
                  <p class="text-slate-400">+62 812 3456 7890</p>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA -->

          <div class="glass rounded-[32px] p-8 text-center">
            <div class="text-6xl mb-4">🚀</div>

            <h3 class="text-2xl font-bold">Butuh Cepat?</h3>

            <p class="text-slate-400 mt-3 leading-7">
              Hubungi kami langsung melalui WhatsApp untuk konsultasi lebih cepat.
            </p>

            <button
              class="mt-6 w-full py-4 rounded-2xl bg-green-500 hover:bg-green-600 duration-300 font-semibold"
            >
              Chat WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
