/** @type {import('tailwindcss').Config} */
module.exports = {
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
        plum: '#5d3b6e'
      },
      boxShadow: {
        glow: '0 0 50px rgba(231, 139, 183, 0.25)'
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #fff8f4 0%, #ffeef8 45%, #f0e9ff 100%)'
      }
    }
  },
  plugins: []
};
