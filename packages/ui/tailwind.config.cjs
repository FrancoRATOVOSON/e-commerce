/** @type {import('tailwindcss').Config} */

const base = require('tailwindconfig')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  ...base,
}
