module.exports = {
  extends: ["airbnb-base", "turbo", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: [
        "@typescript-eslint",
        "prettier"
    ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "@typescript-eslint/no-unused-vars": ["warn",{ "varsIgnorePattern": "^_", "argsIgnorePattern": "^_" }],
    "import/no-unresolved": "off",
    "import/extensions": ["error", {
      "js": "never",
      "ts": "never",
      "jsx": "never",
      "tsx": "never",
    }]
  },
};
