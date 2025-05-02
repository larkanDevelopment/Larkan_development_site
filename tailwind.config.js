/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#39ff14',
        'neon-blue': '#00ffff',
      },
      boxShadow: {
        'neon-glow': '0 0 8px #39ff14, 0 0 16px #39ff14',
      },
    },
  },
  plugins: [],
}
