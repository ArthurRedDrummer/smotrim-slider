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
      fontFamily: {
        'rf-dewi': ['RF Dewi', 'sans-serif'],
      },
      backgroundImage: {
        'icon-arrow': 'url(@icons/arrow.svg)',
        'icon-loader': 'url(@icons/loader.svg)'
      },
    },
  },
  plugins: [],
}

