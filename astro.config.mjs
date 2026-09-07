import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  alias: {
    '@': './src',
    '@components': './src/components',
    '@layouts': './src/layouts',
    '@content': './src/content',
    '@types': './src/types',
    '@utils': './src/utils',
  },
  vite: {
    ssr: {
      external: ['sharp']
    }
  }
});
