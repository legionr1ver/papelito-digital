<script setup>
</script>

<template>
    <div id="top-banner" class="bg-[#101b21]">
        <p class="max-w-[1200px] mx-auto text-white text-center font-serif text-xl tracking-wide py-1">Pedí tu invitación y
            te la entregamos en menos de 72Hs!</p>
    </div>
    <header class="shadow-md mb-16 sticky top-0 bg-white">
        <div class="max-w-[1200px] mx-auto flex">
            <div class="flex-initial flex items-center justify-center">
                <img class="max-w-[5rem] me-10" src="/assets/images/logo.png" alt="Logo Papelito Digital">
            </div>
            <div class="flex-1">
                <form id="search" class="p-2 flex text-sm text-gray-400">
                    <select class="p-3 border border-[rgb(225, 227, 230)]">
                        <option value="todas">Todas</option>
                        <option value="fijas">Fijas</option>
                        <option value="animadas">Animadas</option>
                    </select>
                    <button type="submit" class="p-3 border-t border-b border-[rgb(225, 227, 230)]">
                        <svg class="aa-SubmitIcon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                            <path
                                d="M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z">
                            </path>
                        </svg>
                    </button>
                    <input class="p-3 border-t border-e border-b border-[rgb(225, 227, 230)] w-full" type="search"
                        placeholder="Busca invitaciones por tema">
                </form>
                <nav>
                    <ul class="flex justify-evenly py-4 text-primary font-serif text-xl">
                        <li><a href="#">Baby Shower</a></li>
                        <li><a href="#">Casamientos</a></li>
                        <li><a href="#">Comuniones</a></li>
                        <li><a href="#">Cumpleaños</a></li>
                        <li><a href="#">Animadas</a></li>
                        <li><a href="#">Estáticas</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    <main>
        <section id="invitaciones-animadas" class="max-w-[1200px] mx-auto min-h-[600px] mb-16 bg-[url('/assets/bg-nubes.jpg')] bg-cover bg-no-repeat bg-right-bottom grid grid-cols-[2fr_1fr] items-center justify-center rounded-lg">
            <div class="grid items-center justify-center gap-1">
                <h2 class="text-7xl text-center font-serif font-bold tracking-wider text-white" style="text-shadow: 2px 2px 15px rgba(0,0,0,1);">Invitaciones<br>Animadas</h2>
                <p class="text-center text-white max-w-[40ch] text-xl">Con música de fondo y hasta 30 segundos de duración!</p>
                <div class="text-center">
                    <button class="bg-primary text-white py-2 px-6 mt-5 rounded text-xl shadow-xl tracking-wider">Ver diseños</button>
                </div>
            </div>
            <div>
                <img src="/assets/invitacion-rapunzel.png" alt="Invitacion animada rapunzel">
            </div>
        </section>

        <section id="categorias" class="max-w-[1200px] mx-auto mb-16">
            <header class="mb-7">
                <h3 class="text-center text-4xl font-serif font-bold tracking-wider">Cualquier razón para celebrar</h3>
                <p class="text-center text-sm">Hay muchos modelos para elegir</p>
            </header>
            <div class="grid grid-cols-3 auto-rows-[120px] gap-3 text-white font-bold">
                <a class="bg-[url('/assets/images/links/baby-shower.jpg')] bg-cover bg-no-repeat flex items-center justify-start p-5 rounded-lg" href="#"><h4>Baby Shower</h4></a>
                <a class="bg-[url('/assets/images/links/comunion.jpg')] bg-cover bg-no-repeat flex items-center justify-start p-5 rounded-lg" href="#"><h4>Comunión</h4></a>
                <a class="bg-[url('/assets/images/links/bautismo.jpg')] bg-cover bg-no-repeat flex items-center justify-start p-5 rounded-lg" href="#"><h4>Bautismo</h4></a>
                <a class="bg-[url('/assets/images/links/boda.jpg')] bg-cover bg-no-repeat flex items-center justify-start p-5 rounded-lg" href="#"><h4>Boda</h4></a>
                <a class="bg-[url('/assets/images/links/cumpleanos-adulto.jpg')] bg-cover bg-no-repeat flex items-center justify-start p-5 rounded-lg" href="#"><h4>Cumpleaños<br>adultos</h4></a>
                <a class="bg-[url('/assets/images/links/cumpleanos-infantil.jpg')] bg-cover bg-no-repeat flex items-center justify-start p-5 rounded-lg" href="#"><h4>Cumpleaños<br>infantiles</h4></a>
            </div>
        </section>

        <section id="informacion" class="bg-gray-100 py-10">
            <div class="max-w-[1200px] mx-auto mb-16 flex">
                <div class="flex-1 p-10">
                    <h3 class="text-center text-4xl font-serif font-bold tracking-wider mb-5 text-primary">Plazos de entrega</h3>
                    <div class="mb-7">
                        <h4 class="text-2xl font-serif text-primary">Invitaciones interactivas y fijas</h4>
                        <p>
                            Si elegis un diseño del catálogo se entrega el mismo día del pago.<br>
                            En caso de querer un nuevo diseño el plazo de entrega es de 24hs como mínimo y 48hs como máximo.
                        </p>
                    </div>
                    <div class="mb-7">
                        <h4 class="text-2xl font-serif text-primary">Invitaciones animadas</h4>
                        <p>
                            Para diseños del catálogo se entrega en el mismo día o 48hs maximo segun disponibilidad.<br>
                            En caso de querer un diseño nuevo el tiempo mínimo es de 72Hs hábiles según disponibilidad.
                        </p>
                    </div>
                </div>
                <div class="flex-initial">
                    <img src="/assets/images/preguntas.jpg" alt="Preguntas">
                </div>
            </div>
        </section>

        <div id="whatsapp-sticky" class="fixed bottom-5 right-5">
            <a href="#">
                <img class="w-16 h-16" src="/assets/images/icons/whatsapp-original.png" alt="Logo Whatsapp">
            </a>
        </div>
    </main>
    <footer class="max-w-[1200px] mx-auto mb-16">
        <h3 class="text-center text-4xl font-serif font-bold tracking-wider mb-8 text-primary">Seguinos en nuestras redes sociales!</h3>
        <div class="grid grid-cols-3 justify-evenly">
            <a href="#" class="flex items-center justify-center border-e border-e-primary pt-3">
                <img class="w-10" src="/assets/images/icons/instagram.png" alt="Logo Instagram">
                <p class="ms-3 font-bold tracking-wide">/papelitodigital.ar</p>
            </a>
            <a href="#" class="flex items-center justify-center border-e border-e-primary">
                <img class="w-10" src="/assets/images/icons/facebook.png" alt="Logo Facebook">
                <p class="ms-3 font-bold tracking-wide">/papelitodigital.ar</p>
            </a>
            <a href="#" class="flex items-center justify-center">
                <img class="w-10" src="/assets/images/icons/whatsapp.png" alt="Logo Whatsapp">
                <p class="ms-3 font-bold tracking-wide">+54 9 11 2166 4157</p>
            </a>
        </div>
    </footer>
    <div class="bg-primary w-full h-2"></div>
</template>

<style scoped></style>