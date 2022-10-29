/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        body: ["Nunito"],
      },
    },
  },
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
