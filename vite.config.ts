import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    host: true,
    port: 3000,
  },
  base: '/sumukhSR3.github.io/', // Ensure this matches your repository name
});