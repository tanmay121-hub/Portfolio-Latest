/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        signature: ["Great Vibes", "cursive"], // Adds the fancy font
      },
      colors: {
        primary: "#0f172a", // Slate 900
        accent: "#38bdf8", // Sky 400
        glass: "rgba(255, 255, 255, 0.05)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
