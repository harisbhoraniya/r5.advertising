/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        accent: ['Montserrat', 'sans-serif'],
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
