export default {
  root: true,
  ignorePatterns: ["apps/**", "packages/**"],
  extends: ["@pkg/config/eslint/base"],
  parserOptions: {
    project: true,
  },
};
