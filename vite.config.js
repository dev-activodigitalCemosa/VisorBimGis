import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist', // Directorio de salida
    rollupOptions: {
      input: 'index.html' // Ruta de tu archivo HTML principal
    }
  }
})
