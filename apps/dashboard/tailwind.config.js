/** @type {import('tailwindcss').Config} */

const base = require('style-config')
const path = require('path')

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    path.join(path.dirname(require.resolve('ui')), '**/*.{js,ts,jsx,tsx,css}')
  ],
  ...base
}
