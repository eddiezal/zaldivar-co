import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

// ✅ Correct ESModule configuration
const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      // 🎨 Updated Color Palette for Modern Craftsman Aesthetic
      colors: {
        taupe: {
          light: '#D8C7AE', // Lighter Taupe
          DEFAULT: '#C5A98D', // Primary Taupe
          dark: '#A78F6E', // Darker Taupe
        },
        navy: {
          light: '#4A6583', // Lighter Navy
          DEFAULT: '#26313E', // Primary Navy
          dark: '#263B50', // Darker Navy
        },
        slate: {
          light: '#3E4E60', // Light Slate for Borders
          DEFAULT: '#2C2C2C', // Neutral Slate
          dark: '#1A1A1A', // Dark Slate for Contrast
        },
        warm: {
          white: '#FFF8F0', // Warm White for Background
          paper: '#F0E9DF', // Paper Color for Cards
          light: '#F5EFE7', // Slightly lighter version
        },
        muted: {
          navy: '#4A6583', // Muted Navy for Text
          taupe: '#D8C7AE', // Muted Taupe for Background
        },
        earthy: {
          taupe: '#BFA98A', // Earthy Taupe for Accents
        },
        accent: {
          gold: '#CDA45E', // Gold for Highlighted Text
          olive: '#8D8B6C', // Olive as a Neutral Accent
        },
        gold: '#C9A66B', // Muted Gold for Accents
      },

      // 🧱 Updated Font Family with Fallbacks
      fontFamily: {
        serif: ['"Playfair Display"', 'EB Garamond', 'serif'], // For Headlines
        sans: ['Nunito', 'Raleway', 'sans-serif'], // For Body Text
        mono: ['"Fira Code"', 'monospace'], // For Code Snippets
      },

      // ✨ Box Shadows for Subtle Effects
      boxShadow: {
        craftsman: '0 2px 10px rgba(191, 169, 138, 0.15)', // Soft and Elegant
        subtle: '0 4px 12px rgba(0, 0, 0, 0.05)', // Subtle Box Shadow
      },

      // 📏 Enhanced Responsive Breakpoints for Consistency
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },

      // 📐 Consistent Line Height for Better Vertical Rhythm
      lineHeight: {
        relaxed: '1.75',
        loose: '2',
        snug: '1.5',
      },

      // 🕹️ Button and Interactive States
      transitionProperty: {
        width: 'width',
        spacing: 'margin, padding',
        background: 'background-color, border-color',
      },

      // ✅ Custom Gradients for Elegant Visual Effects
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, #FFF8F0 0%, #BFA98A 100%)',
        'navy-gradient': 'linear-gradient(135deg, #334E68 0%, #263B50 100%)',
      },

      // 📏 Consistent Widths for Layout Flexibility
      width: {
        '90p': '90%',
        '80p': '80%',
        '70p': '70%',
      },

      // 🎨 Updated Border Radius for Smooth Corners
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },

      // ✨ Improved Container Configuration for Content Alignment
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '3rem',
        },
      },

      // ✅ Consistent Spacing for Vertical & Horizontal Padding
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
      },

      // 🆕 Responsive Typography Settings
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontFamily: theme('fontFamily.serif').join(', '),
              fontWeight: '900',
            },
            h2: {
              fontFamily: theme('fontFamily.serif').join(', '),
              fontWeight: '800',
            },
            h3: {
              fontFamily: theme('fontFamily.serif').join(', '),
              fontWeight: '700',
            },
            p: {
              fontFamily: theme('fontFamily.sans').join(', '),
              lineHeight: theme('lineHeight.relaxed'),
            },
            blockquote: {
              fontFamily: theme('fontFamily.serif').join(', '),
              fontWeight: '600',
            },
          },
        },
      }),
    },
  },

  // ✅ Corrected Plugins
  plugins: [typography],
};

export default config;
