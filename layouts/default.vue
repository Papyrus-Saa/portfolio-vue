<template>
  <div :class="['text-black dark:text-white dark:bg-neutral-900 duration-500']">
    <!-- Header -->
    <!-- Scroll -->
    <main class="h-screen overflow-auto">
      <!-- <div class=" sm:mr-28   sm:mx-auto  sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-4 sm:p-4 lg:justify-items-center w-calc-remaining"> -->
      <div class="sm:flex justify-end">
        <Drawer />
        <div :class="['w-full  sm:w-calc-remaining sm:px-6']">
          <HeaderComponent />

          <TitleComponent />
          <TopLeftContent />

          <TopRightContent />

          <BottomLeftContent />

          <BottomRightContent />
        </div>
      </div>

      <slot />
      <!-- Footer -->
    </main>
    <InfiniteScroller />

    <!-- <Testingg/> -->
    <SetColors />
  </div>
</template>

<script setup lang="ts">
import TopLeftContent from "~/modules/content/components/TopLeftContent.vue";
import TitleComponent from "~/modules/content/components/TitleComponent.vue";
import BarPro from "~/modules/drawer/components/BarPro.vue";
import Drawer from "~/modules/drawer/components/Drawer.vue";
import HeaderComponent from "~/modules/header/components/HeaderComponent.vue";
import InfiniteScroller from "~/modules/InfiniteScroll/components/InfiniteScroller.vue";
import SetColors from "~/shared/components/SetColors.vue";
import TopRightContent from "~/modules/content/components/TopRightContent.vue";
import BottomLeftContent from "~/modules/content/components/BottomLeftContent.vue";
import BottomRightContent from "~/modules/content/components/BottomRightContent.vue";
import { useDrawerControl } from "~/modules/drawer/composables/useDreawerScroll";

const { isDrawerOpen, animationClass, openDrawer, closeDrawer } =
  useDrawerControl();
</script>

<style scoped></style>
