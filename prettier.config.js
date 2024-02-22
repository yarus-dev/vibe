const config = {
  // printWidth: 80, // Setting max_line_length in an .editorconfig file will configure Prettier’s print width, unless overridden.
  // indent_size: 2, // Setting indent_size or tab_width in an .editorconfig file will configure Prettier’s tab width, unless overridden.
  // tabWidth: 2, // Setting indent_size or tab_width in an .editorconfig file will configure Prettier’s tab width, unless overridden.
  // useTabs: false, // Setting indent_style in an .editorconfig file will configure Prettier’s tab usage, unless overridden.
  // endOfLine: "lf", // Setting end_of_line in an .editorconfig file will configure Prettier’s end of line usage, unless overridden.
  semi: true, // Print semicolons at the ends of statements.
  singleQuote: false, // Use single quotes instead of double quotes.
  jsxSingleQuote: false, // Use single quotes instead of double quotes in JSX.
  quoteProps: "consistent", // Change when properties in objects are quoted
  trailingComma: "all", // Print trailing commas wherever possible in multi-line comma-separated syntactic structures. (A single-line array, for example, never gets trailing commas.)
  bracketSpacing: true, // Print spaces between brackets in object literals.
  bracketSameLine: false, // Put the > of a multi-line HTML (HTML, JSX, Vue, Angular) element at the end of the last line instead of being alone on the next line (does not apply to self closing elements).
  arrowParens: "always", // Include parentheses around a sole arrow function parameter.
  htmlWhitespaceSensitivity: "strict", // Specify the global whitespace sensitivity for HTML, Vue, Angular, and Handlebars. See whitespace-sensitive formatting for more info.
  singleAttributePerLine: false, // Enforce single attribute per line in HTML, Vue and JSX.

  plugins: ["prettier-plugin-organize-imports"],
};

export default config;
