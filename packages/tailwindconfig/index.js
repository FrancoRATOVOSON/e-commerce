const neutral = require('./neutral')
const base = require('./base')
const semantic = require('./semantic')

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        glass: '0 8px 32px 0 rgba(8, 7, 8, 0.4)'
      }
    },
    colors: {
      ...neutral,
      ...base,
      ...semantic
    }
  }
}
