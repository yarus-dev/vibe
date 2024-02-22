module.exports = {
  root: true,
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "prettier"
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'prettier'
  ],
  ignorePatterns: ['node_modules', ".turbo", '.build']
}
