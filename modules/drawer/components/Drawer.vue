<template>
  <div class="drawer">
    <button @click="openDrawer" class="fixed top-0">
      <!-- AdminIcon -->
      <AdminIcon />
    </button>
    <!-- <div class="w-4 bg-red-500"></div> -->
    <!-- Drawer -->
    <div
      v-show="isDrawerOpen"
      class="drawerContainer dark:text-gray-200 text-gray-700"
      :class="animationClass"
      :style="{width: 300 + 'px'}"
    >
      <div class="flex justify-between">
        <div class="w-full">
          <!-- ColoseAdmin -->
          <ClockHidden v-if="isDrawerOpen" @click="closeDrawer" />
        </div>
        <!-- ImgComponent -->
        <ImgComponent />
      </div>
      <div class="p-4 text-center">
        <h1 class="text-xl font-light opacity-1">
          Willkommen auf meinem Profil...
        </h1>
      </div>
      <!-- AboutInDrawer -->
      <AboutInDrawer />
    </div>
  </div>
</template>

<script setup lang="ts">
import ClockHidden from "~/modules/header/components/icons/ClockHidden.vue";
import { useDrawerControl } from "../composables/useDreawerScroll";
import AdminIcon from "../icons/AdminIcon.vue";
import AboutInDrawer from "./AboutInDrawer.vue";
import ImgComponent from "./ImgComponent.vue";

const props = defineProps<{
  resizeWidth: number;
}>();


const { isDrawerOpen, animationClass, openDrawer, closeDrawer } =
  useDrawerControl();
</script>

<style scoped>
.drawerContainer {
  height: 100vh;
  left: 0;
  position: fixed;
  overflow: auto;
  backdrop-filter: blur(10px);
  z-index: 1000;
}

.fadeInLeft {
  animation: fadeInLeft 2s both;
}

.fadeOutLeft {
  animation: fadeOutLeft 2s both;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

@keyframes fadeOutLeft {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
