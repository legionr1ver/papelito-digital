/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        fontFamily: {
            'serif': 'Lazy Dog',
            'sans': 'sans-serif',
            'mono': 'ui-monospace, SFMono-Regular',
        },
        extend: {
            colors: {
                primary: '#B2A0D9',
                'light-primary': '#d2b4de',
                secondary: '#CDABDB',
                paragraph: '#292929',
                background: '#D2B4DE'
            },
        },
    },

    plugins: [],
};
