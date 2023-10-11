<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description"
        content="Invitaciones digitales personalizadas para todos los eventos: cumpleaños, bodas, comuniones, etc. Animadas o fijas, ¡Que nadie falte a tu fiesta!" />

    <title inertia>{{ config('app.name', 'Laravel') }}</title>
    <link rel="icon" href="/assets/images/logo.webp" type="image/webp">

    <!-- Scripts -->
    @routes
    @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
    @inertiaHead

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-D9JTQWJKPJ"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-D9JTQWJKPJ');
    </script>
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>