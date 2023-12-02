import neutral from './neutral'
import base from './base'
import semantic from './semantic'

export default {
  darkMode: 'class',
  theme: {
    boxShadow: {
      glass: '0 8px 32px 0 rgba(8, 7, 8, 0.4)'
    },
    colors: {
      ...neutral,
      ...base,
      ...semantic
    }
  }
}
