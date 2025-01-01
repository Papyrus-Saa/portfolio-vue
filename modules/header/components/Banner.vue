<template>
   <div
            class="fixed background flex flex-col justify-between w-full h-[200px] sm:h-[300px] md:h-[400px] xl:h-[400px]  p-6 mb-10 text-gray-200"
          >
            <h1 class="text-xl md:text-4xl  mr-4">
              Frontend Developer
            </h1>

            <span class="text-xl md:text-3xl text-end">
              JavaScript | TypeScript | Vue.js | React.js
            </span>
          </div>
</template>

<style scoped>
.background {
  position: relative;
  background-image: url("/public/images/matrix.jpg");
  background-size: cover;
  background-position: center;
  overflow: hidden;
  box-shadow: 0px 0px 19px 0px var(--selected-color);
}

</style>
