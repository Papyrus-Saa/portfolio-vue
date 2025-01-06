<template>
  <div class="w-4 h-4  flex justify-center items-center cursor-pointer">
    <svg
    class="colorAnimated"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M20 4V20M4 12H16M4 12L8 8M4 12L8 16"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.colorAnimated {
  animation: defaultbordershift 10s infinite linear;
}
</style>
