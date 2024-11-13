/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'btn-grad': 'linear-gradient(to right, #314755 0%, #26a0da 51%, #314755 100%)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

