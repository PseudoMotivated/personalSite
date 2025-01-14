import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { plugin, Mode } from 'vite-plugin-markdown';

export default defineConfig({
  plugins: [
    react(),
    plugin({
      mode: [Mode.HTML, Mode.REACT],
      markdownIt: {
        html: true,
        linkify: true,
        typographer: true
      },
      frontmatter: true
    })
  ]
});