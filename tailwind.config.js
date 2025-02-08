/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-green': '#00FF00',
        'dark-bg': '#050505',
        'dark-card': '#0A0A0A',
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00FF00, 0 0 10px #00FF00, 0 0 15px #00FF00' },
          '100%': { boxShadow: '0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 30px #00FF00' },
        },
      },
    },
  },
  plugins: [],
};