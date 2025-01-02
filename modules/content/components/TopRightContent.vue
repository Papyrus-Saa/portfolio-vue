<script setup lang="ts">
import ContentChild from "~/shared-components/shared/ContentChild.vue";

import pokemonThumbNail from "~/public/images/pokemon-thumnail.png";
</script>
<template>
  <div class="relative">
    <ContentChild
      alt="pokemonapp - pic"
      :is-link-available="true"
      :is-code-available="true"
      :thumbnail-img="pokemonThumbNail"
      :in-progress="false"
      title="Pokémons"
      code-link="https://github.com/Papyrus-Saa/next-react"
      href="https://next-react-bunrzfpx2-ramons-projects-67ad5b82.vercel.app/dashboard/main"
    >
      <div class="topLeftContent py-6">
        <p class="paragraph">
          In this Pokémon project, I used Next.js with getStaticPaths and
          getStaticProps to dynamically generate and revalidate 151 static pages
          using the Pokémon API. Tailwind CSS was implemented for a clean
          design, but the project is not responsive... Dynamic metadata enhances
          SEO and user experience. Non-existing Pokémon
          requests redirect users to a custom 404 page
        </p>
      </div>
    </ContentChild>
  </div>
</template>

<style scoped></style>
