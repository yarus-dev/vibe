import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./source/**/*.{js,jsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  //   prefix: "🪄-",
  theme: {
    extend: {},
  },
  plugins: [typography],
};
