/* eslint-disable no-undef */
// @ts-check

/** @type {import("eslint").Linter.Config} */
const options = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "turbo"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    "spaced-comment": "warn",
    yoda: "error",
  },
};

module.exports = options;
