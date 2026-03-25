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
          50: '#fbfefb',
          100: '#f5fcf2',
          200: '#e8f9e1',
          300: '#d4f3c7',
          400: '#b8e9a1',
          500: '#9bdc7d',
          600: '#82c961',
          700: '#69a34c',
          800: '#558440',
          900: '#476d37',
        },
      },
    },
  },
  plugins: [],
};