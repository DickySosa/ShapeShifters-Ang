/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: ["forest"],
  },
  theme: {

    extend: {},
  },
  plugins: [require("daisyui")],
}

