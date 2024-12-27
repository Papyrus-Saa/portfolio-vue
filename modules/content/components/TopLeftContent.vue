<script setup lang="ts">
import LinkButton from "~/shared/components/LinkButton.vue";
import LinkIcon from "~/shared/icons/LinkIcon.vue";
</script>

<template>
  <div
    class="topLeftContent w-full h-full flex flex-col justify-around items-center p-2 mb-8"
  >
    <h3 class="mb-4 text-2xl">Here do you will find the Pokémon's app</h3>
    <img
      class="w-20 h-20 object-cover rounded-full mb-4"
      src="/assets/img/pokemon-app.png"
      alt="pokemon-avatar"
    />
    <p>
      In this Pokémon project, I used Next.js with getStaticPaths and
      getStaticProps to dynamically generate and revalidate 151 static pages
      using the Pokémon API. Tailwind CSS was implemented for a clean design,
     <span class="text-yellow-500 font-semibold">but the project is not responsive</span>. Dynamic metadata enhances SEO and user
      experience. <span class="text-red-500">Non-existing Pokémon requests redirect users to a custom 404
        page</span>.
    </p>

    <LinkButton>
      <LinkIcon />
    </LinkButton>
  </div>
</template>

<style scoped></style>
