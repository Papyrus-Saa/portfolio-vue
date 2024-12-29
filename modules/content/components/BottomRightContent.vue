<script setup lang="ts">
import ContentChild from "~/shared/components/ContentChild.vue";
</script>

<template>
  <ContentChild
    :is-link-available="true"
    :is-code-available="true"
    :in-progress="false"
    title="Old Portfolio"
    code-link="https://github.com/Papyrus-Saa/Portfolio-in-progress"
    href="https://papyrus-saa.github.io/Portfolio-in-progress/"
  >
    <div class="flex">
      <img
        class="w-fit-h-auto mb-8 object-cover"
        src="/public/images/image-3.png"
        alt="old-portfolio-pic"
      />
    </div>
  </ContentChild>
</template>

<style scoped></style>
