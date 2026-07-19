/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      borderWidth: { 3: "3px" },
      boxShadow: {
        brutal: "6px 6px 0px 0px rgba(0,0,0,0.9)",
        "brutal-sm": "3px 3px 0px 0px rgba(0,0,0,0.9)",
        "brutal-lg": "8px 8px 0px 0px rgba(0,0,0,0.9)",
        "brutal-xl": "12px 12px 0px 0px rgba(0,0,0,0.9)",
      },
      colors: {
        cream: "#f0f0f0",
        acid: "#c3ff00",
        hot: "#ff5470",
        sky: "#00c2ff",
        vio: "#7b61ff",
        tang: "#ff9f1c",
      },
    },
  },
  plugins: [],
};
