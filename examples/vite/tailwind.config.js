/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  /**
   * You need to tell Tailwind what files are using Tailwind.
   * This will parse all your HTML and JavaScript files.
   */
  content: ["./**/*.html", "./**/*.{js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
