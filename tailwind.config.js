/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        architecture: {
          charcoal: '#1A1A1A',
          gold: '#C5A059',
          silver: '#A0A0A0',
          offwhite: '#FAFAFA',
          ivory: '#F9F6EE',
        }
      },
      spacing: {
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
        '48': '48px',
        '56': '56px',
        '64': '64px',
        '72': '72px',
        '80': '80px',
        '96': '96px',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
