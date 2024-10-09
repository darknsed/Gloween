/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  theme: {
    extend: {
      colors: {
        fieryred: "#D01C1F",
        darkblack: "#080808",
        white: "#FFFFFF",
        gray: "#989898",
        lightgray: "#DFDFDF",
        grafit: "#3F3F3F",
        lightlightgray: "#F2F2F2",
      },
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui"],
        manrope: ["Manrope", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
  content: [
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./index.html",
  ],
};
