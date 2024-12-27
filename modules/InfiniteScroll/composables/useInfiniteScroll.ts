import { onMounted, ref } from "vue";

type ScrollerItem = string;

export const useInfiniteScroll = () => {
  // Define the list of items to scroll
  const textItems = ref<ScrollerItem[]>([
    "HTML",
    "CSS",
    "JavaScript",
    "Vue",
    "TailwindCSS",
    "PrimeVue",
    "UI/UX",
  ]);

  const initializeScrollers = (): void => {
    const scrollers = document.querySelectorAll<HTMLElement>(".scroller");

    scrollers.forEach((scroller) => {
      const scrollerInner = scroller.querySelector<HTMLElement>(".scroller-inner");

      if (scrollerInner) {
        // Obtén el ancho total de los elementos iniciales
        const scrollerContent = Array.from(scrollerInner.children) as HTMLElement[];

        // Clona los elementos para un flujo continuo
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          scrollerInner.appendChild(duplicatedItem);
        });

        // Asegúrate de que el ancho del contenedor sea adecuado
        const totalWidth = scrollerContent.reduce(
          (acc, item) => acc + item.offsetWidth,
          0
        );
        scrollerInner.style.width = `${totalWidth * 2}px`;
      }
    });
  };

  // Initialize the scrollers when the component mounts
  onMounted(() => {
    initializeScrollers();
  });

  return {
    textItems,
  };
};
