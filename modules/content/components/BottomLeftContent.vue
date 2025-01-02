<script setup lang="ts">
import BarMeaning from "~/modules/drawer/components/BarMeaning.vue";
import BarPro from "~/modules/drawer/components/BarPro.vue";
import ContentChild from "~/shared-components/shared/ContentChild.vue";
</script>

<template>
  <ContentChild
    :is-link-available="false"
    :is-code-available="false"
    thumbnail-img=""
    :in-progress="true"
    title="Learning Progress"
    code-link="https://github.com/Papyrus-Saa/german-shop"
    href="https://german-shop-d5ycjkyhj-ramons-projects-67ad5b82.vercel.app/"
  >
    <BarPro />
    <BarMeaning />
  </ContentChild>
</template>
