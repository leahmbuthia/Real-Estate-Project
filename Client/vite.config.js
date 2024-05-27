import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config//
export default defineConfig({
  server: {
    proxy: {
      '/api': {  // Fixed the syntax error: added closing quote
        target: 'http://localhost:3000', // Use single quotes consistently
        secure: false, // Syntax corrected
      }
    },
  },
  plugins: [react()],
});
