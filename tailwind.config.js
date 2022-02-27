module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { opacity: 100 },
          "100%": { opacity: 0 },
        },
      }),
      animation: {
        fade: "fadeOut 5s ease-in-out",
      },
    },
  },
  plugins: [],
};
