import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8000,
    open: true,
    proxy: {
      "/proxyApi": {
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/proxyApi/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
      "#": path.join(__dirname, "types"),
    },
  },
});
