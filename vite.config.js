import { defineConfig } from 'vite';

export default defineConfig({
  base: '/goit-js-hw-09/', // Göreceli yollar için
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