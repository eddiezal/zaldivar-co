import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import mdx from '@mdx-js/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Corrected MDX configuration
    mdx({
      // Add any specific options if needed
    }),
    react(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), // Correctly resolve src directory
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
});
