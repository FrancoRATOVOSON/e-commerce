module.exports = {
  extends: [
    'airbnb-base',
    'turbo',
    'plugin:perfectionist/recommended-natural',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'perfectionist', 'prettier'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
    ],
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.js', '**/*.spec.js', '**/*.config.ts'],
        peerDependencies: true
      }
    ],
    'import/no-unresolved': 'off',
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'perfectionist/sort-imports': [
      'error',
      {
        'custom-groups': {
          type: {
            react: 'react'
          },
          value: {
            react: ['react', 'react-*']
          }
        },
        groups: [
          'react',
          'type',
          ['builtin', 'external'],
          'internal-type',
          'internal',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'side-effect',
          'style',
          'object',
          'unknown'
        ],
        'internal-pattern': [
          '@/stores/**',
          '@stores/**',
          '@/lib/**',
          '@lib/**',
          '@/components/**',
          '@components/**',
          '@/pages/**'
        ],
        'newlines-between': 'always',
        order: 'asc',
        type: 'natural'
      }
    ],
    'perfectionist/sort-interfaces': [
      'error',
      {
        'custom-groups': {
          actions: '**:*(**)*=>**',
          id: 'id',
          key: '\\[**\\]:**'
        },
        groups: ['key', 'id', 'actions', 'unknown', 'multiline'],
        order: 'asc',
        type: 'natural'
      }
    ],
    'prettier/prettier': 'warn',
    'sort-imports': 'off'
  }
}
