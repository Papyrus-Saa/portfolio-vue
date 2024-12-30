<script setup lang="ts">
import DownloadIcon from '~/shared/components/DownloadIcon.vue';
</script>

<template>
    <div class="flex flex-col items-center text-center  p-6 mx-auto  rounded-md mb-20">
      <h3 class="text-xtext-xl font-semibold mb-4 ">Lebenslauf</h3>

      <div class="imgContainerCv p-4">
        <img
          src="/public/images/image-1.png"
          alt="Imagen de currículum"
          class="w-full h-full object-cover"
        />
      </div>
      <a
        href="/LebenslaufRamon.pdf"
        download="LebenslaufRamon.pdf"
        class="flex px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 hover:text-green-500 transition w-fit mx-auto mb-4"
      >
        <DownloadIcon />
      </a>
    </div>
</template>

<style scoped>

.imgContainerCv {
  width: 200px;
  height: 270px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
