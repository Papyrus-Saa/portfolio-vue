<template>
  <div
    v-if="initialScreen"
    class="flex justify-center items-center fixed top-0 right-0 w-full h-screen z-20 bg-neutral-950 opacity-90"
  >
    <div class="flex flex-col">
      <h1 class="text-gray-700 font-serif text-xl">Hola, bienvenid@...😊</h1>
      <button
        @click="offInitailScreen"
        class="px-2 bg-red-700 rounded hover:bg-red-600 text-white"
      >
        Start
      </button>
    </div>
  </div>
  <div
    :class="[
      'text-black bg-gray-200  dark:text-white dark:bg-neutral-950 duration-500',
      { ' blur-lg': initialScreen },
    ]"
  >
    <!-- Header -->
    <!-- Scroll -->
    <main class="h-screen overflow-auto">
      <!-- <div class=" sm:mr-28   sm:mx-auto  sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-4 sm:p-4 lg:justify-items-center w-calc-remaining"> -->
      <div class="sm:flex justify-end">
        <Drawer />
        <div :class="['w-full sm:w-calc-remaining']">
         <Banner/>

          <HeaderComponent />
          <TitleComponent />
          <MySocialMedia/>
          <div
            class="grid lg:grid-cols-2 gap-10 place-items-center xl:grid-cols-3 px-12 mb-12"
          >
            <TopLeftContent />

            <TopRightContent />

            <BottomLeftContent />

            <BottomRightContent />

            <RockPaperScissors/>

          </div>
        </div>
      </div>
      <slot />
      <!-- Footer -->
    </main>
    <InfiniteScroller />

    <SetColors />
  </div>
</template>

<script setup lang="ts">
import TopLeftContent from "~/modules/content/components/TopLeftContent.vue";
import TitleComponent from "~/modules/content/components/TitleComponent.vue";
import Drawer from "~/modules/drawer/components/Drawer.vue";
import HeaderComponent from "~/modules/header/components/HeaderComponent.vue";
import InfiniteScroller from "~/modules/InfiniteScroll/components/InfiniteScroller.vue";
import SetColors from "~/shared/components/SetColors.vue";
import TopRightContent from "~/modules/content/components/TopRightContent.vue";
import BottomLeftContent from "~/modules/content/components/BottomLeftContent.vue";
import BottomRightContent from "~/modules/content/components/BottomRightContent.vue";
import { useDrawerControl } from "~/modules/drawer/composables/useDreawerScroll";
import MySocialMedia from "~/modules/social-media/MySocialMedia.vue";
import Banner from "~/modules/header/components/Banner.vue";
import RockPaperScissors from "~/modules/content/components/RockPaperScissors.vue";

const initialScreen = ref<boolean>(true);

const offInitailScreen = () => {
  setTimeout(() => {
    initialScreen.value = false;
  }, 500);
};

// const { isDrawerOpen, animationClass, openDrawer, closeDrawer } =
//   useDrawerControl();
</script>

<style scoped>
.align-end {
  margin-left: auto;
}
.loading-dots {
  font-family: Arial, sans-serif;
  font-size: 16px;
  position: relative;
}

.dots {
  display: inline-block;
  width: 1em;
  text-align: left;
}

.dots::after {
  content: "..."; /* Contenido inicial */
  display: inline-block;
  animation: dots-animation 2s infinite;
}

@keyframes dots-animation {
  0% {
    content: "";
  }
  33% {
    content: ".";
  }
  66% {
    content: "..";
  }
  100% {
    content: "...";
  }
}
</style>
