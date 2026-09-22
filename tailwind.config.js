/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'fest-dark': '#050505',
        'fest-card': '#090909',
        'fest-surface': '#111111',
        'fest-accent': '#CCFF00',
        'fest-cyan': '#00F0FF',
        'fest-red': '#FF3366',
        'fest-orange': '#FF6B00',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'neon-lime': '0 0 20px rgba(204, 255, 0, 0.35)',
        'neon-red': '0 0 20px rgba(255, 51, 102, 0.35)',
        'neon-cyan': '0 0 20px rgba(0, 240, 255, 0.35)',
      },
    },
  },
  plugins: [],
}
