/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF6EF',
        olive: {
          DEFAULT: '#2D4A3E',
          light: 'rgba(45, 74, 62, 0.7)',
        },
        gold: {
          DEFAULT: '#C8A951',
          light: 'rgba(200, 169, 81, 0.15)',
        },
        charcoal: '#1A1A1A',
        'nav-olive': '#3D6B5C',
        'dark-section': {
          DEFAULT: '#1C2B25',
          deep: '#0F1A14',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      borderRadius: {
        xl: '12px',
        '2xl': '16px',
      },
      boxShadow: {
        warm: '0 4px 24px rgba(45, 74, 62, 0.08)',
        'warm-lg': '0 8px 40px rgba(45, 74, 62, 0.12)',
        glow: '0 0 60px rgba(200, 169, 81, 0.15)',
      },
    },
  },
  plugins: [],
};
