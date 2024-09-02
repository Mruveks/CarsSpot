/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "640px" },
      md: { min: "641px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px" },
    },
    extend: {
      colors: {
        "blue": "#0147FF",
        "bg-primary": "#F7F7F7",
        "bg-tiles-primary": "#F7B787",
        "bg-animations": "#EE7214",
      },
    },
  },
  plugins: [],
};
