import { ref, onMounted, onUnmounted } from 'vue';
const clockOpacity = ref(false);


export function useClock() {
  const time = ref<string>('');

  const updateClock = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    time.value = `${hours}  :  ${minutes}  :  ${seconds}`;
  };

  let interval: number | undefined;

  onMounted(() => {
    updateClock(); // Inicializa el reloj
    interval = window.setInterval(updateClock, 1000); // Actualiza cada segundo
  });

  onUnmounted(() => {
    if (interval) clearInterval(interval);
  });

  const turnOffOpacity = () => {

    clockOpacity.value = !clockOpacity.value;
  }

  return {
    time,
    clockOpacity,
    turnOffOpacity,

  };
}
