<template>
  <ul class="">
    <li v-for="inf in barInfo" :key="inf.name" class="flex flex-col">
      <div :style="{ color: inf.color }">
        <div class="flex items-center">
          <p class="mr-2">{{ inf.separator }}</p>
          <p class="text-xs font-bold">{{ inf.name }}:</p>
        </div>
      </div>
      <div class="flex items-center">
        <div class="text-xs">
          <p class="text-gray-400">{{ inf.details }}</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
const barInfo = [
  {
    name: "HTML",
    details: "HTML markup for web pages",
    separator: "|",
    color: "#dc2626",
  },
  {
    name: "CSS",
    details: "CSS styling for web pages",
    separator: "|",
    color: "#1572B6",
  },
  {
    name: "JS",
    details: "JavaScript for interactive functionality",
    separator: "|",
    color: "#F7DF1E",
  },
  {
    name: "TS",
    details: "TypeScript - typed JavaScript",
    separator: "|",
    color: "#3178C6",
  },
  {
    name: "VUE",
    details: "Vue.js framework for UI",
    separator: "|",
    color: "#42b883",
  },
  {
    name: "TW",
    details: "Tailwind CSS framework",
    separator: "|",
    color: "#38B2AC",
  },
  {
    name: "Rc",
    details: "React library for interfaces",
    separator: "|",
    color: "#61DAFB",
  },
];
</script>

<style scoped>
ul {
  list-style: none;
  /* background-color: var(--primary-color); */
}
</style>
