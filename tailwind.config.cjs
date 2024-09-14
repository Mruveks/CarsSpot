const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "640px" },
      md: { min: "641px", max: "1439px" },
      lg: { min: "1440px" },
    },
    extend: {
      width: {
        "container-sm": "100%",
        "container-md": "768px",
        "container-lg": "1160px",
      },
      fontFamily: {
        sans: ["Roboto Flex", ...defaultTheme.fontFamily.sans],
        bebas: ["Bebas Neue", "cursive"],
        "roboto-condensed": ["Roboto Condensed", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      fontSize: {
        // sm
        "nav-sm": ["14px", { lineHeight: "20px" }],
        "button-sm": ["14px", { lineHeight: "20px", letterSpacing: "-0.01em" }],
        "hero-header-sm": ["58px", { lineHeight: "64px", letterSpacing: "-0.03em" }],
        "hero-paragraph-sm": ["14px", { lineHeight: "20px" }],
        "header-tagline-sm": ["18px", { lineHeight: "28px" }],
        "header-stay-updated-sm": ["30px", { lineHeight: "36px" }],
        "header-cta-sm": ["14px", { lineHeight: "20px", letterSpacing: "-0.01em" }],
        "footer-sm": ["14px", { lineHeight: "20px" }],

        // md
        "nav-md": ["16px", { lineHeight: "24px" }],
        "button-md": ["15px", { lineHeight: "22.5px", letterSpacing: "-0.01em" }],
        "hero-header-md": ["76px", { lineHeight: "85px", letterSpacing: "-0.03em" }],
        "hero-paragraph-md": ["16px", { lineHeight: "24px" }],
        "header-tagline-md": ["21.5px", { lineHeight: "32.25px" }],
        "header-stay-updated-md": ["40px", { lineHeight: "48px" }],
        "header-cta-md": ["15px", { lineHeight: "22.5px", letterSpacing: "-0.01em" }],
        "footer-md": ["16px", { lineHeight: "24px" }],

        // lg
        "nav-lg": ["16px", { lineHeight: "24px" }],
        "button-lg": ["15px", { lineHeight: "22.5px", letterSpacing: "-0.02em" }],
        "hero-header-lg": ["76px", { lineHeight: "85px", letterSpacing: "-0.04em" }],
        "hero-paragraph-lg": ["16px", { lineHeight: "24px" }],
        "header-tagline-lg": ["21.5px", { lineHeight: "32.25px" }],
        "header-stay-updated-lg": ["40px", { lineHeight: "48px" }],
        "header-cta-lg": ["15px", { lineHeight: "22.5px", letterSpacing: "-0.02em" }],
        "footer-lg": ["16px", { lineHeight: "24px" }],

      },
      colors: {
        blue: "#0147FF",
        gray: "#D9DCD5",
        "bg-primary": "#F7F7F7",
        "bg-secondary": "#282828",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
