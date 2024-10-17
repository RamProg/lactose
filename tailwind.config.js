/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#E4FFFE',
        defaultText: '#3B3B3B',
        positiveBackground: '#D7FDCD',
        negativeBackground: '#FBE2E4',
      },
    },
  },
  plugins: [],
}

