<template>
  <div class="drawer">
    <button @click="openDrawer" class="fixed top-0 left-0 z-10 text-white sm:hidden">
      <!-- AdminIcon -->
      <AdminIcon />
    </button>
    <!-- <div class="w-4 bg-red-500"></div> -->
    <!-- Drawer -->
    <div
      v-show="isDrawerOpen"
      class="fixed h-screen overflow-auto left-0 z-10 drawerContainer dark:text-gray-200 bg-gray-300 dark:bg-black lg:dark:bg-neutral-950 lg:dark:border-neutral-900 border-gray-200 border-l text-gray-900 w-11/12 sm:w-[300px]"
      :class="animationClass"
    >
      <div class="flex justify-between">
        <div class=""">
          <!-- ColoseAdmin -->
          <ClockHidden class="sm:hidden" v-if="isDrawerOpen" @click="closeDrawer" />
          <span class="ml-1 text-xs sm:hidden">Close Menu</span>
        </div>
        <!-- ImgComponent -->
        <ImgComponent />
      </div>
      <div class="p-4 text-center">
        <h1 class="text-xl font-bold opacity-1">
          Welcome to my profile!
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



const { isDrawerOpen, animationClass, openDrawer, closeDrawer } =
  useDrawerControl();
</script>

<style scoped>



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
