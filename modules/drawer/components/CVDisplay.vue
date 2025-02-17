<script setup lang="ts">
import DownloadIcon from '~/shared-components/shared/DownloadIcon.vue';
</script>

<template>
    <div class="flex flex-col items-center p-6 mx-auto mb-20 text-center rounded-md">
      <!-- <h3 class="mb-4 font-semibold text-xtext-xl ">Lebenslauf</h3>

      <div class="p-4 imgContainerCv">
        <img
          src="/public/images/image-1.png"
          alt="Img CV"
          class="object-cover w-full h-full"
        />
      </div>
      <a
        href="/lebensLauf.pdf"
        download="lebensLaufRamon.pdf"
        class="flex px-4 py-2 mx-auto mb-4 transition bg-gray-100 rounded dark:bg-gray-800 hover:text-green-500 w-fit"
      >
        <DownloadIcon />
      </a> -->
       <h2 class="px-3 py-1 mb-4 border-b">Reference</h2>


      <h3 class="mb-4 font-semibold text-xtext-xl ">Training Certificate</h3>
      <div class="p-4 imgContainerCv">
        <img
          src="/public/zeugnis.png"
          alt="Img Zeugnis"
          class="object-cover w-full h-full"
        />
      </div>
      <a
        href="/Ausbildungszeugnis.pdf"
        download="Ausbildungszeugnis.pdf"
        class="flex px-4 py-2 mx-auto mb-4 transition bg-gray-100 rounded dark:bg-gray-800 hover:text-green-500 w-fit"
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
