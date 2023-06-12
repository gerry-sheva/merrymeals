/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        merry: {
          300: "#F7A26E",
          400: "#FF914D",
          600: "#FF8133",
        },
        merryblue: {
          300: "#5278A3",
          400: "#446488",
          600: "#364F6B",
        },
        merrygreen: {
          600: "#3FC1C9",
        },
        merrypink: {
          600: "#FC5185",
        },
      },
      backgroundImage: {
        food: 'url("/src/assets/food.jpg")',
        care: 'url("/src/assets/care.png")',
        menu: 'url("/src/assets/menu.jpg")',
      },
    },
  },
  plugins: [],
};
