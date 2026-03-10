/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        space: {
          900: "#050816",
          800: "#070b26"
        },
        earth: "#4adeff"
      },
      boxShadow: {
        glow: "0 0 40px rgba(56,189,248,0.6)"
      }
    }
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")]
};
