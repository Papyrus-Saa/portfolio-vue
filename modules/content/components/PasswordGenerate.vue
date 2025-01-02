<script setup lang="ts">
import ContentChild from "~/shared/components/ContentChild.vue";
import passwordGenerateThumnail from "~/public/images/password-generate.png";
</script>

<template>
  <div class="relative">
    <ContentChild
      alt="Password generate pic"
      :is-link-available="true"
      :is-code-available="true"
      :thumbnail-img="passwordGenerateThumnail"
      :in-progress="false"
      title="Password Generate"
      code-link="https://github.com/Papyrus-Saa/Password-generator2"
      href="https://papyrus-saa.github.io/Password-generator2/"
    >
      <p class="mb-4">
        In this random password generator project, I went through tough moments,
        losing motivation and taking days off from coding. However, one day I
        sat down with determination and achieved the result I wanted, even
        though I had access to the professor's class. My goal was to solve the
        problem on my own, and I succeeded!
      </p>
    </ContentChild>
  </div>
</template>

<style scoped></style>
