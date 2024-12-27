<template>
  <div>
    <!-- Scroller -->
    <div class="scroller" data-speed="fast" data-animated="true">
      <ul class="tag-list scroller-inner">
        <li
          class="text-gray-500 p-4
           py-2 rounded-xl font-sans"
          v-for="(item, index) in textItems"
          :key="'text-' + index"
        >
          <div>
            <span class="titleScroller">{{ item }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useInfiniteScroll } from "../composables/useInfiniteScroll";

const { textItems } = useInfiniteScroll();
</script>

<style scoped>
.title {
  text-align: center;
}

.scroller {
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  max-width: 600px;
  overflow: hidden;
  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    white 20%,
    white 80%,
    transparent
  );
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
}

.scroller-inner {
  display: inline-flex; /* Para asegurar flujo continuo */
  white-space: nowrap; /* Evita saltos de línea */
  animation: scroll var(--animation-duration, 30s) linear infinite;
}

.tag-list {
  margin: 0;
  padding-inline: 0;
  list-style: none;
  display: flex;
  gap: 1rem;
}

@keyframes scroll {
  to {
    transform: translateX(-695px);
  }
}

.titleScroller {
  color: var(--selected-color);
}
</style>
