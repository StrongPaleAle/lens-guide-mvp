/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{vue,ts,css}',
  ],
  theme: {
    extend: {
      borderRadius: {
        'xlg': '10px',
      },
    },
  },
  plugins: [],
}

