import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // 👈 Add this

export default defineConfig({
  plugins: [react()],
  base: '/achyut-tiwari/', // ← Keep this in sync with the GitHub Pages repo name
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 👈 Map @ to /src
    },
  },
})
