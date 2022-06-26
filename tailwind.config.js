/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "index.html"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      main: ["Inter", "sans-serif"],
      special: ["UnifrakturMaguntia", "cursive"],
    },
    extend: {
      colors: {
        "h-txt-cl": "#957FEF",
        "txt-cl": "#B79CED",
        'bg-cl': '#E9FFF9',
      },
    },
  },
  plugins: [],
};
