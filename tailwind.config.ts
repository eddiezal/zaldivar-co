import type { Config } from 'tailwindcss'

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'taupe': {
          light: '#d8c7ae',
          DEFAULT: '#BFA98A',
          dark: '#a78f6e'
        },
        'navy': {
          light: '#4a6583',
          DEFAULT: '#334E68',
          dark: '#263b50'
        },
        'warm': {
          white: '#FFF8F0',
          light: '#f5efe7',
          paper: '#f0e9df'
        }
      },
      fontFamily: {
        'serif': ['"Playfair Display"', '"EB Garamont"', 'serif'],
        'sans': ['Nunito', 'Raleway', 'sans-serif'],
      },
      boxShadow: {
        'craftsman': '0 2px 10px rgba(191, 169, 138, 0.15)'
      },
      textShadow: {
        'soft': '0 2px 4px rgba(0, 0, 0, 0.08)'
      }
    },
  },
  plugins: [],
} satisfies Config
