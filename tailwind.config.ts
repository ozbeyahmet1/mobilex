import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#0381FF',
          100: '#F7FBFF',
        },
        grey: {
          DEFAULT: 'rgba(0, 0, 0, 0.08)',
          100: 'rgba(0, 0, 0, 0.16)',
        },
      },
      transform: {
        revertLayer: 'revert-layer',
      },
      animation: {
        'spin-right': 'spin 100s linear infinite reverse',
        slideIn: 'slideIn 1s normal',
        slideRight: 'slideRight 0.6s normal',
        slideLeft: 'slideLeft 0.6s normal',
      },
      keyframes: {
        slideIn: {
          '0%': { bottom: '-100px', transleteX: '220px' },
          '100%': { bottom: '60px', transleteX: '0' },
        },
      },
    },
    // initial: { y: 600 },
    //         animate: { y: 0 },
    //         exit: { opacity: 0 },
    //         transition: { duration: 1, delay: 0.5 }
    screens: {
      sm: '0',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
      '3xl': '1600px',
    },
    fontSize: {
      lg: '20px',
      '3xl': '32px',
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.container': {
          '@screen sm': {
            maxWidth: '90%',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
          '@screen 2xl': {
            maxWidth: '1320px',
          },
          '@screen 3xl': {
            maxWidth: '1440px',
          },
        },
      });
    }),
  ],
};

export default config;
