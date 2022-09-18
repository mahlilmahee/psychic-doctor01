/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  danceui: {
    themes: [
      {
        mytheme: {
          primary: "#50F8D1",
          secondary: "#353638",
          accent: "#66A5EE",
          neutral: "#3979EE",
          "blackbaba": "#0A0A0AE7",
        },
      },
      "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"
    ],
  },
  plugins: [require("daisyui")],
}
