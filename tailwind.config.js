/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        skyCustom: "rgb(58, 198, 244)",
      },
    },
  },
  plugins: [],
};
