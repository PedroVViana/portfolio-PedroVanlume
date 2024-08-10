/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'custom-lg': '16px', // Adiciona um tamanho de fonte personalizado
      },
    },
  },
  plugins: [],
}
