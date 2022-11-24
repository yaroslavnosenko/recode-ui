/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
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
          500: '#38ada9',
          600: '#079992',
        },
        light: {
          100: '#ffffff',
          200: '#f5f6fa',
          300: '#f1f2f6',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
