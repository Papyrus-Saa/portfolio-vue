<template>
  <div :class="['combined-component ', { 'centered-div-hidden': isHidden }]">
    <!-- Botón -->
    <button
      @click="toggleTheme"
      @mouseover="setShowShadow(true)"
      @mouseleave="setShowShadow(false)"
      :class="[
        'buttonIcon rounded-full',
        {
          'centered-div-hidden': isHidden,
          'iconMode-disabled': isHidden,

        },
      ]"
    >
      <span class="iconMode  rounded-full bg-gray-600 dark:bg-purple-500"></span>
    </button>

    <!-- Flecha -->
    <div
      @click="hiddenToggleButton"
      :class="[
        'arrowHiddenToggleButton   cursor-pointer',
        { 'arrow-hidden': isHidden },
        showShadow ? 'arrow-hidden-shadow' : '',
      ]"
    >
      <ArrowIcon />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAppTheme } from "../composables/useTheme";
import ArrowIcon from "../icons/components/ArrowIcon.vue";

const { isHidden, toggleTheme, hiddenToggleButton, canToggleTheme } =
  useAppTheme();
const showShadow = ref(false);


const setShowShadow = (value) => {
  if (!canToggleTheme.value) {
    console.log(`ShowShadow: ${value}`);
    showShadow.value = value;
  }
};
</script>

<style scoped>
.buttonIcon {
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  transition: all 2s ease;
}

.iconMode {
  outline: 3px solid var(--selected-color);
  display: block;
  width: 10px;
  height: 10px;

}

.iconMode-disabled {
  animation: defaultbackgroundshift 10s infinite linear;

}
.centered-div-hidden {
  bottom: 10px;
  left: 20px;
  top: auto;
  transform: none;
}

.arrowHiddenToggleButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 25px;
  border-radius: 10px;
  padding: 0.5em;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}

.arrow-hidden {
  top: auto;
  left: auto;
  bottom: 10px;
  right: 20px;
  transform: none;
  padding: 0.4em;
}

:hover.arrow-hidden{
  background-color: var(--selected-color);

}

.arrow-hidden-shadow {
  animation: defaultbackgroundshift 10s infinite linear;
}
</style>
