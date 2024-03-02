import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  //   prefix: "🪄-",
  theme: {
    extend: {},
  },
  plugins: [typography],
};
