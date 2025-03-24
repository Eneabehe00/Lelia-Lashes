/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#f5e7c1',
          DEFAULT: '#d4af37',
          dark: '#b8860b',
        },
        primary: {
          light: '#f9f5e9',
          DEFAULT: '#d4af37',
          dark: '#8b7229',
        },
        secondary: {
          light: '#f8f0e3',
          DEFAULT: '#a67c52',
          dark: '#704214',
        },
        background: {
          light: '#ffffff',
          DEFAULT: '#faf7f2',
          dark: '#2d2d2d',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'gold': '0 4px 14px 0 rgba(212, 175, 55, 0.3)',
      }
    },
  },
  plugins: [],
}