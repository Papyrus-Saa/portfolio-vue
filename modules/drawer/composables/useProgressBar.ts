import { ref } from "vue";

export interface BarConfig {
  name: string; // Solo el nombre
  percentage: number; // Porcentaje (0-100)
}

export function useProgressBar() {
  const bars = ref<BarConfig[]>([]);

  const addBar = (bar: BarConfig) => {
    bars.value.push(bar);
  };

  const updateBar = (index: number, newConfig: Partial<BarConfig>) => {
    if (bars.value[index]) {
      bars.value[index] = { ...bars.value[index], ...newConfig };
    }
  };

  const removeBar = (index: number) => {
    bars.value.splice(index, 1);
  };

  return {
    bars,
    addBar,
    updateBar,
    removeBar,

  };
}
