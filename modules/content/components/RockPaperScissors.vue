<script setup lang="ts">
import ContentChild from "~/shared-components/shared/ContentChild.vue";
import thumbRPC from "~/public/images/RPC.png";
</script>

<template>
<div class="relative">
    <ContentChild
      alt="rockpaperscissors - pic"
      :is-link-available="true"
      :is-code-available="true"
      :in-progress="false"
      :thumbnail-img="thumbRPC"
      title="Rock Paper Scissors"
      code-link="https://github.com/Papyrus-Saa/Rock-paper-scissors"
      href="https://papyrus-saa.github.io/Rock-paper-scissors/"
    >
      <div class="flex">
        <!-- <img
        class="w-fit-h-auto mb-8 object-cover"
        src="/public/images/image-3.png"
        alt="old-portfolio-pic"
      /> -->

        <p class="mb-4">
          This project was one of the first I developed when I started learning JavaScript, and I can say it was a very rewarding experience. Although it was challenging at first to grasp the logic needed to make the game work, I gradually understood key concepts like conditionals, events, and functions. Implementing the classic Rock, Paper, Scissors game not only helped me reinforce my foundational JavaScript skills but also improved my problem-solving abilities.
        </p>
      </div>
    </ContentChild>
  </div>
</template>
