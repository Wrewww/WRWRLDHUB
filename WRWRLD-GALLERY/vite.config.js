import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/WRWRLDHUB/WRWRLD-GALLERY/',
  build: {
    outDir: 'dist/WRWRLD-GALLERY',
    emptyOutDir: true,
  },
})