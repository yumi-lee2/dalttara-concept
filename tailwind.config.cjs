/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Gowun Dodum'", "system-ui", "sans-serif"],
        sans: ["'Pretendard'", "'Noto Sans KR'", "system-ui", "sans-serif"],
      },
      colors: {
        space: {
          900: "#090E24",
          800: "#0D1535",
        },
        ivory: "#EDE8DF",
        periwinkle: "#A8B4E8",
        star: "#FFDA3D",
        moonmint: "#78E8C2",
        blush: "#FFB4C8",
        earth: "#4adeff",
      },
      boxShadow: {
        glow: "0 0 40px rgba(56,189,248,0.5)",
        "star-glow": "0 0 30px rgba(245,197,24,0.3)",
      },
      dropShadow: {
        glow: [
          "0 0 30px rgba(168,180,232,0.35)",
          "0 0 80px rgba(168,180,232,0.12)",
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
