<script setup>
import { Link, usePage } from '@inertiajs/vue3';
import { router } from '@inertiajs/vue3';
import { reactive } from 'vue';

const page = usePage();

const search = reactive({
    type: '',
    search: '',
});

function submitSearch() {
    router.get('/gallery', search);
};
</script>

<template>
    <header class="shadow-md mb-6">
        <div id="top" class="bg-secondary text-center text-white p-2 text-xl">
            <p class="font-serif">Envíos gratis por E-mail o Whatsapp</p>
        </div>
        <div class="max-w-[1200px] mx-auto flex px-2">
            <div class="flex-initial flex items-center">
                <Link href="/">
                <img class="max-w-[5rem] lg:max-w-[7rem] mx-auto p-3" src="/assets/images/logo.png"
                    alt="Logo Papelito Digital">
                </Link>
            </div>
            <div class="flex-1 grid items-center">
                <div class="flex">
                    <form id="search" class="flex-1 p-2 flex text-sm text-gray-400" @submit.prevent="submitSearch">
                        <select v-model="search.type" class="hidden lg:block p-3 border border-[rgb(225, 227, 230)]"
                            aria-label="Tipo de invitacion">
                            <option value="">Todas</option>
                            <option value="1">Fijas</option>
                            <option value="2">Animadas</option>
                        </select>
                        <button type="submit" class="border-s p-3 border-t border-b border-[rgb(225, 227, 230)]"
                            aria-label="Buscar">
                            <svg class="aa-SubmitIcon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                <path
                                    d="M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z">
                                </path>
                            </svg>
                        </button>
                        <input v-model="search.search" class="p-3 border-t border-e border-b border-[rgb(225, 227, 230)] w-full"
                            name="search" type="search" placeholder="Busca invitaciones por tema">
                    </form>
                    <div class="flex justify-center items-center">
                        <Link class="bg-primary py-1 px-2 text-xs rounded text-white font-bold me-3" href="/currency/ars">ARS</Link>
                        <Link class="bg-primary py-1 px-2 text-xs rounded text-white font-bold" href="/currency/usd">U$D</Link>
                    </div>
                </div>
                <nav class="hidden lg:grid grid-cols-[1fr_auto] items-center">
                    <ul class="grid grid-flow-col justify-evenly py-4 text-primary font-serif text-xl">
                        <Link as="li" class="relative flex items-center cursor-pointer group" href="/gallery"
                            :data="{ slug: 'cumpleanos' }">
                        <span>Cumpleaños</span>
                        <div
                            class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all group-hover:w-full">
                        </div>
                        </Link>
                        <Link as="li" class="relative flex items-center cursor-pointer group" href="/gallery"
                            :data="{ slug: 'casamientos' }">
                        <span>Casamientos</span>
                        <div
                            class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all group-hover:w-full">
                        </div>
                        </Link>
                        <Link as="li" class="relative flex items-center cursor-pointer group" href="/gallery"
                            :data="{ slug: 'bautismos' }">
                        <span>Bautismos</span>
                        <div
                            class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all group-hover:w-full">
                        </div>
                        </Link>
                        <Link as="li" class="relative flex items-center cursor-pointer group" href="/gallery"
                            :data="{ slug: 'comuniones' }">
                        <span>Comuniones</span>
                        <div
                            class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all group-hover:w-full">
                        </div>
                        </Link>
                        <Link as="li" class="relative flex items-center cursor-pointer group" href="/gallery"
                            :data="{ slug: 'baby-showers' }">
                        <span>Baby<br>Showers</span>
                        <div
                            class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all group-hover:w-full">
                        </div>
                        </Link>
                        <Link as="li" class="relative flex items-center cursor-pointer group" href="/gallery"
                            :data="{ slug: 'fechas-especiales' }">
                        <span>Fechas<br>Especiales</span>
                        <div
                            class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all group-hover:w-full">
                        </div>
                        </Link>
                    </ul>
                    <Link class="bg-primary text-white font-bold py-2 px-4 rounded shadow-xl" href="/preguntas">Info
                    Importante</Link>
                </nav>
            </div>
        </div>
    </header>
    <main>
        <slot></slot>
    </main>
    <footer>
        <!-- Sticky Whatsapp -->
        <a href="https://api.whatsapp.com/message/MQG3D2XP3BMWD1?autoload=1&app_absent=0" target="_blank"
            class="fixed bottom-5 right-5 shadow-xl rounded-full">
            <img class="w-[60px] h-[60px]" src="/assets/images/icons/whatsapp.webp" alt="Whats App">
        </a>

        <div>
            <img class="max-w-[320px] mx-auto" src="/assets/images/logo.png" alt="Logo Papelito Digital">
        </div>
        <div class="bg-secondary p-5">
            <div class="max-w-[1200px] mx-auto p-5 grid lg:grid-cols-4 gap-3">
                <div>
                    <h4 class="text-lg font-bold pt-5 pb-2">Navegación</h4>
                    <ul class="grid grid-cols-2 lg:block">
                        <li>
                            <Link href="/gallery" :data="{ tag: 1 }">Cumpleaños</link>
                        </li>
                        <li>
                            <Link href="/gallery" :data="{ tag: 2 }">Bodas</Link>
                        </li>
                        <li>
                            <Link href="/gallery" :data="{ tag: 3 }">Bautismos</Link>
                        </li>
                        <li>
                            <Link href="/gallery" :data="{ tag: 4 }">Comuniones Confirmaciones</Link>
                        </li>
                        <li>
                            <Link href="/gallery" :data="{ tag: 5 }">Baby Shower</Link>
                        </li>
                        <li>
                            <Link href="/gallery" :data="{ tag: 6 }">Fechas Especiales</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-lg font-bold pt-5 pb-2">Medios de Pago</h4>
                    <ul>
                        <img class="inline-block w-12 p-1" src="/assets/images/cards/visa.webp" alt="Tarjeta Visa">
                        <img class="inline-block w-12 p-1" src="/assets/images/cards/mastercard.webp"
                            alt="Tarjeta Mastercard">
                        <img class="inline-block w-12 p-1" src="/assets/images/cards/amex.webp"
                            alt="Tarjeta American Express">
                        <img class="inline-block w-12 p-1" src="/assets/images/cards/tarjeta-naranja.webp"
                            alt="Tarjeta Naranja">
                        <img class="inline-block w-12 p-1" src="/assets/images/cards/cabal.webp" alt="Tarjeta Cabal">
                        <img class="inline-block w-12 p-1" src="/assets/images/cards/mercadopago.webp" alt="Mercado pago">
                        <img class="inline-block w-12 p-1" src="/assets/images/icons/bank-transfer.webp"
                            alt="Transferencia bancaria">
                    </ul>
                </div>

                <div>
                    <h4 class="text-lg font-bold pt-5 pb-2">Contactanos</h4>
                    <ul>
                        <li>
                            <a class="flex items-center"
                                href="https://api.whatsapp.com/message/MQG3D2XP3BMWD1?autoload=1&app_absent=0"
                                target="_blank">
                                <img class="w-5 h-5 me-2" src="/assets/images/icons/whatsapp.webp" alt="Whats App">
                                <span>+54 9 11 2166 4157</span>
                            </a>
                        </li>
                        <li>
                            <a class="flex items-center" href="mailto:contacto@papelitodigital.com.ar">
                                <img class="w-5 h-5 me-2" src="/assets/images/icons/mail.webp" alt="Email">
                                <span>contacto@papelitodigital.com.ar</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <section>
                        <h4 class="text-lg font-bold pt-5 pb-2">Redes Sociales</h4>
                        <ul class="flex">
                            <li><a href="https://www.facebook.com/papelitodigital.ar" target="_blank"><img class="w-10 p-2"
                                        src="/assets/images/icons/facebook.webp" alt="Facebook"></a></li>
                            <li><a href="https://www.instagram.com/papelitodigital.ar" target="_blank"><img class="w-10 p-2"
                                        src="/assets/images/icons/instagram.webp" alt="Instagram"></a></li>
                            <li><a href="https://ar.pinterest.com/Papelitodigital" target="_blank"><img class="w-10 p-2"
                                        src="/assets/images/icons/pinterest.webp" alt="Pinterest"></a></li>
                            <li><a href="https://www.tiktok.com/@papelitodigital?is_from_webapp=1&sender_device=pc"
                                    target="_blank"><img class="w-10 p-2" src="/assets/images/icons/tiktok.webp"
                                        alt="TikTok"></a></li>
                            <li><a href="https://www.youtube.com/@papelitodigital" target="_blank"><img class="w-10 p-2"
                                        src="/assets/images/icons/youtube.webp" alt="Youtube"></a></li>
                        </ul>
                    </section>

                    <section>
                        <h4 class="text-lg pt-5 pb-2">Suscribite y enterate de las novedades!</h4>
                        <form @submit.prevent="suscribe" class="grid grid-cols-[1fr_auto]">
                            <input class="p-1 border-t border-s border-b border-[rgb(225, 227, 230)]" type="email"
                                aria-label="Suscribir email" required>
                            <button class="bg-primary text-white p-2 rounded-tr-md rounded-br-md" type="submit"
                                aria-label="Suscribir">
                                <svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z">
                                    </path>
                                </svg>
                            </button>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    </footer>
</template>

<style>
@keyframes scale-in {
    from {
        transform: scale(0.9);
    }

    to {
        transform: scale(1);
    }
}</style>