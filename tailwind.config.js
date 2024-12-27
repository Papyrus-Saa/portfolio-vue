export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./modules/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./theme/**/*.{js,vue,ts}",
    "./shared/**/*.{js,vue,ts}",
    "./app.vue",
    "./error.vue",
    "./assets/css/**/*.css",
  ],

  darkMode: "class", // Habilita el modo oscuro basado en clases
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          light: "rgb(var(--secondary-color) / <alpha-value>)", // Light mode
          dark: "rgb(var(--primary-color) / <alpha-value>)",    // Dark mode
        },
      },
    },
  },
  plugins: [],
  darkMode: "class", // Activa el soporte para tema oscuro
  darkMode: ["class", ".dark"], // Usa `prefers-color-scheme` (por
};



// animation: {
//   'color-shift': 'defaultcolorShift 100s infinite linear',
// },
// keyframes: {
//   defaultcolorShift: {
//     '0%, 100%': { backgroundColor: 'var(--primary-9)' },
//     '10%': { backgroundColor: 'var(--secundary-10)' },
//     '20%': { backgroundColor: 'var(--cyan-11)' },
//     '30%': { backgroundColor: 'var(--purple-9)' },
//     '40%': { backgroundColor: 'var(--surface-3)' },
//     '50%': { backgroundColor: 'var(--purple-6)' },
//     '60%': { backgroundColor: 'var(--cyan-6)' },
//     '70%': { backgroundColor: 'var(--purple-6)' },
//     '80%': { backgroundColor: 'var(--primary-5)' },
//     '90%': { backgroundColor: 'var(--cyan-5)' },
//   },
// },
