module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["custom"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": ["**/*.test.js", "**/*.spec.js", "**/*.config.[js,ts"]
      }
    ]
  }
};
