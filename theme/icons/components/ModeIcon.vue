<template>
  <button
    class="centered-div"
    >
      <span :class="['iconMode bg-primary-20 w-8 h-8 rounded-full']"></span>
    </button>
</template>

<style scoped>

.centered-div {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  padding: 0.5em;
  background-color: rgba(2, 85, 85, 0.151);
  transition: all 2s ease;
}

.iconMode {
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 30%;
  animation: colorShift 10s infinite linear;
  transition: width 0.4s ease-in-out, height 0.4s ease-in-out,
    background-color 0.4s ease-in-out;
}

@keyframes colorShift {
  0% {
    box-shadow: 0px 0px 34px 7px var(--primary-9);
    border-bottom: 2px solid var(--primary-9);
  }
  10% {
    box-shadow: 0px 0px 34px 7px var(--primary-13);
    border-top: 2px solid var(--secundary-10);
  }
  20% {
    box-shadow: 0px 0px 34px 8px var(--secondary-6);
    border-left: 2px solid var(--cyan-11);
  }
  30% {
    box-shadow: 0px 0px 34px 9px var(--secondary-14);
    border-right: 2px solid var(--purple-9);
  }
  40% {
    box-shadow: 0px 0px 34px 10px var(--purple-6);
    border-bottom: 2px solid var(--surface-3);
  }
  50% {
    box-shadow: 0px 0px 34px 11px var(--purple-10);

    border-top: 2px solid var(--purple-6);
  }
  60% {
    box-shadow: 0px 0px 34px 10px var(--cyan-5);
    border-left: 2px solid var(--cyan-6);
  }
  70% {
    box-shadow: 0px 0px 34px 15px var(--cyan-12);
    border-right: 2px solid var(--purple-6);
  }
  80% {
    box-shadow: 0px 0px 34px 11px var(--secondary-8);
    border-bottom: 2px solid var(--primary-5);
  }
  90% {
    box-shadow: 0px 0px 34px 7px var(--cyan-11);
    border-top: 2px solid var(--cyan-5);
  }
  100% {
    box-shadow: 0px 0px 34px 7px var(--primary-9);
    border-left: 2px solid var(--primary-9);
  }
}
</style>
