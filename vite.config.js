import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Tic_Tac_Toe_ReactJs/',
  plugins: [react()],
})
