<template>
  <section class="p-2 mx-auto mb-10 rounded-md education-section">
    <h2 class="mb-4 text-xl font-semibold text-center">
      Education and Training
    </h2>
    <ul class="p-6 space-y-3">
      <li
        v-for="(item, index) in educationData"
        :key="index"
        class="flex items-center justify-between"
      >
        {{ item.title }}
        <OpenSetColor
          class="duration-500 rounded-sm cursor-pointer hover:bg-gray-500"
          @click.stop="selectItem(index)"
        />
      </li>
    </ul>

    <div v-if="selectedIndex !== null" class="p-4 education-card">
      <h3 class="mb-2 text-lg font-medium">
        {{ educationData[selectedIndex].title }}
      </h3>
      <p class="mb-4">
        {{ educationData[selectedIndex].content }}
      </p>
      <button
        class="text-sm underline dark:text-gray-600 hover:text-blue-800"
        @click.stop="toggleShowMore"
      >
        {{ showMore ? "Read less" : "Read more" }}
      </button>
      <p v-if="showMore" class="mt-2">
        {{ educationData[selectedIndex].more }}
      </p>
    </div>
  </section>

  <div class="w-full h-px bg-black dark:bg-slate-500"/>
</template>

<script setup lang="ts">
import OpenSetColor from "~/shared-components/shared/OpenSetColor.vue";
import { useEducation } from "../composables/useEducation";

const { educationData, selectedIndex, showMore, selectItem, toggleShowMore } =
  useEducation();
</script>

<style scoped>
.education-card {
  animation: fadeIn 0.6s ease-in-out;
  box-shadow: inset 0px 0px 29px 0px rgb(27, 27, 27);
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
