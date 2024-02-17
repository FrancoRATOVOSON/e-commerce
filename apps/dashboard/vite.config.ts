import generouted from '@generouted/react-router/plugin'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import { defineConfig } from 'vite'

const pathResolve = (dir: string) => path.resolve(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  plugins: [react(), generouted()],
  resolve: {
    alias: {
      '@': pathResolve('src'),
      '@overview': pathResolve('src/pages/(app)/overview')
    }
  },
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ['**/src-tauri/**']
    }
  }
}))
