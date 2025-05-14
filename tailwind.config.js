/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-dark': '#0f172a', // 👈 Ajout de ta couleur personnalisée
      },
    },
  },
  plugins: [],
}
