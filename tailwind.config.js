/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      },
      colors: {
        primary: {
          DEFAULT: '#063a8e',
          dark: '#0284c7',
          light: '#38bdf8',
          softer: '#e0f2fe',
        },
        accent: {
          blue: '#3b82f6',
          indigo: '#6366f1',
        },
      },
      backgroundImage: {
        'blue-radial': 'radial-gradient(circle at 30% 20%, #e0f2fe, #ffffff)',
        'blue-diagonal': 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #6366f1 100%)',
      },
    },
  },
  plugins: [],
}
