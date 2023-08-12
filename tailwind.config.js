/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    fontFamily: {
      'serif': 'Chela One, cursive, sans-serif',
      'sans': 'Oxygen, sans-serif',
      'mono': 'ui-monospace, SFMono-Regular',
    },
    extend: {
      colors: {
        primary: '#774FCC',
        secondary: '#C89BDA',
        paragraph: '#5B5B5B',
      },
    },
  },
  plugins: [],
}