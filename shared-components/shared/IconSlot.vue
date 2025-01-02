<template>
  <div
    :class="[
      'iconSlot w-4 h-4 text-secondary-10 dark:text-primary-6 cursor-pointer',
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.iconSlot {
  color: var(--selected-color);
}
</style>
