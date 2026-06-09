<template>
  <MainLayout>
    <!-- Page Header Hero -->
    <section class="relative pt-36 pb-12 md:pt-40 md:pb-16 overflow-hidden hero-grid">
      <div class="noise-overlay"></div>
      <div class="mesh mesh-2"></div>
      <div class="mesh mesh-4"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <span class="glass px-4 py-1.5 rounded-full text-xs sm:text-sm inline-block text-orange-200 border border-orange-400/20">
          KONTAK KAMI
        </span>
        <h1 class="mt-4 text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
          Hubungi Tim Kami <br />
          <span class="gradient-text">Mulai Diskusi Proyek</span>
        </h1>
        <p class="mt-4 max-w-3xl mx-auto text-sm sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
          Ada ide proyek luar biasa atau pertanyaan seputar layanan kami? Tim ahli kami siap membantu Anda mewujudkannya.
        </p>
      </div>
    </section>

    <!-- Main Content Grid -->
    <section class="pb-20 sm:pb-32 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div class="flex flex-col lg:grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          
          <!-- RIGHT Column on Desktop, TOP Column on Mobile: Interactive Contact Form -->
          <div class="w-full lg:col-span-3 glass rounded-[24px] sm:rounded-[36px] p-6 sm:p-8 lg:p-10 border border-white/10 relative overflow-hidden order-1 lg:order-2">
            <div v-if="!formSubmitted">
              <h3 class="text-2xl sm:text-3xl font-bold text-white mb-2">Kirim Pesan</h3>
              <p class="text-slate-400 text-xs sm:text-sm mb-6 sm:mb-8">Isi formulir konsultasi di bawah ini, kami akan merespons dalam waktu 1x24 jam.</p>
              
              <form @submit.prevent="submitForm" class="space-y-4 sm:space-y-5">
                <div class="grid md:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label class="text-[10px] sm:text-xs text-slate-400 font-semibold mb-1.5 block">Nama Lengkap *</label>
                    <input 
                      type="text" 
                      v-model="formData.name" 
                      required 
                      placeholder="Contoh: John Doe" 
                      class="contact-input-style"
                    />
                  </div>
                  <div>
                    <label class="text-[10px] sm:text-xs text-slate-400 font-semibold mb-1.5 block">Alamat Email *</label>
                    <input 
                      type="email" 
                      v-model="formData.email" 
                      required 
                      placeholder="Contoh: john@example.com" 
                      class="contact-input-style"
                    />
                  </div>
                </div>

                <div class="grid md:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label class="text-[10px] sm:text-xs text-slate-400 font-semibold mb-1.5 block">Nama Perusahaan</label>
                    <input 
                      type="text" 
                      v-model="formData.company" 
                      placeholder="Contoh: PT. Maju Bersama" 
                      class="contact-input-style"
                    />
                  </div>
                  <div>
                    <label class="text-[10px] sm:text-xs text-slate-400 font-semibold mb-1.5 block">Nomor WhatsApp *</label>
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
                  <label class="text-[10px] sm:text-xs text-slate-400 font-semibold mb-1.5 block">Subjek Diskusi *</label>
                  <select v-model="formData.subject" required class="contact-input-style bg-white">
                    <option value="" disabled>Pilih opsi subjek...</option>
                    <option value="Website Development">Pembuatan Website (Company Profile / Landing Page)</option>
                    <option value="Mobile App Development">Pembuatan Aplikasi Mobile (Android / iOS)</option>
                    <option value="Custom Enterprise System">Pembuatan Custom ERP / CRM / HRIS</option>
                    <option value="Dashboard & Analytics">Dashboard & Visualisasi Data</option>
                    <option value="UI/UX Design Only">Desain UI/UX</option>
                    <option value="Other Consulting">Lainnya / Konsultasi Lain</option>
                  </select>
                </div>

                <div>
                  <label class="text-[10px] sm:text-xs text-slate-400 font-semibold mb-1.5 block">Deskripsi Singkat Kebutuhan *</label>
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
              <div class="w-16 h-16 sm:w-20 sm:h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-3xl sm:text-4xl mx-auto mb-5 sm:mb-6 border border-green-500/30 animate-bounce">
                ✓
              </div>
              <h3 class="text-2xl sm:text-3xl font-black text-white mb-3 sm:mb-4">Pesan Terkirim!</h3>
              <p class="text-slate-300 leading-relaxed text-xs sm:text-sm max-w-md mx-auto mb-6 sm:mb-8">
                Terima kasih <strong>{{ formData.name }}</strong>. Pesan Anda telah diterima oleh tim iDevelop. Kami akan menghubungi Anda kembali melalui WhatsApp/Email dalam waktu kurang dari 24 jam.
              </p>
              <button 
                @click="resetForm" 
                class="px-5 py-2 rounded-full border border-white/10 hover:border-white/30 text-[10px] sm:text-xs text-slate-400 hover:text-white transition cursor-pointer"
              >
                Kirim Pesan Baru
              </button>
            </div>
          </div>

          <!-- LEFT Column on Desktop, BOTTOM Column on Mobile: Contact Cards & Map -->
          <div class="w-full lg:col-span-2 space-y-6 order-2 lg:order-1">
            
            <!-- Cards Container: Swipeable horizontal on Mobile, normal vertical stack on Desktop -->
            <div class="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-none lg:flex-col lg:space-y-6 lg:pb-0 lg:overflow-visible -mx-4 px-4 lg:mx-0 lg:px-0">
              
              <!-- Address Card -->
              <div class="min-w-[280px] sm:min-w-0 snap-center glass rounded-2xl p-5 border border-white/10 flex gap-4 items-start flex-1">
                <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-orange-500/10 flex items-center justify-center text-lg sm:text-xl text-orange-400 shrink-0">
                  📍
                </div>
                <div>
                  <h5 class="font-bold text-sm sm:text-base text-white">Alamat Kantor</h5>
                  <p class="text-slate-400 text-xs sm:text-sm mt-1">Gedung iDevelop, Lantai 4, Jakarta, Indonesia</p>
                  <p class="text-slate-500 text-[10px] sm:text-xs mt-1">Senin - Jumat: 09.00 - 18.00 WIB</p>
                </div>
              </div>

              <!-- Email Card -->
              <div class="min-w-[280px] sm:min-w-0 snap-center glass rounded-2xl p-5 border border-white/10 flex gap-4 items-start flex-1">
                <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-pink-500/10 flex items-center justify-center text-lg sm:text-xl text-pink-400 shrink-0">
                  📧
                </div>
                <div>
                  <h5 class="font-bold text-sm sm:text-base text-white">Email Bisnis</h5>
                  <a href="mailto:info@idevelop.id" class="text-slate-400 hover:text-white text-xs sm:text-sm block mt-1 transition">info@idevelop.id</a>
                  <a href="mailto:project@idevelop.id" class="text-slate-400 hover:text-white text-xs sm:text-sm block transition">project@idevelop.id</a>
                </div>
              </div>

              <!-- WhatsApp Card -->
              <div class="min-w-[280px] sm:min-w-0 snap-center glass rounded-2xl p-5 border border-white/10 flex gap-4 items-start flex-1">
                <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-purple-500/10 flex items-center justify-center text-lg sm:text-xl text-purple-400 shrink-0">
                  📱
                </div>
                <div>
                  <h5 class="font-bold text-sm sm:text-base text-white">WhatsApp</h5>
                  <a href="https://wa.me/6281234567890" target="_blank" class="text-slate-400 hover:text-white text-xs sm:text-sm block mt-1 transition">+62 812 3456 7890</a>
                  <p class="text-slate-500 text-[10px] sm:text-xs mt-1">Respon Cepat (Jam Kerja)</p>
                </div>
              </div>

            </div>

            <!-- Maps Embedded Frame -->
            <div class="glass rounded-[24px] sm:rounded-[32px] overflow-hidden border border-white/10 h-[220px] sm:h-[300px]">
              <iframe
                src="https://maps.google.com/maps?q=jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
                class="w-full h-full border-0 opacity-80 hover:opacity-100 duration-300"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import { ref, reactive } from 'vue'
import MainLayout from '../layouts/MainLayout.vue'

const isSubmitting = ref(false)
const formSubmitted = ref(false)

const formData = reactive({
  name: '',
  email: '',
  company: '',
  phone: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  isSubmitting.value = true
  setTimeout(() => {
    isSubmitting.value = false
    formSubmitted.value = true
  }, 1500)
}

const resetForm = () => {
  formSubmitted.value = false
  formData.name = ''
  formData.email = ''
  formData.company = ''
  formData.phone = ''
  formData.subject = ''
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
