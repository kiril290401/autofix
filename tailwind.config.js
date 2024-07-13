/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color" : "#ffb91f", // amarillo
        "fondo-color-gris" : "#23283b", // gris 
        "fondo-color-negro" : "#171b27", // negro
        "primary-color-hover" : "#f2a600",
      },
    },
  },
  plugins: [],
};
