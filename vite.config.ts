import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    cors: {
      origin: [
        'http://localhost:3000',
        /.*\.app\.github\.dev$/
      ],
      credentials: true
    }
  }
});