/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',  // Пути к вашим страницам
    './src/components/**/*.{js,ts,jsx,tsx}',  // Пути к вашим компонентам
    './src/styles/**/*.{css}',  // Путь к вашему файлу CSS
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
