<template>
  <section class="education-section p-2 mx-auto rounded-md mb-10">
    <h2 class="text-xl font-semibold mb-4 text-center">
      Education and Training
    </h2>
    <ul class="space-y-3 p-6">
      <li
        v-for="(item, index) in educationData"
        :key="index"
        class="flex items-center justify-between"
      >
        {{ item.title }}
        <OpenSetColor
          class="hover:bg-gray-500 cursor-pointer duration-500 rounded-sm"
          @click.stop="selectItem(index)"
        />
      </li>
    </ul>

    <div v-if="selectedIndex !== null" class="education-card p-4">
      <h3 class="text-lg font-medium mb-2">
        {{ educationData[selectedIndex].title }}
      </h3>
      <p class="mb-4">
        {{ educationData[selectedIndex].content }}
      </p>
      <button
        class="dark:text-gray-600 text-sm underline hover:text-blue-800"
        @click.stop="toggleShowMore"
      >
        {{ showMore ? "Read less" : "Read more" }}
      </button>
      <p v-if="showMore" class="mt-2">
        {{ educationData[selectedIndex].more }}
      </p>
    </div>
  </section>
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
