/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      translate: {
        beyond: "100%",
      },
      spacing: {
        "header-count": "150px",
      },
      translate: {
        "2xfull": "400%",
      },
      boxShadow: {
        custom: " rgba(0, 0, 0, 0.35) 0px -4px 1px inset",
        "test-shadow": "0px 20px 35px -16px rgba(255, 255, 255, 0.65)",
      },
      fontFamily: {
        custom: ["UMAMUSUME"],
      },
      colors: {
        softPink: "#fbc1cc",
        softPinkEnd: "#fa99b2",
        softPurple: "#76b2fe",
        softPurpleEnd: "#b69efe",
        softPurnk: "#f588d8",
        softPurnkEnd: "#c0a3e5",
        softGreen: "#41C7AF",
        softGreenEnd: "#54E38E",
        softBlue: "#6CACFF",
        softBlueEnd: "#8DEBFF",
        bodyBackground: "#24282f",
        grass: "#8fc866",
        sun: "#e4cb58",
        blood: "#ff7f82",
      },
      backgroundImage: {
        shine:
          "linear-gradient(to top, transparent, rgba( #ffffff, .15 ) rgba( #ffffff, .5 ))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
