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
            'serif': 'More Sugar, serif',
            'sans': 'Noto Sans, sans-serif',
            'mono': 'ui-monospace, SFMono-Regular',
        },
        extend: {
            colors: {
                primary: '#88a3e2',
                secondary: '#beb4de',
                /*paragraph: '#292929',
                background: '#D2B4DE'*/
            },
        },
    },

    plugins: [],
};
