<template>
  <div ref="fullscreenContainer">
    <Button 
      v-if="!isFullscreen"
      icon="pi pi-window-maximize" 
      severity="secondary"
      variant="text" 
      rounded 
      aria-label="Fullscreen"
      @click="enterFullscreen"
    />
    <!-- <Button v-if="!isFullscreen" icon="pi pi-window-maximize" @click="enterFullscreen" /> -->

    <img
      v-if="isFullscreen"
      :src="Wallpaper"
      class="w-screen h-screen object-cover fixed top-0 left-0 z-50 opacity-80"
    >

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Wallpaper from '@/assets/car_wallpaper-ultrawide.jpg'

const isFullscreen = ref(false)
const fullscreenContainer = ref(null)

function enterFullscreen() {
  const el = fullscreenContainer.value
  if (el.requestFullscreen) {
    el.requestFullscreen()
  } else if (el.webkitRequestFullscreen) {
    el.webkitRequestFullscreen()
  } else if (el.mozRequestFullScreen) {
    el.mozRequestFullScreen()
  } else if (el.msRequestFullscreen) {
    el.msRequestFullscreen()
  }

  isFullscreen.value = true
}

function handleFullscreenChange() {
  const fsElement = document.fullscreenElement ||
                    document.webkitFullscreenElement ||
                    document.mozFullScreenElement ||
                    document.msFullscreenElement

  // If there's no fullscreen element, we've exited fullscreen
  if (!fsElement) {
    isFullscreen.value = false
  }
}

onMounted(() => {
  document.addEventListener('fullscreenchange', handleFullscreenChange)
  document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
  document.addEventListener('mozfullscreenchange', handleFullscreenChange)
  document.addEventListener('MSFullscreenChange', handleFullscreenChange)
})

onUnmounted(() => {
  document.removeEventListener('fullscreenchange', handleFullscreenChange)
  document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
  document.removeEventListener('mozfullscreenchange', handleFullscreenChange)
  document.removeEventListener('MSFullscreenChange', handleFullscreenChange)
})
</script>
