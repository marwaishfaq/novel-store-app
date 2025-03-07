import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'pdf.worker.js': 'pdfjs-dist/build/pdf.worker.js',
    },
  },
})
