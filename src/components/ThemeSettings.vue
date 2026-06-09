<template>
  <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end">
    <!-- Welcome Notification Banner -->
    <transition name="panel-fade">
      <div
        v-if="showWelcome"
        class="mb-3 w-80 glass rounded-2xl p-5 shadow-2xl border border-slate-200/50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl text-slate-800 dark:text-slate-100 flex flex-col gap-3 animate-bounce-subtle"
      >
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-center gap-2">
            <span class="text-lg">🎨</span>
            <span class="font-bold text-[10px] uppercase tracking-wider text-slate-400">{{ $t('themeSettings.tipsTitle') }}</span>
          </div>
          <button @click="dismissWelcome" class="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-white transition">✕</button>
        </div>
        
        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed" v-html="$t('themeSettings.tipsText')"></p>

        <div class="flex justify-end mt-1">
          <button 
            @click="dismissWelcome" 
            class="px-4 py-1.5 rounded-lg text-[10px] font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white shadow-md hover:scale-105 active:scale-95 duration-200 cursor-pointer"
          >
            {{ $t('themeSettings.tipsBtn') }}
          </button>
        </div>
      </div>
    </transition>

    <!-- Toggle Button -->
    <button
      @click="isOpen = !isOpen; showWelcome = false"
      class="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-95 duration-300 cursor-pointer glow relative group"
      aria-label="Settings"
    >
      <span class="text-2xl animate-spin-slow group-hover:rotate-45 duration-700">⚙️</span>
    </button>

    <!-- Settings Panel -->
    <transition name="panel-fade">
      <div
        v-if="isOpen"
        class="mt-3 w-80 glass rounded-[28px] p-6 shadow-2xl border border-slate-200/50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl text-slate-800 dark:text-slate-100 flex flex-col gap-5"
      >
        <div class="flex items-center justify-between pb-3 border-b border-slate-200/40">
          <h4 class="font-black text-lg text-slate-900 dark:text-white">{{ $t('themeSettings.customizer') }}</h4>
          <button @click="isOpen = false" class="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-white transition">{{ $t('themeSettings.close') }}</button>
        </div>

        <!-- Language Switcher -->
        <div>
          <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">{{ $t('themeSettings.language') }}</span>
          <div class="grid grid-cols-2 gap-3 mt-2">
            <button
              v-for="lang in supportedLocales"
              :key="lang.code"
              @click="setLocale(lang.code)"
              :class="[
                'flex items-center justify-center gap-2 py-2 rounded-xl text-[11px] font-bold border transition cursor-pointer',
                locale === lang.code
                  ? 'bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900 dark:border-white'
                  : 'bg-white/40 text-slate-600 dark:text-slate-300 dark:border-slate-700 border-slate-200 hover:bg-white/80 dark:hover:bg-slate-800/40'
              ]"
            >
              <span>{{ lang.flag }}</span> {{ lang.name }}
            </button>
          </div>
        </div>

        <!-- Mode Toggle -->
        <div>
          <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">{{ $t('themeSettings.themeMode') }}</span>
          <div class="grid grid-cols-2 gap-3 mt-2">
            <button
              @click="setMode('light')"
              :class="[
                'flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold border transition cursor-pointer',
                mode === 'light'
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white/40 text-slate-600 border-slate-200 hover:bg-white/80'
              ]"
            >
              <span>☀️</span> {{ $t('themeSettings.light') }}
            </button>
            <button
              @click="setMode('dark')"
              :class="[
                'flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold border transition cursor-pointer',
                mode === 'dark'
                  ? 'bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900 dark:border-white'
                  : 'bg-white/40 text-slate-600 dark:text-slate-300 dark:border-slate-700 border-slate-200 hover:bg-white/80 dark:hover:bg-slate-800/40'
              ]"
            >
              <span>🌙</span> {{ $t('themeSettings.dark') }}
            </button>
          </div>
        </div>

        <!-- Gradient Theme -->
        <div>
          <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">{{ $t('themeSettings.gradientAccents') }}</span>
          <div class="grid grid-cols-2 gap-2 mt-2">
            <button
              v-for="theme in gradients"
              :key="theme.name"
              @click="setGradient(theme)"
              :class="[
                'flex items-center gap-2.5 p-2 rounded-xl border text-left transition cursor-pointer',
                activeGradient.name === theme.name
                  ? 'border-slate-900 dark:border-white bg-slate-50 dark:bg-slate-800'
                  : 'border-slate-200/60 dark:border-slate-800 hover:bg-slate-50/50 dark:hover:bg-slate-800/30'
              ]"
            >
              <!-- Color dots preview -->
              <div class="flex shrink-0">
                <span class="w-3.5 h-3.5 rounded-full border border-white/20" :style="{ background: theme.start }"></span>
                <span class="w-3.5 h-3.5 rounded-full border border-white/20 -ml-1.5" :style="{ background: theme.middle }"></span>
              </div>
              <span class="text-[11px] font-bold truncate">{{ theme.name }}</span>
            </button>
          </div>
        </div>

        <div class="text-[10px] text-slate-400 text-center pt-2 border-t border-slate-200/40">
          {{ $t('themeSettings.autoSaved') }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from '../plugins/i18n'

const { locale, setLocale, supportedLocales } = useI18n()

const isOpen = ref(false)
const showWelcome = ref(false)
const mode = ref('light')
const activeGradient = ref({})

const gradients = [
  {
    name: 'Sunset Blaze',
    start: '#ff7a18',
    middle: '#ff4d6d',
    end: '#a855f7',
    glow: 'rgba(255, 122, 24, 0.25)'
  },
  {
    name: 'Ocean Breeze',
    start: '#06b6d4',
    middle: '#0d9488',
    end: '#10b981',
    glow: 'rgba(6, 182, 212, 0.25)'
  },
  {
    name: 'Electric Violet',
    start: '#6366f1',
    middle: '#8b5cf6',
    end: '#3b82f6',
    glow: 'rgba(99, 102, 241, 0.25)'
  },
  {
    name: 'Cyberpunk',
    start: '#ec4899',
    middle: '#d946ef',
    end: '#06b6d4',
    glow: 'rgba(236, 72, 153, 0.25)'
  },
  {
    name: 'Forrest Mint',
    start: '#10b981',
    middle: '#059669',
    end: '#0f766e',
    glow: 'rgba(16, 185, 129, 0.25)'
  },
  {
    name: 'Golden Hour',
    start: '#f59e0b',
    middle: '#ea580c',
    end: '#dc2626',
    glow: 'rgba(245, 158, 11, 0.25)'
  }
]

// Default to sunset blaze
activeGradient.value = gradients[0]

const setMode = (newMode) => {
  mode.value = newMode
  localStorage.setItem('idevelop-theme-mode', newMode)
  applyTheme()
}

const setGradient = (theme) => {
  activeGradient.value = theme
  localStorage.setItem('idevelop-gradient-theme', JSON.stringify(theme))
  applyGradient()
}

const applyTheme = () => {
  const root = document.documentElement
  if (mode.value === 'dark') {
    root.classList.add('dark-theme')
  } else {
    root.classList.remove('dark-theme')
  }
}

const applyGradient = () => {
  const root = document.documentElement
  const theme = activeGradient.value
  if (theme && theme.start) {
    root.style.setProperty('--gradient-start', theme.start)
    root.style.setProperty('--gradient-middle', theme.middle)
    root.style.setProperty('--gradient-end', theme.end)
    root.style.setProperty('--gradient-glow-color', theme.glow)
  }
}

const dismissWelcome = () => {
  showWelcome.value = false
  localStorage.setItem('idevelop-welcome-dismissed', 'true')
}

onMounted(() => {
  // Check welcome banner status
  const dismissed = localStorage.getItem('idevelop-welcome-dismissed')
  if (!dismissed) {
    // Show after a tiny delay for premium feel
    setTimeout(() => {
      showWelcome.value = true
    }, 1500)
  }

  // Load settings from storage
  const savedMode = localStorage.getItem('idevelop-theme-mode')
  if (savedMode) {
    mode.value = savedMode
  } else {
    // Detect system preferred dark scheme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    mode.value = prefersDark ? 'dark' : 'light'
  }
  applyTheme()

  const savedGradient = localStorage.getItem('idevelop-gradient-theme')
  if (savedGradient) {
    try {
      const parsed = JSON.parse(savedGradient)
      // Find matching object inside our list to maintain reactivity
      const found = gradients.find(g => g.name === parsed.name)
      if (found) {
        activeGradient.value = found
      } else {
        activeGradient.value = parsed
      }
    } catch (e) {
      activeGradient.value = gradients[0]
    }
  }
  applyGradient()
})
</script>

<style scoped>
.panel-fade-enter-active,
.panel-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.panel-fade-enter-from,
.panel-fade-leave-to {
  opacity: 0;
  transform: scale(0.92) translateY(10px);
}

@keyframes bounceSubtle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.animate-bounce-subtle {
  animation: bounceSubtle 4s ease-in-out infinite;
}
</style>
