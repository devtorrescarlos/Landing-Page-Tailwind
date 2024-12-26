/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "vietnam": ['"Be Vietnam Pro"', 'serif']
      },

      colors: {
        "bright-red": "hsl(12, 88%, 59%)",
        "dark-blue": "hsl(228, 39%, 23%)",
        "dark-grayish-blue": "hsl(227, 12%, 61%)",
        "very-dark-blue": "hsl(233, 12%, 13%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
        "very-pale-red": "hsl(13, 100%, 96%)",
      },

    backgroundImage: {
      "close-menu": "url('../images/icon-close.svg')",
      "open-menu": "url('../images/icon-hamburger.svg')",
      "pattern": "url(../images/bg-tablet-pattern.svg)",
    }
    },
  },
  plugins: [],
}

