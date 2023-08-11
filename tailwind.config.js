/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

    },
    screens: {

      tablet: '480px',
      // => @media (min-width: 640px) { ... }

      tabletSc:'768px',

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [require("@tailwindcss/forms")({
    strategy: 'base', // only generate global styles
    strategy: 'class', // only generate classes
  })],
  extend: {

  }
}