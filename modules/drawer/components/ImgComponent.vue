<template>
  <div class="imgContainer p-2 w-48">
    <img
      class="imagePic w-full h-auto object-cover border-b border-secondary-10 dark:border-primary-6 cursor-zoom-in"
      src="../../../assets/img/r-pic.JPG"
      alt="ramons-pic"
    />
    <span class='titlePic text-xs text-center block'
      >Ramon Saavedra</span
    >
  </div>
</template>

<script setup lang="ts">



</script>
<style scoped>
.imagePic {
  box-shadow: 0px 0px 12px 6px rgba(0,0,0,0.75);
  border-bottom: 1px solid var(--selected-color);
}

.imgContainer {
  transition: width 1s ease-in-out, box-shadow 1s ease-in-out;
}

:hover.imgContainer {
  width: 100%;
  box-shadow: 0px 0px 12px 6px var(--selected-color);
  transition-delay: 0.2s;
}

.titlePic {
  color: var(--selected-color);
}
</style>
