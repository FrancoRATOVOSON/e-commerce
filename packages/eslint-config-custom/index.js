module.exports = {
  extends: ['airbnb-base', 'turbo', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'warn',
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }
    ],
    'import/no-unresolved': 'off',
    'import/extensions': [
      'error',
      {
        js: 'never',
        ts: 'never',
        jsx: 'never',
        tsx: 'never'
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        peerDependencies: true,
        devDependencies: ['**/*.test.js', '**/*.spec.js', '**/*.config.ts']
      }
    ],
    'no-unused-expressions': ['error', { allowShortCircuit: true }]
  }
}
