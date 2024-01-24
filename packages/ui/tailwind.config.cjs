/** @type {import('tailwindcss').Config} */

const base = require('style-config')
const path = require('path')

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/*.{html,css,js,jsx,ts,tsx}',
    path.join(path.dirname(require.resolve('style-config')), '**/*.css')
  ],
  ...base
}
