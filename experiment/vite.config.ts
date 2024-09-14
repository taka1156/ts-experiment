/// <reference types="vitest" >
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    reporters: ['html'],
    coverage: {
      thresholds: {
        statements: 80,
        functions: 80,
        branches: 80
      }
    }
  },
  resolve: {
    alias: {
      '@/': __dirname + '/src/'
    }
  }
});
