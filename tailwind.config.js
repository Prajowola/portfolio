/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        blush: '#f7d8e9',
        lavender: '#c5b3ff',
        rose: '#e78bb7',
        cream: '#fff8f4',
        plum: '#5d3b6e',
        midnight: '#1c1325',
        midnightCard: '#2a1f37'
      },
      boxShadow: {
        glow: '0 0 50px rgba(231, 139, 183, 0.25)',
        glowDark: '0 0 60px rgba(197, 179, 255, 0.18)'
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #fff8f4 0%, #ffeef8 45%, #f0e9ff 100%)',
        'luxury-gradient-dark': 'linear-gradient(135deg, #1c1325 0%, #221830 45%, #1a1422 100%)'
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)']
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite'
      }
    }
  },
  plugins: []
};
