import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './portfolio',
  base: '/Satish-Portfolio/',
  build: {
    outDir: '../dist'
  },
  plugins: [react()]
});
