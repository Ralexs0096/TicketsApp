/// <reference types="vitest" />
import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRouter()]
  // test: {
  //   include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
  //   globals: true,
  //   environment: 'jsdom',
  //   setupFiles: './src/setup.ts'
  // }
});
