import { ref, onMounted, onUnmounted } from "vue";

export const useEducation = () => {
  const educationData = [
    {
      title: "Frontend-Entwicklung (selbstständig)",
      content: `
        Ich beschäftige mich intensiv mit HTML, CSS, JavaScript, Vue.js und React-Aufgaben.
        
      `,
      more: `
        Frontend-Entwicklung begeistert mich, weil ich gerne Probleme löse, Neues lerne und kreative Projekte umsetze.
        Ich werde auch in der Zukunft React wiederaufgreifen, da ich beide Frameworks sehr schätze.
      `,
    },
    {
      "title": "Anlagenmechaniker (in Ausbildung)",
      "content": `
        Beginn einer praktischen Ausbildung zum Anlagenmechaniker in Deutschland.
      `,
      "more": `
        Während eines Jahres in der Ausbildung habe ich grundlegende technische Fähigkeiten und Kenntnisse im Umgang mit Anlagen und Systemen erlangt. Ich habe jedoch festgestellt, dass dieser Beruf nicht meinen langfristigen Interessen entspricht und die Ausbildung daraufhin beendet.
      `,
    },

    {
      title: "Spanisch-Studium",
      content: `
        Abgeschlossenes Studium in Sprachwissenschaften in Venezuela.
      `,
      more: `
        Das Studium half mir, analytische Fähigkeiten zu entwickeln und neue Kommunikationswege zu erlernen.
      `,
    },
    {
      title: "Managementassistent (Kompaktkurs)",
      content: `
        Einjährige Ausbildung mit Fokus auf Organisation und Teamarbeit.
      `,
      more: `
        Dieser Kurs hat mir wertvolle administrative Kenntnisse vermittelt.
      `,
    },
    {
      title: "Realschulabschluss",
      content: `
        Grundlegende schulische Ausbildung in Venezuela.
      `,
      more: `
        Hier habe ich meine grundlegenden akademischen Fähigkeiten aufgebaut.
      `,
    },
  ];

  // Estado reactivo
  const selectedIndex = ref<number | null>(null);
  const showMore = ref(false);


  const handleClickOutside = (event: MouseEvent) => {
    const card = document.querySelector(".education-card");
    if (card && !card.contains(event.target as Node)) {
      selectedIndex.value = null;
      showMore.value = false;
    }
  };

  // Métodos para controlar el estado
  const selectItem = (index: number) => {
    if (selectedIndex.value === index) {
      selectedIndex.value = null; // Cierra la tarjeta si ya está seleccionada
    } else {
      selectedIndex.value = index; // Actualiza el contenido de la tarjeta
      showMore.value = false; // Reinicia el estado del "Mehr lesen"
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
