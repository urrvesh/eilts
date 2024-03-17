/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      print: { raw: "print" },
    },
    fontFamily: {
      custom: ["Red Hat Display", "sans-serif"],
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: "transparent",
      sidebarColor: "#111315",
      white: "#FFFFFF",
      black: "#000000",
      f5f5f5: "#f5f5f5",
      c5c5c5: "#C5C5C5",
      ce1029: "#CE1029",
      "1F2225": "#1F2225",
      "1f2544": "#1f2544",
      f1f6f9: "#F1F6F9",
      101828: "#101828",
      475467: "#475467",
      "12b764": "#12b764",
      ffab0a: "#ffab0a",
      f04438: "#f04438",
      "4135431a": "#4135431a",
      344054: "#344054",
      dbc4f0: "#dbc4f0",
      d4e7c5: "#d4e7c5",
      aee2ff: "#aee2ff",
      f4c7ab: "#f4c7ab",
      c6dcce: "#c6dcce",
      ffc5c5: "#ffc5c5",
      "ffffff12":"#ffffff12",
      gray: {
        50: "#FAFAFA",
        100: "#F5F5F5",
        200: "#EEEEEE",
        300: "#E0E0E0",
        400: "#BDBDBD",
        500: "#9E9E9E",
        DEFAULT: "#9E9E9E",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
        A100: "#D5D5D5",
        A200: "#AAAAAA",
        A400: "#303030",
        A700: "#616161",
      },
    }),
    extend: {
      backgroundImage: {
        none: "none",
        "vocab-card-background": "url('../public/backgrounds/background-pattern.png')",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
