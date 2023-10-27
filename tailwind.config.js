/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        blackFiap: 'rgb(22,22,22)',
        pinkFiap: 'rgb(237,20,91)',
        yellowFiap: 'rgb(255, 253, 60)',
        sunRising: 'rgb(31, 130, 196)',
        farmWise: 'rgb(80, 170, 175)',
        coliseu: 'rgb(180, 96, 96)',
      },
      fontFamily: {
        poppins: 'Poppins',
        major: 'Major Mono Display',
        oxanium: 'Oxanium',
        amatic: 'Amatic SC',
        sunRising: 'Marck Script',
        farmWise: 'Bree Serif',
        coliseu: 'Bodoni Moda',
        asteroids: 'Bruno Ace SC',
      },
    },
  },
  plugins: [],
};
