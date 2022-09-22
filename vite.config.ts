import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true
  },
  plugins: [react({
    jsxImportSource: '@emotion/react'
  })],
  esbuild: {
    logOverride: {
      'this-is-undefined-in-esm': 'silent'
    }
  }
})
