<script setup lang="ts">
import ContentChild from "~/shared-components/shared/ContentChild.vue";
import thumbPraxis from "~/public/images/thumb-praxis.png";
</script>

<template>
  <div class="relative">
    <ContentChild
      alt="praxis - pic"
      :is-link-available="true"
      :is-code-available="true"
      :in-progress="false"
      :thumbnail-img="thumbPraxis"
      title="My First Project with React"
      code-link="https://github.com/Papyrus-Saa/the-praxis"
      href="https://praxis-sanchez.netlify.app/  "
    >
      <div class="flex">
        <!-- <img
        class="w-fit-h-auto mb-8 object-cover"
        src="/public/images/image-3.png"
        alt="old-portfolio-pic"
      /> -->

        <p class="mb-4">
          Some time ago, I worked on my first project with React, an experience
          that allowed me to explore the capabilities of this powerful
          framework. One of the key features was implementing a Single Page
          Application (SPA) architecture, enabling pages to update dynamically
          without the need for a full reload. The focus of the project was to
          maintain a simple yet effective design tailored to a practical
          purpose. This experience helped me better understand how React
          simplifies building modern user interfaces and enhances the experience
          for both developers and users. It was a great first step in my journey
          with React development.
        </p>
      </div>
    </ContentChild>
  </div>
</template>

<style scoped></style>
