<script setup lang="ts">
import ContentChild from "~/shared/components/ContentChild.vue";
import germanShopThumbNail from "~/public/images/image-2.png";
</script>

<template>
  <div class="relative">
    <ContentChild
    :is-link-available="true"
      :is-code-available="true"
      :thumbnail-img="germanShopThumbNail"
      :in-progress="true"
      title="German | Shop"
    >
      <p class="mb-4">
        This is a clone of Tesla's Shop, although not an exact replica, as I’ve
        customized some styles and features to give it a unique touch. The
        project leverages Next.js, Docker, Tailwind CSS, Prisma, and TablePlus,
        creating an efficient and visually appealing solution while maintaining
        scalability and performance.
      </p>
    </ContentChild>
  </div>
</template>

<style scoped></style>
