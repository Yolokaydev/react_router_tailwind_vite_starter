/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      xlw: "1440px",
    },
    colors: {
      white: "#ffffff",
      "primary-green": "#74C69D",
      "primary-dark": "#262626",
    },
    extend: {},
  },
  plugins: [],
};
