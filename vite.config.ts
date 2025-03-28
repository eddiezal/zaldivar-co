import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import mdx from '@mdx-js/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Corrected MDX configuration
    mdx({
      providerImportSource: '@mdx-js/react',
    }),
    react(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), // Correctly resolve src directory
    },
  },
  css: {
    postcss: resolve(__dirname, 'postcss.config.cjs'), // Correctly load postcss config
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
  optimizeDeps: {
    include: ['@mdx-js/react'], // Optimize MDX dependencies
  },
});
