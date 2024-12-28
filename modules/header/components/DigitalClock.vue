<template>
  <div class="flex justify-center items-center mb-12">
    <div class="w-32 sm:w-40 h-8 flex justify-between items-center">
      <div
        :class="[
          'digital-clock w-32 text-xs  flex justify-center items-center',
          { 'opacity-clock': clockOpacity },
        ]"
      >
        <span class="time w-full block text-center">{{ time }}</span>
      </div>
      <ClockHidden @click="turnOffOpacity" v-if="!clockOpacity" />
      <ClockShow v-else @click="turnOffOpacity" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useClock } from "../composables/useClock";
import ClockHidden from "./icons/ClockHidden.vue";
import ClockShow from "./icons/ClockShow.vue";

const { time, clockOpacity, turnOffOpacity } = useClock();
</script>

<style scoped>
.digital-clock {
  transition: opacity 1s ease-in-out;
}

.opacity-clock {
  opacity: 0;
  color: var(--primary-8);
}
</style>
