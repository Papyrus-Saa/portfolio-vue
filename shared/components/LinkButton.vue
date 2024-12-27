<template>
   <button class="w-20 h-7 border-b px-1  hover:dark:bg-indigo-950 hover:bg-slate-200 hover:border-none hover:rounded-sm  duration-300">
      <a
        href="https://next-react-git-main-ramons-projects-67ad5b82.vercel.app/dashboard/main"
        target="_blank"
        rel="noopener noreferrer"
        class="link-class"
      >
        <slot/>
      </a>
    </button>
</template>

<style scoped>
.link-class {
  color: var(--selected-color);
}
</style>
