import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#334E68',
        taupe: '#BFA98A',
        warmWhite: '#FFF8F0',
        softSky: '#DDEBF2',
        mistGray: '#E1E1E1',
        background: '#FFF8F0', // same as warmWhite
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Nunito', 'Raleway', 'sans-serif'],
      },
      spacing: {
        sm: '0.5rem',
        md: '1rem',
        lg: '2rem',
        xl: '4rem',
      },
      borderRadius: {
        sm: '6px',
        md: '12px',
        lg: '24px',
      },
      boxShadow: {
        md: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};

export default config;
