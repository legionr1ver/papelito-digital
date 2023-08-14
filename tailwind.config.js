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
        primary: '#5C24D6',
        secondary: '#CDABDB',
        paragraph: '#292929',
        background: '#D2B4DE'
      },
    },
  },
  plugins: [],
}