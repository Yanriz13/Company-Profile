<template>
  <section id="contact" class="relative py-16 md:py-24 lg:py-32 overflow-hidden">
    <!-- Background Gradient Glows -->
    <div
      class="absolute left-[-200px] top-0 w-[600px] h-[600px] rounded-full bg-orange-500/15 blur-[180px]"
    ></div>
    <div
      class="absolute right-[-200px] bottom-0 w-[700px] h-[700px] rounded-full bg-pink-500/15 blur-[180px]"
    ></div>

    <!-- Background Orbits -->
    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-slate-200/50 animate-spin-slow"
    ></div>
    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full border border-slate-200/50 animate-spin-reverse"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
      <!-- Section Heading -->
      <div class="text-center mb-12 md:mb-20">
        <span
          class="glass px-4 py-1.5 rounded-full text-xs sm:text-sm text-orange-600 border border-orange-400/20"
        >
          CONTACT US
        </span>
        <h2 class="mt-4 text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
          Mari Bangun <span class="gradient-text">Proyek Digital</span> Anda
        </h2>
        <p class="mt-4 max-w-2xl mx-auto text-xs sm:text-base text-slate-300 leading-relaxed">
          Konsultasikan kebutuhan website, aplikasi mobile, dashboard monitoring, ERP maupun sistem
          informasi perusahaan Anda.
        </p>
      </div>

      <!-- Main Layout Grid -->
      <div class="flex flex-col lg:grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
        <!-- LEFT COLUMN: Contact Cards (Order 2 on mobile, 1 on desktop) -->
        <div class="w-full lg:col-span-2 space-y-6 order-2 lg:order-1">
          <!-- Cards Container: Swipeable horizontal on Mobile, normal vertical stack on Desktop -->
          <div class="w-full">
            <p class="text-[10px] text-slate-400 block lg:hidden mb-2 px-1">
              ← Geser horizontal untuk info kontak lainnya →
            </p>
            <div
              class="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-none lg:flex-col lg:space-y-6 lg:pb-0 lg:overflow-visible -mx-4 px-4 lg:mx-0 lg:px-0"
            >
              <!-- Address Card -->
              <div
                class="min-w-[280px] sm:min-w-0 snap-center glass rounded-2xl p-5 border border-white/10 flex gap-4 items-start flex-1"
              >
                <div
                  class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-orange-500/10 flex items-center justify-center text-lg sm:text-xl text-orange-400 shrink-0"
                >
                  📍
                </div>
                <div>
                  <h5 class="font-bold text-sm sm:text-base text-white">Alamat Kantor</h5>
                  <p class="text-slate-400 text-xs sm:text-sm mt-1">
                    Gedung iDevelop, Lantai 4, Jakarta, Indonesia
                  </p>
                  <p class="text-slate-500 text-[10px] sm:text-xs mt-1">
                    Senin - Jumat: 09.00 - 18.00 WIB
                  </p>
                </div>
              </div>

              <!-- Email Card -->
              <div
                class="min-w-[280px] sm:min-w-0 snap-center glass rounded-2xl p-5 border border-white/10 flex gap-4 items-start flex-1"
              >
                <div
                  class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-pink-500/10 flex items-center justify-center text-lg sm:text-xl text-pink-400 shrink-0"
                >
                  📧
                </div>
                <div>
                  <h5 class="font-bold text-sm sm:text-base text-white">Email Bisnis</h5>
                  <a
                    href="mailto:yanuarizki12@gmail.com"
                    class="text-slate-400 hover:text-white text-xs sm:text-sm block mt-1 transition"
                    >yanuarizki12@gmail.com</a
                  >
                </div>
              </div>

              <!-- WhatsApp Card -->
              <div
                class="min-w-[280px] sm:min-w-0 snap-center glass rounded-2xl p-5 border border-white/10 flex gap-4 items-start flex-1"
              >
                <div
                  class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-purple-500/10 flex items-center justify-center text-lg sm:text-xl text-purple-400 shrink-0"
                >
                  📱
                </div>
                <div>
                  <h5 class="font-bold text-sm sm:text-base text-white">WhatsApp</h5>
                  <a
                    href="https://wa.me/6289513839649"
                    target="_blank"
                    class="text-slate-400 hover:text-white text-xs sm:text-sm block mt-1 transition"
                    >+62 895 1383 9649</a
                  >
                  <p class="text-slate-500 text-[10px] sm:text-xs mt-1">Respon Cepat (Jam Kerja)</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick WhatsApp CTA -->
          <div
            class="glass rounded-[24px] sm:rounded-[32px] p-6 text-center border border-white/10 w-full"
          >
            <div class="text-4xl mb-3">🚀</div>
            <h3 class="text-lg sm:text-xl font-bold text-white">Butuh Cepat?</h3>
            <p class="text-slate-400 mt-2 text-xs sm:text-sm leading-relaxed">
              Hubungi kami langsung melalui WhatsApp untuk konsultasi cepat.
            </p>
            <button
              @click="triggerConsultation"
              class="mt-5 w-full py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-[1.02] active:scale-[0.98] duration-300 font-bold text-white text-xs sm:text-sm shadow-md shadow-green-500/10 cursor-pointer"
            >
              Chat WhatsApp 💬
            </button>
          </div>
        </div>

        <!-- RIGHT COLUMN: Form Card (Order 1 on mobile, 2 on desktop) -->
        <div
          class="w-full lg:col-span-3 glass rounded-[24px] sm:rounded-[36px] p-6 sm:p-8 lg:p-10 border border-white/10 relative overflow-hidden order-1 lg:order-2"
        >
          <div v-if="!formSubmitted">
            <h3 class="text-2xl sm:text-3xl font-bold text-white mb-2">Kirim Pesan</h3>
            <p class="text-slate-400 text-xs sm:text-sm mb-6 sm:mb-8">
              Isi formulir konsultasi di bawah ini, kami akan merespons dalam waktu 1x24 jam.
            </p>

            <form @submit.prevent="submitForm" class="space-y-4 sm:space-y-5">
              <div class="grid sm:grid-cols-2 gap-4">
                <div>
                  <label class="text-[10px] sm:text-xs text-slate-400 font-semibold mb-1.5 block"
                    >Nama Lengkap *</label
                  >
                  <input
                    type="text"
                    v-model="formData.name"
                    required
                    placeholder="Contoh: John Doe"
                    class="contact-input-style"
                  />
                </div>
                <div>
                  <label class="text-[10px] sm:text-xs text-slate-400 font-semibold mb-1.5 block"
                    >Alamat Email *</label
                  >
                  <input
                    type="email"
                    v-model="formData.email"
                    required
                    placeholder="Contoh: john@example.com"
                    class="contact-input-style"
                  />
                </div>
              </div>

              <div class="grid sm:grid-cols-2 gap-4">
                <div>
                  <label class="text-[10px] sm:text-xs text-slate-400 font-semibold mb-1.5 block"
                    >Nama Perusahaan</label
                  >
                  <input
                    type="text"
                    v-model="formData.company"
                    placeholder="Contoh: PT. Maju Bersama"
                    class="contact-input-style"
                  />
                </div>
                <div>
                  <label class="text-[10px] sm:text-xs text-slate-400 font-semibold mb-1.5 block"
                    >Nomor WhatsApp *</label
                  >
                  <input
                    type="tel"
                    v-model="formData.phone"
                    required
                    placeholder="Contoh: 081234567890"
                    class="contact-input-style"
                  />
                </div>
              </div>

              <div>
                <label class="text-[10px] sm:text-xs text-slate-400 font-semibold mb-1.5 block"
                  >Deskripsi Singkat Kebutuhan *</label
                >
                <textarea
                  rows="4"
                  v-model="formData.message"
                  required
                  placeholder="Ceritakan gambaran sistem atau website yang ingin Anda bangun..."
                  class="contact-input-style"
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full mt-4 sm:mt-6 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl text-white font-semibold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 duration-300 glow flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <span v-if="isSubmitting">Mengirim...</span>
                <span v-else>Kirim Form Konsultasi 🚀</span>
              </button>
            </form>
          </div>

          <!-- SUCCESS STATE SCREEN -->
          <div v-else class="text-center py-12 sm:py-16 px-4">
            <div
              class="w-16 h-16 sm:w-20 sm:h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-3xl sm:text-4xl mx-auto mb-5 sm:mb-6 border border-green-500/30 animate-bounce"
            >
              ✓
            </div>
            <h3 class="text-2xl sm:text-3xl font-black text-white mb-3 sm:mb-4">Pesan Terkirim!</h3>
            <p
              class="text-slate-300 leading-relaxed text-xs sm:text-sm max-w-md mx-auto mb-6 sm:mb-8"
            >
              Terima kasih <strong>{{ formData.name }}</strong
              >. Pesan Anda telah diterima oleh tim iDevelop. Kami akan menghubungi Anda kembali
              melalui WhatsApp/Email dalam waktu kurang dari 24 jam.
            </p>
            <button
              @click="resetForm"
              class="px-5 py-2 rounded-full border border-white/10 hover:border-white/30 text-[10px] sm:text-xs text-slate-400 hover:text-white transition cursor-pointer"
            >
              Kirim Pesan Baru
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const triggerConsultation = () => {
  window.dispatchEvent(new CustomEvent('open-consultation'))
}

const isSubmitting = ref(false)
const formSubmitted = ref(false)

const formData = reactive({
  name: '',
  email: '',
  company: '',
  phone: '',
  message: '',
})

const submitForm = () => {
  isSubmitting.value = true
  setTimeout(() => {
    isSubmitting.value = false
    formSubmitted.value = true
  }, 1200)
}

const resetForm = () => {
  formSubmitted.value = false
  formData.name = ''
  formData.email = ''
  formData.company = ''
  formData.phone = ''
  formData.message = ''
}
</script>

<style scoped>
.contact-input-style {
  width: 100%;
  padding: 0.85rem 1.15rem;
  border-radius: 0.75rem;
  border: 1px solid var(--glass-border);
  background: var(--glass-bg);
  color: var(--text-primary);
  font-size: 0.825rem;
  outline: none;
  transition: all 0.3s;
}

.contact-input-style:focus {
  border-color: var(--gradient-start);
  box-shadow: 0 0 15px var(--gradient-glow-color);
}
</style>
