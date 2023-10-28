/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0060AE",
        red: "#f42619",
        gray: "#c6c0c0",
        "gray-shadow": "#d1d1d1",
        black: "#333130",
        green: "#52bd94",
        salmon: "#fff5f3",
        yellow: "#ffc107",
      },
    },
  },
  plugins: [],
};
