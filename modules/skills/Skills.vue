<template>
  <div class="skills-container hidden md:block">
    <div>
      <ul class="list-none flex">
        <li class=" mr-4 flex flex-wrap font-bold" v-for="skill in knownSkills" :key="skill">{{ skill }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SkillsDisplay",
  data() {
    return {
      knownSkills: [
        "GitHub",
        "GitLab",
        "Nuxt",
        "Vue",
        "Next.js",
        "React",
        "Tailwind CSS",
        "Bootstrap",
        "Daisy UI",
        "HTML",
        "CSS",
        "TypeScript",
        "JavaScript"
      ],
      learningSkills: ["Node.js", "NestJS"],
    };
  },
});
</script>

