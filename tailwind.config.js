/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-1': '#1E1E1E',
        'brand-2': '#454545',
        'brand-3': '#AAAAAA',
        'brand-4': '#8B8B8B',
      },
    },
  },
  plugins: [],
};
