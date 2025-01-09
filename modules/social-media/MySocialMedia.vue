<template>
  <div class="flex flex-col xl:flex-row sm:h-[80px]  items-center justify-around w-full  mb-6">
    <div
      class="w-[100px] flex justify-between px-2 items-center dark:border-gray-900 rounded-md"
    >
      <a class="block" href="https://github.com/Papyrus-Saa" target="_blank">
        <GithubIcon />
      </a>

      <a class="block"
        href="https://www.linkedin.com/feed/?trk=sem-ga_campid.17342682713_asid.148803897556_crid.725756047902_kw.linkedin_d.c_tid.kwd-148086543_n.g_mt.e_geo.9117066"
        target="_blank"
      >
        <LinkedinIcon />
      </a>
    </div>
    <Skills />
  </div>
</template>

<script setup lang="ts">
import GithubIcon from "~/shared-components/shared/icons/GithubIcon.vue";
import LinkedinIcon from "~/shared-components/shared/icons/LinkedinIcon.vue";
import Skills from "../skills/Skills.vue";
</script>
