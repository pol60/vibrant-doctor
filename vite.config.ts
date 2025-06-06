import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '', // Указано имя репозитория для GitHub Pages
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: [
            'react',
            'react-dom',
            'react-router-dom',
            '@tanstack/react-query',
          ],
          framer: [
            'framer-motion'
          ],
          lucide: [
            'lucide-react'
          ],
        },
      },
    },
    chunkSizeWarningLimit: 600, // увеличим лимит предупреждения
  },
}));
