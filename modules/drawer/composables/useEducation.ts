import { ref, onMounted, onUnmounted } from "vue";

export const useEducation = () => {
  const educationData = [
    {
      title: "Frontend Development (Self-taught)",
      content: `
        I am deeply involved in tasks related to HTML, CSS, JavaScript, Vue.js, and React.
      `,
      more: `
        I am passionate about frontend development because I enjoy solving problems, learning new things, and working on creative projects.
        I plan to revisit React in the future as I appreciate both frameworks greatly.
      `,
    },
    {
      title: "Plant Mechanic (in training)",
      content: `
        Began practical training as a plant mechanic in Germany.
      `,
      more: `
        During a year of training, I gained basic technical skills and knowledge in handling machinery and systems. However, I realized this profession did not align with my long-term interests, so I decided to end the training.
      `,
    },

    {
      title: "Spanish Studies",
      content: `
        Completed a degree in Linguistics in Venezuela.
      `,
      more: `
        This degree helped me develop analytical skills and explore new ways of communication.
      `,
    },
    {
      title: "Management Assistant (Compact Course)",
      content: `
        One-year training focused on organization and teamwork.
      `,
      more: `
        This course provided me with valuable administrative knowledge.
      `,
    },
    {
      title: "High School Diploma",
      content: `
        Basic secondary education in Venezuela.
      `,
      more: `
        This is where I built my foundational academic skills.
      `,
    },
  ];

  // Reactive state
  const selectedIndex = ref<number | null>(null);
  const showMore = ref(false);

  const handleClickOutside = (event: MouseEvent) => {
    const card = document.querySelector(".education-card");
    if (card && !card.contains(event.target as Node)) {
      selectedIndex.value = null;
      showMore.value = false;
    }
  };

  // Methods to control state
  const selectItem = (index: number) => {
    if (selectedIndex.value === index) {
      selectedIndex.value = null; // Close the card if already selected
    } else {
      selectedIndex.value = index; // Update the card content
      showMore.value = false; // Reset the "Read More" state
    }
  };

  const toggleShowMore = () => {
    showMore.value = !showMore.value;
  };

  onMounted(() => {
    window.addEventListener("click", handleClickOutside);
  });
  onUnmounted(() => {
    window.removeEventListener("click", handleClickOutside);
  });

  return {
    educationData,
    selectedIndex,
    showMore,
    selectItem,
    toggleShowMore,
  };
}
