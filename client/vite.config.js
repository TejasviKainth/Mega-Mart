import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'https://mega-mart-zeta.vercel.app/api/auth/login'
    }
  },
  build: {
    outDir: 'dist'
  }
})
