module.exports = {
  root: true,
  extends: ["custom"],
  "env": {
    "browser": true
  },
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        "peerDependencies": true,
        "devDependencies": ["**/*.test.js", "**/*.spec.js", "**/*.config.ts"]
      }
    ]
  }
};