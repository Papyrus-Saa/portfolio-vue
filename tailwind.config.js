export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./modules/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./theme/**/*.{js,vue,ts}",
    "./shared-components/**/*.{js,vue,ts}",
    "./app.vue",
    "./error.vue",
    "./assets/css/**/*.css",
  ],

  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          light: "rgb(var(--secondary-color) / <alpha-value>)",
          dark: "rgb(var(--primary-color) / <alpha-value>)",
        },
        boxShadow: {
          'custom-light': '0px 0px 13px 0px rgba(0, 0, 0, 0.75)',
          'custom-dark': '0px 0px 13px 0px rgba(122, 122, 122, 1)',
        },
      },
    },
  },
  plugins: [],
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
