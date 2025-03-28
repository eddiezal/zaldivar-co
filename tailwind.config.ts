import type { Config } from 'tailwindcss'

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Custom Fonts for Modern Craftsman Aesthetic
      fontFamily: {
        serif: ['"Playfair Display"', 'EB Garamond', 'serif'],
        sans: ['Nunito', 'Raleway', 'sans-serif'],
      },
      // Line height for improved vertical rhythm
      lineHeight: {
        relaxed: '1.75',
        loose: '2',
      },
      // Custom colors aligned with Zaldivar & Co's aesthetic
      colors: {
        taupe: {
          light: '#d8c7ae',
          DEFAULT: '#BFA98A',
          dark: '#a78f6e',
        },
        navy: {
          light: '#4a6583',
          DEFAULT: '#334E68',
          dark: '#263b50',
        },
        warm: {
          white: '#FFF8F0',
          light: '#f5efe7',
          paper: '#f0e9df',
        },
      },
      // Box shadows and text shadows for subtle effects
      boxShadow: {
        craftsman: '0 2px 10px rgba(191, 169, 138, 0.15)',
      },
      textShadow: {
        soft: '0 2px 4px rgba(0, 0, 0, 0.08)',
      },
      // Responsive Breakpoints (Extra Small to 2XL)
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Ensure typography plugin is enabled
  ],
} satisfies Config;
