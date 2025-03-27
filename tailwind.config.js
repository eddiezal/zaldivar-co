/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'earthy-taupe': '#BFA98A',
          'muted-navy': '#334E68',
          'warm-white': '#FFF8F0',
        },
        fontFamily: {
          'serif': ['Playfair Display', 'EB Garamond', 'serif'],
          'sans': ['Nunito', 'Raleway', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }