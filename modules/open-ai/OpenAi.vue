<script setup lang="ts">
import ContentChild from "~/shared-components/shared/ContentChild.vue";
import germanShopThumbNail from "~/public/images/image-2.png";
</script>

<template>
  <div class="relative">
    <ContentChild
    :is-link-available="false"
    :is-code-available="false"
    thumbnail-img=""
    :in-progress="true"
    title="OpenAI | React | NestJS"
    code-link="https://github.com/Papyrus-Saa/german-shop"
    href="https://german-shop-d5ycjkyhj-ramons-projects-67ad5b82.vercel.app/"
  >
      <p class="mb-4">

      </p>
    </ContentChild>
  </div>
</template>

<style scoped></style>
