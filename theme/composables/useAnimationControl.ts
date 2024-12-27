// composables/useGlobalColor.ts
import { ref } from 'vue';

// Si deseas mantener los colores disponibles
export const colors = [
  // '#ff6347', '#ff4500', '#f1c40f', '#2ecc71', '#3498db', '#9b59b6',
  // '#e74c3c', '#8e44ad', '#1abc9c', '#34495e', '#f39c12', '#16a085'
];

const selectedColor = ref<string>(colors[0] || '');

export const useGlobalColor = () => {

  const setColor = (color: string) => {
    selectedColor.value = color;
    document.documentElement.style.setProperty('--selected-color', color);
  };

  return {
    selectedColor,
    setColor,
  };
};
