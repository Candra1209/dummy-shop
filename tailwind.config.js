/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        anton :'Anton',
        quicksand : 'Quicksand',
        cabin : 'Cabin'
      },
      colors : {
        utama : '#FFFCEF',
        kedua : '#D2EBCD',
        ketiga : '#FF7F5B',
        keempat : '#393939',
      }
    },
  },
  plugins: [require("daisyui")],
}

