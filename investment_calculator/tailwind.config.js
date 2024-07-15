/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Quicksand", "sans-serif"],
      },
      fontSize: {
        inputLabel: "0.6rem",
      },
      lineHeight: {
        inputLabel: "0.8rem",
      },
      maxWidth: {
        inputBar: "42rem",
        tableCustom: "700px",
      },
      minWidth: {
        tableCustom: "500px",
      },
    },
  },
  plugins: [],
};
