import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

const url = process.env.VITE_NODE_APP_URL
console.log(url);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      "/api": {
        target: url,
        // target: "http://localhost:8000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
