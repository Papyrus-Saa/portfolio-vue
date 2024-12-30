<template>
  <div class="w-full mb-10">
    <div class="bars-container  rounded-md mb-4">
      <div v-for="(bar, index) in bars" :key="index" class="bar-wrapper">
        <p class="bar-name ">{{ bar.name }}</p>
        <div
          class="bar bg-gray-400 duration-500"
          :style="{
            backgroundColor: 'gray',
            width: bar.width + 'px',
            height: bar.height + 'px',
          }"
        >
          <div
            :class="['bar-fill']"
            :style="{
              width: '100%',
              height: bar.animatedHeight + 'px',
              backgroundColor: bar.color || 'currentColor',
            }"
          ></div>
        </div>
        <span class="bar-percentage text-gray-400">{{ bar.percentage }}%</span>
      </div>
    </div>

  </div>
  <ScrollUp />
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useGlobalColor } from "~/theme/composables/useAnimationControl";
import BarMeaning from "./BarMeaning.vue";
import ScrollUp from "../../../components/ScrollUp.vue";

const { selectedColor, setColor } = useGlobalColor();

interface Bar {
  name: string;
  height: number;
  width: number;
  percentage: number;
  animatedHeight: number;
  color: string;
}

const bars = ref<Bar[]>([
  {
    name: "HTML",
    height: 150,
    width: 15,
    percentage: 85,
    animatedHeight: 0,
    color: "#E34F26",
  },
  {
    name: "CSS",
    height: 150,
    width: 15,
    percentage: 80,
    animatedHeight: 0,
    color: "#1572B6",
  },
  {
    name: "JS",
    height: 150,
    width: 15,
    percentage: 55,
    animatedHeight: 0,
    color: "#F7DF1E",
  },
  {
    name: "TS",
    height: 150,
    width: 15,
    percentage: 35,
    animatedHeight: 0,
    color: "#3178C6",
  },
  {
    name: "VUE",
    height: 150,
    width: 15,
    percentage: 47,
    animatedHeight: 0,
    color: "#42B883",
  },
  {
    name: "TW",
    height: 150,
    width: 15,
    percentage: 63,
    animatedHeight: 0,
    color: "#06B6D4",
  },
  {
    name: "RC",
    height: 150,
    width: 15,
    percentage: 53,
    animatedHeight: 0,
    color: "#61DAFB",
  },
]);

onMounted(() => {
  requestAnimationFrame(() => {
    animateBars();
  });
});

const animateBars = () => {
  bars.value.forEach((bar) => {
    bar.animatedHeight = bar.height * (bar.percentage / 100);
  });
};

watch(
  () => selectedColor.value,
  (newColor) => {
    bars.value.forEach((bar) => {
      bar.animatedHeight = 0;
    });

    setTimeout(() => {
      bars.value.forEach((bar) => {
        bar.color = newColor || "gray";
      });

      bars.value.forEach((bar) => {
        bar.animatedHeight = bar.height * (bar.percentage / 100);
      });
    }, 800);
  }
);
</script>

<style scoped>
.bars-container {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
}

.bar-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.bar {
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  box-shadow: 2px 3px 5px 0px var(--selected-color);
}

.bar-fill {
  position: absolute;
  bottom: 0;
  left: 0;
  transition: height 0.9s ease-in-out, background-color 0.6s ease;
}

.bar-name {
  margin-bottom: 5px;
  font-size: 0.8rem;
}

.bar-percentage {
  margin-top: 5px;
  font-size: 0.8rem;
}
</style>
