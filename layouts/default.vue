<template>
  <div
    v-if="initialScreen"
    class="colorShadow flex justify-center items-center fixed top-0 right-0 w-full h-screen z-20 bg-black opacity-90"
  >
    <div class="flex flex-col">
      <h1 class="text-white font-serif text-4xl mb-6">Hola, bienvenid@ !!!</h1>
      <button
        @click="offInitailScreen"
        class="colorShadow w-fit px-1 mx-auto bg-red-700 rounded hover:bg-red-600 text-white"
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
    <main class="h-screen overflow-auto">
      <div class="sm:flex justify-end">
        <Drawer />
        <div :class="['w-full sm:w-calc-remaining']">
          <Banner />

          <HeaderComponent />
          <TitleComponent />
          <MySocialMedia />
          <div
            class="grid lg:grid-cols-2 gap-10 place-items-center xl:grid-cols-3 lg:px-12 mb-12"
          >
            <!-- <OpenAi /> -->

            <TopLeftContent />

            <TopRightContent />

            <BottomRightContent />

            <RockPaperScissors />

            <PasswordGenerate />

            <BottomLeftContent />
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
import SetColors from "~/shared-components/shared/SetColors.vue";
import TopRightContent from "~/modules/content/components/TopRightContent.vue";
import BottomLeftContent from "~/modules/content/components/BottomLeftContent.vue";
import BottomRightContent from "~/modules/content/components/BottomRightContent.vue";

import MySocialMedia from "~/modules/social-media/MySocialMedia.vue";
import Banner from "~/modules/header/components/Banner.vue";
import RockPaperScissors from "~/modules/content/components/RockPaperScissors.vue";
import PasswordGenerate from "~/modules/content/components/PasswordGenerate.vue";
import OpenAi from "~/modules/open-ai/OpenAi.vue";

const initialScreen = ref<boolean>(true);

const offInitailScreen = () => {
  setTimeout(() => {
    initialScreen.value = false;
  }, 500);
};
</script>

<style scoped>
.colorShadow {
  animation: defaultbackgroundshift 20s infinite linear;
}
</style>
