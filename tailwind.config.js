/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        accent: ['Manrope', 'sans-serif'],
      },
      colors: {
        primary: '#111827',
        secondary: '#4b5563',
        muted: '#6b7280',
        'accent-pink': '#d27083',
        'tag-teal': '#0d8a68',
      },
      maxWidth: {
        content: '1200px',
      }
    },
  },
  plugins: [],
};
