/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js, vue}',
    './src/*.{js, vue}',
    './src/App.vue',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'rf-dewi': ['RF Dewi', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

