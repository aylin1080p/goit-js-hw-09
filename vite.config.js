import { defineConfig } from 'vite';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  root: './',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        gallery: './01-gallery.html',
        form: './02-form.html',
      },
    },
  },
  plugins: [FullReload(['./src/**/*'])],
});