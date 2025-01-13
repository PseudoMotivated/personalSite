import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { plugin } from 'vite-plugin-markdown';
import { Mode } from 'vite-plugin-markdown';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), plugin({
    mode: [Mode.HTML, Mode.REACT] // or any combination you need
  })],
});
