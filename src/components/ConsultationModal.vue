<template>
  <transition name="modal-fade">
    <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <!-- Backdrop -->
      <div @click="closeModal" class="fixed inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity"></div>

      <!-- Modal Content Box -->
      <div class="relative glass max-w-lg w-full rounded-[28px] p-6 sm:p-8 border border-white/10 overflow-hidden z-10 shadow-2xl flex flex-col gap-5 bg-white/95 dark:bg-slate-900/95 text-slate-800 dark:text-slate-100 animate-fadeIn">
        
        <!-- Header -->
        <div class="flex items-start justify-between pb-3 border-b border-slate-200/40">
          <div>
            <span class="px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-orange-500/10 text-orange-600 border border-orange-500/20 uppercase tracking-wider">Konsultasi Gratis</span>
            <h4 class="font-black text-xl text-slate-950 dark:text-white mt-1">Mulai Diskusi Proyek</h4>
          </div>
          <button @click="closeModal" class="w-8 h-8 rounded-full glass border border-white/10 hover:border-white/20 flex items-center justify-center text-slate-500 dark:text-slate-300 hover:rotate-90 duration-300 cursor-pointer focus:outline-none">✕</button>
        </div>

        <!-- Form Body -->
        <form @submit.prevent="sendToWhatsApp" class="space-y-4">
          <div>
            <label class="text-[10px] sm:text-xs text-slate-400 font-semibold mb-1.5 block">Nama Lengkap *</label>
            <input 
              type="text" 
              v-model="form.name" 
              required 
              placeholder="Contoh: John Doe" 
              class="contact-input-style"
            />
          </div>

          <div>
            <label class="text-[10px] sm:text-xs text-slate-400 font-semibold mb-1.5 block">Kategori Proyek *</label>
            <select v-model="form.subject" required class="contact-input-style bg-white dark:bg-slate-900">
              <option value="" disabled>Pilih jenis proyek...</option>
              <option value="Website (Company Profile / Landing Page)">Website (Company Profile / Landing Page)</option>
              <option value="Aplikasi Mobile (Android / iOS)">Aplikasi Mobile (Android / iOS)</option>
              <option value="Sistem Informasi / ERP / CRM">Sistem Informasi / ERP / CRM</option>
              <option value="Desain UI/UX">Desain UI/UX</option>
              <option value="Lainnya / Konsultasi Bisnis">Lainnya / Konsultasi Bisnis</option>
            </select>
          </div>

          <div>
            <label class="text-[10px] sm:text-xs text-slate-400 font-semibold mb-1.5 block">Jelaskan Kebutuhan Anda *</label>
            <textarea 
              rows="4" 
              v-model="form.message" 
              required 
              placeholder="Tuliskan secara singkat ide sistem, fitur, atau website yang ingin dibuat..." 
              class="contact-input-style"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button 
            type="submit" 
            class="w-full mt-2 px-6 py-3.5 rounded-xl text-white font-semibold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:scale-[1.02] active:scale-[0.98] duration-300 glow flex items-center justify-center gap-2 cursor-pointer text-sm"
          >
            <span>Hubungi via WhatsApp 💬</span>
          </button>
        </form>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { reactive, watch } from 'vue'

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])

const form = reactive({
  name: '',
  subject: '',
  message: ''
})

const closeModal = () => {
  emit('close')
}

// Format message and redirect to WhatsApp
const sendToWhatsApp = () => {
  const phone = '6289518123994'
  const text = `Halo iDevelop, saya *${form.name}*.\n\nSaya ingin berkonsultasi mengenai proyek *${form.subject}*.\n\n*Detail Kebutuhan*:\n${form.message}`
  
  const encodedText = encodeURIComponent(text)
  const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedText}`
  
  window.open(url, '_blank')
  closeModal()
  
  // Reset form
  form.name = ''
  form.subject = ''
  form.message = ''
}

// Lock/unlock body scroll when modal opens/closes
watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
