import { ref, watch, onMounted, onUnmounted } from "vue";

export function useDrawerControl() {
  const isDrawerOpen = ref(true);
  const animationClass = ref("");

  const openDrawer = (isMobile = false) => {
    if (isMobile) {
      animationClass.value = "fadeInLeft";
    } else {
      animationClass.value = "";
    }
    isDrawerOpen.value = true;
  };

  const closeDrawer = (isMobile = false) => {
    if (isMobile) {
      animationClass.value = "fadeOutLeft";
      setTimeout(() => {
        isDrawerOpen.value = false;
      }, 2000);
    } else {
      animationClass.value = "";
      isDrawerOpen.value = false;
    }
  };

  const handleResize = () => {
    const width = window.innerWidth;

    if (width > 640 && !isDrawerOpen.value) {
      openDrawer(false);
    }
  };

  const handleMobileOpen = () => {
    const isMobile = window.innerWidth <= 640;
    openDrawer(isMobile);
  };

  const handleMobileClose = () => {
    const isMobile = window.innerWidth <= 640;
    closeDrawer(isMobile);
  };

  onMounted(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  });

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });

  watch(isDrawerOpen, (newVal) => {
    const html = document.documentElement;
    const body = document.body;

    if (newVal) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
    }
  });

  return {
    isDrawerOpen,
    animationClass,
    openDrawer: handleMobileOpen, // Llama a la función específica para móviles
    closeDrawer: handleMobileClose, // Llama a la función específica para móviles
  };
}
