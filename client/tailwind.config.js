module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  darkMode: "class",
  theme: {
    // screens: {
    //   sm: "480px",
    //   md: "768px",
    //   lg: "976px",
    //   xl: "1440px",
    // },
    fontFamily: {
      ibm: ["IBM Plex Sans", "sans-serif"],
    },
    colors: {
      primary: "#6C63FF",
      primarylight: "#e7e6ff",
      darkmode: "#243447",
      maxdark: "#1a2533",
      success: {
        100: "#ccffeb",
        200: "#00cc7a",
      },
      secondary: {
        100: "#ffffff",
        200: "#f2f2f2",
        300: "#e6e6e6",
        400: "#cccccc",
        500: "#404040",
        600: "#1d1d1d",
      },

      error: {
        100: "#ffe6e6",
        200: "#ff4d4d",
      },
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
