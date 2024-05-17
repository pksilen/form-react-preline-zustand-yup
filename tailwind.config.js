/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}', './node_modules/preline/preline.js'],
  theme: {
    extend: {}
  },
  plugins: [require('preline/plugin')]
};
