<script setup>
import Invitacion from './Invitacion.vue';
</script>

<template>
    <div id="top-banner" class="bg-[#101b21]">
        <p class="max-w-[1200px] mx-auto text-white text-center font-serif text-xl tracking-wide py-1">Pedí tu invitación y
            te la entregamos en menos de 72Hs!</p>
    </div>
    <header class="shadow-md mb-16 sticky top-0 bg-white z-10">
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
    <main class="max-w-[1200px] mx-auto mb-16 flex">
        <div id="buscador-galeria" class="flex-initial p-10">
            <div class="mb-12">
                <h2 class="font-serif text-4xl text-primary mb-4">Temáticas</h2>
                <ul class="space-y-1 text-md text-gray-500">
                    <li><a href="#">Baby Shower</a></li>
                    <li><a href="#">Casamientos</a></li>
                    <li><a href="#">Comuniones</a></li>
                    <li><a href="#">Cumpleaños Infantiles</a></li>
                    <li><a href="#">Cumpleaños Adultos</a></li>
                    <li><a href="#">Cumpleaños de 15</a></li>
                    <li><a href="#">Graduaciones</a></li>
                </ul>
            </div>
            <div class="mb-12">
                <h2 class="font-serif text-4xl text-primary mb-4">Tipo</h2>
                <ul class="space-y-1 text-md text-gray-500">
                    <li class="flex items-center">
                        <input id="chk-animada" type="checkbox" class="block w-4 h-4 me-2 accent-primary text-white">
                        <label for="chk-animada">Animada</label>
                    </li>
                    <li class="flex items-center">
                        <input id="chk-fija" type="checkbox" class="block w-4 h-4 me-2 accent-primary text-white">
                        <label for="chk-fija">Fija</label>
                    </li>
                </ul>
            </div>
            <div class="mb-12">
                <h2 class="font-serif text-4xl text-primary mb-4">Extras</h2>
                <ul class="space-y-1 text-md text-gray-500">
                    <li class="flex items-center">
                        <input id="chk-ubicacion" type="checkbox" class="block w-4 h-4 me-2 accent-primary text-white">
                        <label for="chk-ubicacion">Ubicación en el mapa</label>
                    </li>
                    <li class="flex items-center">
                        <input id="chk-confirmacion" type="checkbox" class="block w-4 h-4 me-2 accent-primary text-white">
                        <label for="chk-confirmacion">Conirmación de asistencia</label>
                    </li>
                </ul>
            </div>
            
        </div>
        <div id="galeria" class="flex-1 grid grid-cols-4 auto-rows-[400px] gap-x-4 gap-y-8">
            <Invitacion title="Baby Shower Juli" src="/assets/static-invitations/baby-shower-juli.jpg" />
            <Invitacion title="Cumple Bruno" src="/assets/static-invitations/cumple-bruno.jpg" />
            <Invitacion title="Cumple Gino y Mirko" src="/assets/static-invitations/cumple-gino-y-mirko.jpg" />
            <Invitacion title="Cumple Giselle" src="/assets/static-invitations/cumple-giselle.jpg" />
            <Invitacion title="Cumple Giselle" src="/assets/static-invitations/cumple-giselle.jpg" />
            <Invitacion title="Cumple Giselle" src="/assets/static-invitations/cumple-giselle.jpg" />
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