import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@stores': path.resolve(__dirname, './src/stores'),
      '@fonts': path.resolve(__dirname, './src/assets/fonts'),
      '@icons': path.resolve(__dirname, './src/assets/images/icons'),
    },
    extensions: [
      '.vue',
      '.js'
    ]
  }
})
