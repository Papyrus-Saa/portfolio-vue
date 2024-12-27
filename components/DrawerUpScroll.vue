<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import ScrollUpIcon from '~/shared/components/ScrollUpIcon.vue';
import { useDrawerControl } from '../modules/drawer/composables/useDreawerScroll';



const isVisible = ref(false);
let scrollContainer: HTMLElement | null = null;

const handleScroll = () => {
  if (scrollContainer) {
    isVisible.value = scrollContainer.scrollTop > 0;
  }
};

const scrollToTop = () => {
  if (scrollContainer) {
    scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

onMounted(() => {
  const drawerRef = document.querySelector('.drawerContainer');
  if (drawerRef instanceof HTMLElement) {
    scrollContainer = drawerRef;
    scrollContainer.addEventListener('scroll', handleScroll);
  }
});

onUnmounted(() => {
  if (scrollContainer) {
    scrollContainer.removeEventListener('scroll', handleScroll);
  }
});
</script>

<template>
  <button
    v-show="isVisible"
    @click="scrollToTop"
    class="drawerUpScroll "
  >
 
  </button>



  <h1>Hola</h1>
</template>

<style scoped>
.drawerUpScroll {
  position: fixed; /* Permite que se quede en la misma posición, incluso con scroll */
  bottom: 20px; /* Espacio desde el fondo */
  left: 50%; /* Centrar horizontalmente */
  transform: translateX(-50%); /* Ajustar el punto de anclaje al centro */
  z-index: 2020; /* Asegúrate de que esté por encima de otros elementos */
}
</style>
