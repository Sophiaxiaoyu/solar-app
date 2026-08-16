/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
        serif: ['Noto Serif SC', 'STZhongsong', 'SimSun', 'serif'],
        lishu: ['LiShu', 'STLiti', 'SimLi', 'serif'],
        kaishu: ['KaiShu', 'STKaiti', 'KaiTi', 'serif'],
      },
    },
  },
  plugins: [],
}