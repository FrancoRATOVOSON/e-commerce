module.exports = {
  extends: ['custom', 'next'],
  overrides: [
    {
      files: ['**/index.ts'],
      rules: {
        'import/prefer-default-export': 'off'
      }
    }
  ],
  root: true
}
