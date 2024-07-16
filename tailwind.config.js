/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#d3ad7f",
        bgBlack: "#13131a",
        background: "#010103",
      },
      fontSize: {
        tamanhoFonte: 10,
      }
    },
  },
  plugins: [],
}

