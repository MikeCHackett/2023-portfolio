/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    


    colors: {
      transparent: 'transparent',
      white: '#fafaf9',
      black: '#27272a',
      gray: '#52525b',
      hover: '#702963',
      violet: '#a78bfa',
      teal: '#5eead4',
      cyan: '#67e8f9',
      red: '#b91c1c',
      pink: '#db2777',
      yellow: '#f97316',
      blue: '#0ea5e9',
      beige: '#d6d3d1',
    },
    fontFamily: {
      primary: 'Lato',
      header: 'East Sea Dokdo',
      body: 'Fira Sans',
      code: 'Rajdhani',
    },
    extend: {
      boxShadow: {
        '3xl': '20 20 0px 5px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}