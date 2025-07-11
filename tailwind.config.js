/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a1a1a',
        'accent-purple': '#ff69b4',
      },
    },
  },
  plugins: [],
};
