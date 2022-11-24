/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'dark',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"OutfitVariable"', 'sans-serif'],
      },
      colors: {
        dark: {
          700: '#22262e',
          800: '#1b1f25',
          900: '#131417',
        },
        brand: {
          500: '#03c39a',
          600: '#049d81',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
