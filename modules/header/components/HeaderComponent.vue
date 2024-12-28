<template>
  <div class="">
    <DigitalClock />
    <ToggleModeButton />
  </div>
</template>

<script setup lang="ts">


const { isDrawerOpen, animationClass, openDrawer, closeDrawer } =
useDrawerControl();

import ToggleModeButton from "~/theme/components/ToggleModeButton.vue";
import DigitalClock from "./DigitalClock.vue";
import { useDrawerControl } from "~/modules/drawer/composables/useDreawerScroll";

</script>
