/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  danceui: {
    themes: [
      {
        mytheme: {
          primary: "#50F8D1",
          secondary: "#3A4256",
          accent: "#50F8D1",
          neutral: "#3979EE",
          "blackbaba": "#0A0A0AE7",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
