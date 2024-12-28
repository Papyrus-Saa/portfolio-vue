<script setup lang="ts">
import LinkButton from "~/shared/components/LinkButton.vue";
import LinkIcon from "~/shared/icons/LinkIcon.vue";
</script>

<template>
     <div class="flex flex-col justify-between text-center p-2 mb-8 dark:bg-black bg-gray-200 w-full py-6">

      <h3 class="font-bold">German | Shop</h3>
      <p>This is a clone of Tesla's Shop, although not an exact replica, as I’ve customized some styles and features to give it a unique touch. The project leverages Next.js, Docker, Tailwind CSS, Prisma, and TablePlus, creating an efficient and visually appealing solution while maintaining scalability and performance.</p>
      <LinkButton class="mx-auto">
      <a
        href="https://german-shop-d5ycjkyhj-ramons-projects-67ad5b82.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        class="link-class"
      >
      <LinkIcon />
    </a>
    </LinkButton>
     </div>
</template>

<style scoped></style>
