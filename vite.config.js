import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Göreceli yollar için
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        gallery: './01-gallery.html',
        form: './02-form.html',
      },
    },
  },
});