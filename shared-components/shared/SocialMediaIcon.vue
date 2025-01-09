<template>
  <div class="colorIcon  p-1 w-8 h-8 rounded-lg hover:dark:border-neutral-700 hover:border-neutral-400    border border-gray-100  dark:border-neutral-900 duration-400">
    <slot/>
  </div>
</template>


<style scoped>

.colorIcon {
  box-shadow: 0px 0px 18px 3px var(--selected-color);
  animation: defaultbackgroundshift 20s infinite linear;
}

</style>
