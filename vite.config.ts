import { defineConfig } from 'vite';
import handlebars from './vite-plugin-handlebars-precompile';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [handlebars()],
});
