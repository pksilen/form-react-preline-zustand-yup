/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}', 'node_modules/preline/dist/*.js'],
  theme: {
    extend: {}
  },
  plugins: [require('preline/plugin')]
};
