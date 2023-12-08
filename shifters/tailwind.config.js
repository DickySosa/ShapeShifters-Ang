/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: ["wireframe"],
  },
  theme: {

    extend: {},
  },
  plugins: [require("daisyui")],
}

