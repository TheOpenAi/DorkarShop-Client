/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        dorkarTheme: {
          primary: "#878afe",
          secondary: "#2badc8",

          accent: "#2f3d4b",
          neutral: "rgb(182,227,212)",
          "base-100": "#ffffff",
          info: "#3ABFF8",
          error: "#eb2632",
        },
      },
      "halloween",
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
