/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f9',
          100: '#d9e2ec',
          200: '#b6c6d9',
          300: '#8da3bf',
          400: '#6581a6',
          500: '#4c6790',
          600: '#1a365d',
          700: '#203354',
          800: '#1a2c4d',
          900: '#19284a',
        },
        orange: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffdcaa',
          300: '#ffc374',
          400: '#ffa13d',
          500: '#ff7e1d',
          600: '#fb640d',
          700: '#cc470a',
          800: '#a13a10',
          900: '#83320f',
        },
      },
    },
  },
  plugins: [],
};