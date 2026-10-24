/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { colors: { ink: '#080b0b', lime: '#d6ff00' }, fontFamily: { sans: ['Manrope', 'sans-serif'], mono: ['DM Mono', 'monospace'] } } },
  plugins: [],
}
