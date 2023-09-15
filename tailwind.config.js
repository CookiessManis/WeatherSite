/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins"],
      },
      backgroundImage: {
        body: "url('/img/background-body.svg')",
      },
    },
  },
  plugins: [],
};
