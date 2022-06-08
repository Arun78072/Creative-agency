module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Quicksand: ["Quicksand", "sans-serif"],
      },
      dropShadow: {
        blue: "0px 4px 8px rgba(55, 125, 255, 0.5)",
        block: "4px 4px 30px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        xxl: { min: "1200px" },
        xl: { min: "1025px", max: "1200px" },
        lg: { min: "769px", max: "1024px" },
        md: { max: "768px" },
        mxmd: { min: "451px", max: "768px " },
        sm: { max: "450px" },
      },
      animation: {
        wiggle: "wiggle 5s ease-in-out infinite",
        wiggle1: "wiggle1 5s ease-in-out infinite",
        rotate: "rotate 150s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateY(-50%)" },
          "50%": { transform: "translateY(0%)" },
        },
        wiggle1: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        rotate: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(380deg)" },
        },
      },
    },
  },
  plugins: [],
};
