<script setup lang="ts">
import ContentChild from "~/shared/components/ContentChild.vue";
import oldPortfolioThumb from '~/public/images/old-o-thumb.png'
</script>

<template>
 <div
 class="relative"
 >
  <ContentChild
    :is-link-available="true"
    :is-code-available="true"
    :in-progress="false"
    :thumbnail-img="oldPortfolioThumb"
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
 </div>
</template>

<style scoped></style>
