const neutral = require('./neutral')
const base = require('./base')
const semantic = require('./semantic')

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        glass: '0 8px 32px 0 rgba(8, 7, 8, 0.4)'
      },
      fontFamily: {
        jost: ['"Jost"', 'ui-sans-serif', 'system-ui']
      }
    },
    colors: {
      ...neutral,
      ...base,
      ...semantic,
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent"
    }
  }
}
