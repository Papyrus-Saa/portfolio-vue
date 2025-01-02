<template>
  <div>
    <button
      v-if="showButton"
      @click="scrollToTop"
      class="arrowScroll fixed bottom-1 right-14 p-2 text-xl shadow-lgx"
      style="z-index: 4020;"
    >
      <ScrollUpIcon/>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import ScrollUpIcon from "~/shared-components/shared/ScrollUpIcon.vue";

// Estado para controlar la visibilidad del botón
const showButton = ref(false);

// Función para manejar el scroll
const handleScroll = () => {
  showButton.value = window.scrollY > 0; // Mostrar botón si la página ha sido desplazada hacia abajo
};

// Función para volver al inicio
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Agregar y eliminar el evento scroll
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
button {
  transition: opacity 0.3s ease, transform 0.3s ease;
}


</style>
