export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        console: "readonly",
        process: "readonly",
      },
    },
    rules: {
      "no-constant-binary-expression": "error",
      "no-duplicate-imports": "error",
      "no-unreachable": "error",
      "no-unused-vars": "error",
    },
  },
];
