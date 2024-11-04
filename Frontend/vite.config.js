import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure this matches the distDir in vercel.json
     rollupOptions: {
      input: 'src/main.jsx' // Ensure that your entry point is defined correctly
    }
  },
})
