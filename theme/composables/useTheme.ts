import { ref, onMounted } from "vue";

export const useAppTheme = () => {
  const isDark = ref(false);
  const isHidden = ref(false);
  const canToggleTheme = ref(true);


  const applyTheme = () => {
    const root = document.documentElement;
    if (isDark.value) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    if (!canToggleTheme.value) {
      console.log("Theme toggle is disabled.");
      return;
    }
    isDark.value = !isDark.value;
    localStorage.theme = isDark.value ? "dark" : "light";
    applyTheme();
  };

  onMounted(() => {
    isDark.value =
      localStorage.theme === "dark" || (!("theme" in localStorage) && true);

    applyTheme();
  });

  const hiddenToggleButton = () => {
    isHidden.value = !isHidden.value;
    canToggleTheme.value = !isHidden.value;
  };



  return {
    isDark,
    isHidden,
    canToggleTheme,


    toggleTheme,
    hiddenToggleButton,
   
  };
};
