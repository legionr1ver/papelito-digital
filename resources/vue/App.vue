<script setup>
</script>

<template>
    <header
        class="bg-[url('/images/fondo.jpg')] bg-[center_bottom_-5rem] bg-cover bg-no-repeat flex items-center justify-center py-7">
        <img class="max-w-[40%] inline-block" src="/images/logo.png" alt="logo-papelito-digital">
        <h1 class="inline-block text-4xl text-[#FAF2FB] font-['Chela_One'] ms-2">
            Invitaciones<br>
            Digitales
        </h1>
    </header>
    <main>
        <section class="px-4 py-12">
            <h2 class="text-center font-serif text-primary text-4xl mb-4">¿Por que invitaciones digitales?</h2>
            <ul class="grid gap-9 px-10">
                <li>
                    <h3 class="font-serif text-secondary text-2xl">Creatividad</h3>
                    <p class="text-paragraph">Puedes incluir música, videos, enlaces a sitios web, mapas interactivos y
                        otros elementos multimedia
                        que no son posibles con las invitaciones impresas.</p>
                </li>
                <li>
                    <h3 class="font-serif text-secondary text-2xl">Facil de compartir!</h3>
                    <p class="text-paragraph">Las invitaciones digitales se pueden enviar instantáneamente por correo
                        electrónico, mensajes de
                        texto o a través de plataformas de redes sociales.</p>
                </li>
                <li>
                    <h3 class="font-serif text-secondary text-2xl">Interactividad</h3>
                    <p class="text-paragraph">Las invitaciones digitales pueden ser interactivas y permitir a los
                        destinatarios confirmar su
                        asistencia.</p>
                </li>
            </ul>
        </section>
        <section class="px-4 py-12">
            <h2 class="text-center font-serif text-primary text-4xl mb-2">Galeria</h2>
            <p class="px-10 text-paragraph">Ponemos a tu disposición una galería completa de invitaciones para que veas
                nuestro trabajo! Ingresa y conoce
                como trabajamos.</p>
            <div class="text-center">
                <a
                    class="bg-primary text-white font-bold text-center p-3 rounded shadow-lg inline-block w-[60%] mx-auto my-5">Ir
                    a Galeria</a>
            </div>
            <div class="grid justify-center">
                <video class="h-[270px] mx-auto" controls src="/invitations/mario.mp4" poster="/invitations/mario-thumbnail.png">

                    Su navegador no soporta la visualización de videos, puede descargarlo en el siguiente link <a
                        href="/invitations/mario.mp4">Aqui</a>
                </video>
                <p class="font-bold text-paragraph">Te mostramos un ejemplo!</p>
            </div>
        </section>
        <section class="px-4 py-12 bg-[#D2B4DE] text-white">
            <h2 class="text-center font-serif text-4xl mb-2">Contacto</h2>
            <p class="px-10 pb-7">Podes comunicarte con nosotros a traves de nuestras redes sociales o complemando el
                formulario.</p>
            <form action="mailto:contacto@papelitodigital.com" class="px-10 pb-10 grid gap-2 text-paragraph">
                <input class="px-4 py-2 rounded" type="tel" placeholder="Teléfono">
                <input class="px-4 py-2 rounded" type="email" placeholder="Email">
                <textarea rows="5" class="px-4 py-2 rounded"
                    placeholder="Hola Papelito Digital! Te consulto lo siguiente…"></textarea>
                <button class="bg-primary text-white font-bold text-center p-3 rounded shadow-lg">Enviar</button>
            </form>
            <ul class="px-10 grid gap-2 font-bold">
                <li>
                    <a href="https://www.instagram.com/papelitodigital.ar/" class="flex items-center">
                        <img class="w-11" src="/images/icons/instagram.svg">
                        <span class="ms-3">/papelitodigital.ar</span>
                    </a>
                </li>
                <li>
                    <a href="https://api.whatsapp.com/message/MQG3D2XP3BMWD1?autoload=1&app_absent=0"
                        class="flex items-center">
                        <img class="w-11" src="/images/icons/whatsapp.svg">
                        <span class="ms-3">+54 9 11 2166-4157</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.tiktok.com/@papelitodigital" class="flex items-center">
                        <img class="w-11" src="/images/icons/tiktok.svg">
                        <span class="ms-3">@papelitodigital</span>
                    </a>
                </li>
            </ul>
        </section>
</main></template>

<style scoped></style>