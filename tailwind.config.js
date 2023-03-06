/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pageComponents/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#283618",
        hoverBg: "#344e41",
        blueLink: "#3498DB",
        blue: "#e9edc9",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
