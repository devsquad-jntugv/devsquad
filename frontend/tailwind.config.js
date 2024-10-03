/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        draw: {
          '0%': {
            strokeDasharray: '0 100',
            strokeDashoffset: '100',
          },
          '100%': {
            strokeDasharray: '100 0',
            strokeDashoffset: '0',
          },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
        draw: 'draw 4s ease-in-out infinite', // Adjust duration for speed
      },
      
    },
  },
  plugins: [ require('tailwind-scrollbar-hide')],
}

