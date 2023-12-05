/** @type {import('tailwindcss').Config} */

const base = require('style-config')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  ...base,
}
