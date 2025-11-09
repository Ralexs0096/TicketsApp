/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { tanstackRouter } from '@tanstack/router-plugin/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
     tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react()
  ],
  // test: {
  //   include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
  //   globals: true,
  //   environment: 'jsdom',
  //   setupFiles: './src/setup.ts'
  // }
});
