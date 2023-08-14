<script setup>
</script>

<template>
    <header
        class="bg-[url('/images/fondo.jpg')] bg-[center_80%] bg-cover bg-no-repeat flex items-center justify-center py-7">
        <img class="max-w-[10rem] lg:max-w-[14rem] inline-block" src="/images/logo.png" alt="logo-papelito-digital">
        <h1 class="inline-block text-4xl lg:text-6xl text-[#FAF2FB] font-['Chela_One'] ms-2">
            Invitaciones<br>
            Digitales
        </h1>
    </header>
    <main>
        <section class="px-4 py-12 text-center lg:container lg:mx-auto">
            <h2 class="text-center font-serif text-primary text-4xl mb-5">¡Por que invitaciones digitales?</h2>
            <ul class="grid lg:grid-cols-3 lg:mt-10 items-center justify-center gap-12 px-10 text-xl">
                <li class="grid grid-rows-[100px_40px_auto] items-center justify-center">
                    <img class="mx-auto" src="/images/icons/item_creative.svg" alt="Icono creatividad">
                    <h3 class="font-serif text-secondary text-2xl">Creatividad</h3>
                    <p class="text-paragraph max-w-[40ch]">Puedes incluir música y videos que no son posibles con las
                        invitaciones impresas.</p>
                </li>
                <li class="grid grid-rows-[100px_30px_auto] items-center justify-center">
                    <img class="mx-auto" src="/images/icons/item_email.svg" alt="Icono facil de compartir">
                    <h3 class="font-serif text-secondary text-2xl">Facil de compartir!</h3>
                    <p class="text-paragraph max-w-[40ch]">Se pueden enviar instantáneamente por correo electrónico,
                        mensajes de texto o redes sociales.</p>
                </li>
                <li class="grid grid-rows-[100px_30px_auto] items-center justify-center">
                    <img class="mx-auto" src="/images/icons/item_money.svg" alt="Icono accesible">
                    <h3 class="font-serif text-secondary text-2xl">Accesibles</h3>
                    <p class="text-paragraph max-w-[40ch]">Como no estan impresas te ahorras el costo de impresión!</p>
                </li>
            </ul>
        </section>
        <section class="px-4 py-12 grid items-center justify-center lg:container lg:mx-auto lg:grid-cols-[2fr_1fr]">
            <div>
                <h2 class="text-center font-serif text-primary text-4xl mb-2">Galeria</h2>
                <p class="px-10 text-paragraph max-w-[60ch] mx-auto text-xl text-center">Ponemos a tu disposición una
                    galería completa de invitaciones
                    para que veas
                    nuestro trabajo! Ingresa y conoce
                    como trabajamos.</p>
                <div class="text-center">
                    <a href="#"
                        class="bg-primary text-white font-bold text-center py-3 px-10 rounded shadow-lg inline-block mx-auto my-5">Ir
                        a Galeria</a>
                </div>
            </div>
            <div class="grid justify-center lg:block">
                <img src="/images/mario-iphone.png" alt="Invitación Mario Iphone">
            </div>
        </section>
        <section class="bg-background text-white">
            <div class="px-4 py-12 lg:container lg:mx-auto lg:grid lg:grid-cols-[2fr_1fr]">
                <div class="text-center">
                    <h2 class="text-center font-serif text-4xl mb-2">Contacto</h2>
                    <p class="px-10 pb-7 text-center text-xl max-w-[60ch] mx-auto">Podes comunicarte con nosotros a traves de nuestras redes sociales o complemando
                        el
                        formulario.</p>
                    <form action="mailto:contacto@papelitodigital.com" class="px-10 pb-10 grid gap-2 text-paragraph max-w-2xl mx-auto">
                        <input class="px-4 py-2 rounded" type="tel" placeholder="Teléfono">
                        <input class="px-4 py-2 rounded" type="email" placeholder="Email">
                        <textarea rows="5" class="px-4 py-2 rounded"
                            placeholder="Hola Papelito Digital! Te consulto lo siguiente…"></textarea>
                        <button class="bg-primary text-white font-bold text-center py-3 px-10 rounded shadow-lg">Enviar</button>
                    </form>
                </div>
                <ul class="space-y-5 self-center px-10 lg:px-0">
                    <li>
                        <a href="https://www.instagram.com/papelitodigital.ar/" class="flex items-center">
                            <img class="w-11" src="/images/icons/social_instagram.svg">
                            <span class="ms-3">/papelitodigital.ar</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://api.whatsapp.com/message/MQG3D2XP3BMWD1?autoload=1&app_absent=0"
                            class="flex items-center">
                            <img class="w-11" src="/images/icons/social_whatsapp.svg">
                            <span class="ms-3">+54 9 11 2166-4157</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.tiktok.com/@papelitodigital" class="flex items-center">
                            <img class="w-11" src="/images/icons/social_tiktok.svg">
                            <span class="ms-3">@papelitodigital</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </main>
</template>

<style scoped></style>