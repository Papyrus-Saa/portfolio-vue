import { ref, watch, onMounted, onUnmounted } from "vue";

export function useDrawerControl() {
  const isDrawerOpen = ref<boolean>(false);
  const animationClass = ref("");
  const resizeWidth = ref<number>(100);
  const drawerResizeWidth = ref<boolean>(false);

  const openDrawer = () => {
    animationClass.value = "fadeInLeft";
    isDrawerOpen.value = true;
  };

  const closeDrawer = () => {
    animationClass.value = "fadeOutLeft";
    setTimeout(() => {
      isDrawerOpen.value = false;
    }, 2000);
  };

  watch(isDrawerOpen, (newVal) => {
    const html = document.documentElement;
    const body = document.body;

    if (newVal) {
      // Bloquea el fondo para evitar scroll fuera del drawer
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      // Habilita el fondo
      html.style.overflow = "";
      body.style.overflow = "";
    }
  });

  watch(resizeWidth, (newWidth) => {
    if (newWidth > 768 && !isDrawerOpen.value) {
      openDrawer();
    } else if (newWidth <= 768 && isDrawerOpen.value) {
      closeDrawer();
    }
  });



  return {
    isDrawerOpen,
    animationClass,
    resizeWidth,
    drawerResizeWidth,

    openDrawer,
    closeDrawer,

  };
}
