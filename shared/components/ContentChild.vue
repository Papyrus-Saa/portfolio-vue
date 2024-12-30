<template>
  <div
    class="relative w-full max-w-[500px] dark:bg-neutral-950 border border-gray-100 dark:border-neutral-900 hover:shadow-xl dark:shadow-md hover:dark:shadow-gray-700 duration-500 p-4 rounded mb-6 md:mx-auto"
    @mouseenter="thumbnail = true"
    @mouseleave="thumbnail = false"
  >
    <div class="w-full flex justify-between items-center mb-8">
      <h3 class="font-bold">{{ title }}</h3>
      <a :href="codeLink" target="_blank" rel="noopener noreferrer">
        <span
          v-if="isCodeAvailable"
          class="p-1 hover:dark:text-blue-600 duration-500 cursor-pointer"
        >
          &lt;/&gt;</span
        >
      </a>
    </div>
    <slot />
    <div class="flex justify-between">
      <LinkButton v-if="isLinkAvailable">
        <a
          :href="href"
          target="_blank"
          rel="noopener noreferrer"
          class="link-class"
        >
          <LinkIcon />
        </a>
      </LinkButton>
      <span
        v-if="inProgress"
        :class="[
          'loading-dots text-orange-400',
          { 'align-end': !isLinkAvailable },
        ]"
      >
        In progress<span class="dots text-orange-400 text-bold"></span>
      </span>
    </div>
  </div>

  <div
    v-if="thumbnail"
    class="absolute top-0 left-0 w-[200px] h-[140px] pointer-events-none"
  >
    <img
      class="w-full h-full object-fill"
      :src="thumbnailImg"
      alt="german-shop-pic"
    />
    <!-- src="/assets/img/mini-german-shop.png" -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LinkIcon from "../icons/LinkIcon.vue";
import LinkButton from "~/shared/components/LinkButton.vue";

interface Props {
  title: string;
  codeLink?: string;
  href?: string;
  inProgress: boolean;
  thumbnailImg?: string;
  isCodeAvailable: boolean;
  isLinkAvailable: boolean;
}

const thumbnail = ref<boolean>(false);

defineProps<Props>();
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
