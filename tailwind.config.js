module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px",
      },
      // DEFAULT: "1rem",
      // sm: "2rem",
      // lg: "4rem",
      // xl: "5rem",
    },
    extend: {
      animation: {
        enter: "enter .2s ease-out",
        leave: "leave .15s ease-in forwards",
      },
      keyframes: {
        enter: {
          "0%": {
            transform: "scale(0.9)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        leave: {
          "0%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(0.9)",
            opacity: "0",
          },
        },
      },
      // gridTemplateRows: {
      //   mainLayout: "auto 1fr auto",
      // },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
