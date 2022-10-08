/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        signika: ['Signika Negative', 'sans-serif'],
        gemunu: ['Gemunu Libre', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
