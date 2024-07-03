/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#b33c2a",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
