import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    vite: {
    plugins: [tailwindcss()]
  },

  site: 'https://calebjusth.github.io',
  base: '/bertu-media',


});