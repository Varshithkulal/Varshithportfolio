import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',  // Ensures correct relative paths for production builds
  plugins: [react()],
  build: {
    outDir: 'dist',  // Ensures the build output is in the 'dist' directory
  }
})
