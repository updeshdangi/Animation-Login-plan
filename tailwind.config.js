/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        primary: '#ffffff',
        accent: '#ff4d4d',
        secondary: '#1a1a1a',
        muted: '#666666',
      },
      fontFamily: {
        headline: ['Bebas Neue', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
      },
      letterSpacing: {
        headline: '1.5vw',
      },
    },
  },
  plugins: [],
}
