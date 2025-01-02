<template>
 <div
  class="containerDiv relative w-full max-w-[500px] border border-gray-100 dark:border-neutral-900 p-4 rounded mb-6 md:mx-auto"
  @mouseenter="thumbnail = true"
  @mouseleave="thumbnail = false"
>
    <div class="w-full flex justify-between items-center mb-8">
      <h3 class="font-bold">{{ title }}</h3>
      <a :href="codeLink" target="_blank" rel="noopener noreferrer">
        <span
          v-if="isCodeAvailable"
          class="p-1 hover:dark:text-blue-600  cursor-pointer"
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
    class="absolute top-0 left-0 w-[100px] h-[80px] pointer-events-none"
  >
    <img
      class="image w-full h-full object-fill duration-500"
      :src="thumbnailImg"
      :alt="alt"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LinkIcon from "../icons/LinkIcon.vue";
import LinkButton from "~/shared/components/LinkButton.vue";

interface Props {
  title: string;
  codeLink?: string;
  alt?: string;
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

.image {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
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

@-webkit-keyframes zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}
@keyframes zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}

</style>
