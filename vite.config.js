import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/screen-recorder-chrome-extension/",
  plugins: [react()],
})
