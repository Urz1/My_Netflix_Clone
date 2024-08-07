/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#f5f5f5',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}

