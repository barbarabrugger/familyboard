/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      "valentine", "aqua"
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
