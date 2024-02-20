module.exports = {
  env: {
    browser: true
  },
  extends: ['custom'],
  root: true,
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': ['error', { allow: ['__TAURI__'] }]
  }
}
