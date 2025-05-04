import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
  define: {
    // Prevent Vite from injecting any process.env values
    'process.env': {},
  },
});