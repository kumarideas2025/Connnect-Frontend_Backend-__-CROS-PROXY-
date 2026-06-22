import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{ // this part will automatically append to /api/jokes 
      '/api':'http://localhost:3000',
    },
  },
  plugins: [react()],
})
