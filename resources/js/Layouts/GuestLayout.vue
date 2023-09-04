<script setup>
import { Link } from '@inertiajs/vue3';
import { router } from '@inertiajs/vue3';
import { reactive } from 'vue';

const search = reactive({
    type: '',
    search: '',
});

function submitSearch(){
    router.get('/gallery', search);
};
</script>

<template>
    <div id="top-banner" class="bg-[#101b21]">
        <p class="max-w-[1200px] mx-auto text-white text-center font-serif text-xl tracking-wide py-1">Pedí tu invitación y
            te la entregamos en menos de 72Hs!</p>
    </div>
    <header class="shadow-md mb-16 sticky top-0 bg-white z-30">
        <div class="max-w-[1200px] mx-auto flex">
            <div class="flex-initial flex items-center">
                <Link href="/">
                    <img class="max-w-[5rem] lg:max-w-[7rem] mx-auto p-3" src="/assets/images/logo.png" alt="Logo Papelito Digital">
                </Link>
            </div>
            <div class="flex-1 items-center">
                <form id="search" class="p-2 flex text-sm text-gray-400" @submit.prevent="submitSearch">
                    <select v-model="search.type" class="p-3 border border-[rgb(225, 227, 230)]">
                        <option value="">Todas</option>
                        <option value="fija">Fijas</option>
                        <option value="animada">Animadas</option>
                    </select>
                    <button type="submit" class="p-3 border-t border-b border-[rgb(225, 227, 230)]">
                        <svg class="aa-SubmitIcon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                            <path
                                d="M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z">
                            </path>
                        </svg>
                    </button>
                    <input v-model="search.search" class="p-3 border-t border-e border-b border-[rgb(225, 227, 230)] w-full" name="search" type="search"
                        placeholder="Busca invitaciones por tema" required>
                </form>
                <nav class="hidden lg:block">
                    <ul class="flex items-center justify-evenly py-4 text-primary font-serif text-xl">
                        <li><Link href="/gallery/baby-shower">Baby Shower</link></li>
                        <li><Link href="/gallery/comunion">Comuniones</Link></li>
                        <li><Link href="/gallery/bautismos">Bautismos</Link></li>
                        <li><Link href="/gallery/bodas">Bodas</Link></li>
                        <li><Link href="/gallery/cumpleaños-adultos">Cumpleaños<br>Adultos</Link></li>
                        <li><Link href="/gallery/cumpleaños-niños">Cumpleaños<br>Niños</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    <main>
        <slot></slot>
    </main>
    <footer class="max-w-[1200px] mx-auto mb-16">
        <h3 class="text-center text-4xl font-serif font-bold tracking-wider mb-8 text-primary p-3">Seguinos en nuestras redes sociales!</h3>
        <div class="grid lg:grid-cols-3 gap-7 justify-evenly">
            <a href="https://www.instagram.com/papelitodigital.ar/" class="flex items-center justify-center lg:border-e lg:border-e-primary pt-3" target="_blank">
                <img class="w-10" src="/assets/images/icons/instagram.png" alt="Logo Instagram">
                <p class="ms-3 font-bold tracking-wide">/papelitodigital.ar</p>
            </a>
            <a href="https://www.facebook.com/papelitodigital.ar" class="flex items-center justify-center lg:border-e lg:border-e-primary" target="_blank">
                <img class="w-10" src="/assets/images/icons/facebook.png" alt="Logo Facebook">
                <p class="ms-3 font-bold tracking-wide">/papelitodigital.ar</p>
            </a>
            <a href="https://api.whatsapp.com/message/MQG3D2XP3BMWD1?autoload=1&app_absent=0" class="flex items-center justify-center" target="_blank">
                <img class="w-10" src="/assets/images/icons/whatsapp.png" alt="Logo Whatsapp">
                <p class="ms-3 font-bold tracking-wide">+54 9 11 2166 4157</p>
            </a>
        </div>

        <div id="whatsapp-sticky" class="fixed bottom-5 right-5 shadow-lg rounded-full">
            <a href="https://api.whatsapp.com/message/MQG3D2XP3BMWD1?autoload=1&app_absent=0" target="_blank">
                <img class="w-16 h-16" src="/assets/images/icons/whatsapp-original.png" alt="Logo Whatsapp">
            </a>
        </div>
    </footer>
    <div class="bg-primary w-full h-2"></div>
</template>
