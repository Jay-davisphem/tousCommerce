/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia',],
      'mono': ['ui-monospace', 'SFMono-Regular',],
      'main': ['Inter', 'sans-serif'],
      'special': ['UnifrakturMaguntia', 'cursive']
    },
    extend: {
    },
  },
  plugins: [],
}
