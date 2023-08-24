/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    fontFamily: {
      'serif': 'Lazy Dog',
      'sans': 'sans-serif',
      'mono': 'ui-monospace, SFMono-Regular',
    },
    extend: {
      colors: {
        primary: '#B86FD6',
        secondary: '#CDABDB',
        paragraph: '#292929',
        background: '#D2B4DE'
      },
    },
  },
  plugins: [],
}