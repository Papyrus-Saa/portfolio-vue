<template>
  <div :class="['color-selector flex', {'containerHidden' : isVisibled}]">
    <div class="color-options grid grid-cols-2 grid-rows-6 gap-2 p-2 bg-gray-900">
      <div
        v-for="color in colorOptions"
        :key="color"
        class="color-option"
        :style="{ backgroundColor: color }"
        @click="selectColor(color)"
      ></div>
    </div>
    <div class="flex justify-center items-center">
      <div class="containerArrow bg-gray-900 rounded-tr-xl rounded-br-xl p-1">
        <OpenSetColor v-if="isVisibled" @click="changeVisibility"/>
        <CloseSetColor v-else @click="changeVisibility"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref } from "vue";
import { useGlobalColor } from "~/theme/composables/useAnimationControl";
import OpenSetColor from "./OpenSetColor.vue";
import CloseSetColor from "./CloseSetColor.vue";

const isVisibled = ref<boolean>(true);

const changeVisibility = () => {

  isVisibled.value = !isVisibled.value;
}

const { setColor } = useGlobalColor();

const colorOptions = [
  "#C94C4C",
  "#475569",
  "#b57c00",
  "#ff96c9",
  "#1b4fff",
  "#ffea94",
  "#663399",
  "#1e1b4b",
  "#39aaaa",
  "#9ACD32",
  "#B20000",
  "#0e7490",
];

const selectColor = (color: string) => {
  setColor(color);
};
</script>

<style scoped>
.color-selector {
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 2500;
  transition: all 0.6s ease-in-out;
}

.containerHidden {
  position: fixed;
  top: 50%;
  left: -40px;
  transform: translateY(-50%);
}

.containerArrow {
  animation: defaultbordershift 10s infinite linear;
}

.color-options {
  border-radius: 5px;
}

.color-option {
  width: 12px;
  height: 12px;
  border-radius: 3px;
  cursor: pointer;

  transition: transform 0.2s ease;
}

.color-option:hover {
  transform: scale(1.2);
}
</style>
