/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        'red-glow': 'rgba(220, 38, 38, 0.5)',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      animation: {
        'blob': 'blob 7s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'border-flow': 'border-flow 3s linear infinite',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'border-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(220, 38, 38, 0.3)',
        'glow': '0 0 25px -5px rgba(220, 38, 38, 0.4)',
        'glow-lg': '0 0 40px -5px rgba(220, 38, 38, 0.5)',
        'inner-glow': 'inset 0 0 20px rgba(220, 38, 38, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'radial-gradient(at 40% 20%, rgba(220, 38, 38, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(127, 29, 29, 0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(220, 38, 38, 0.1) 0px, transparent 50%)',
      },
      backdropBlur: {
        'xs': '2px',
        '3xl': '64px',
      },
    },
  },
  plugins: [],
}