/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "mainBlue": "#3B46EE",
        "eventBlue": "#63CCD2",
        "eventPurple": "#8C73F3",
        "eventYellow": "#F1F373",
        "eventGreen": "#7FFA88",
        "eventPink": "#FA7FD8",
        "eventOrange": "#EF7A56",
        "offBlack": "#323232"
      }
    },
  },
  plugins: [],
}

