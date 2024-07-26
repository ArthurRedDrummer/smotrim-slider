/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/*.{vue, js}',
    './src/**/*.{vue, js}'
  ],
  theme: {
    extend: {
      screens: {
        desktop: { max: '1440px' },
        laptop: { max: '1280px' },
        tablet: { max: '1024px' },
        mobile: { max: '768px' },
      },
      colors: {
        'light-gray': '#D9D9D9'
      },
      fontFamily: {
        'rf-dewi': ['RF Dewi', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'icon-close': 'url(@icons/close.svg)',
        'icon-arrow': 'url(@icons/arrow.svg)',
        'icon-loader': 'url(@icons/loader.svg)'
      },
    },
  },
  plugins: [],
}

