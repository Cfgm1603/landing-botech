/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'afacad': ['Afacad', 'sans-serif'],
        'afacad-extrabold': ['Afacad', 'sans-serif'],
      },
      fontWeight: {
        'extrabold': '800',
      },
      colors: {
        'primary-botech': 'oklch(0.53 0.09 264)',
      },
    },
  },
  plugins: [],
}