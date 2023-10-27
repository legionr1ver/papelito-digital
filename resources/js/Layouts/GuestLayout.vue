<script setup>
import { Link } from '@inertiajs/vue3';
import { router } from '@inertiajs/vue3';
import { reactive } from 'vue';

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
        <div class="max-w-[1200px] mx-auto flex">
            <div class="flex-initial flex items-center">
                <Link href="/">
                <img class="max-w-[5rem] lg:max-w-[7rem] mx-auto p-3" src="/assets/images/logo.png"
                    alt="Logo Papelito Digital">
                </Link>
            </div>
            <div class="flex-1 grid items-center">
                <form id="search" class="p-2 flex text-sm text-gray-400" @submit.prevent="submitSearch">
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
                <nav class="hidden lg:grid grid-cols-[1fr_auto] items-center">
                    <ul class="flex items-center justify-evenly py-4 text-primary font-serif text-xl">
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
                            <Link href="/gallery" :data="{ tag: 4 }">Comuniones<br>Confirmaciones</Link>
                        </li>
                        <li>
                            <Link href="/gallery" :data="{ tag: 5 }">Baby<br>Shower</Link>
                        </li>
                        <li>
                            <Link href="/gallery" :data="{ tag: 6 }">Fechas<br>Especiales</Link>
                        </li>
                    </ul>
                    <Link class="bg-primary text-white font-bold py-2 px-4 rounded shadow-xl" href="/preguntas">Info
                    Importante</Link>
                </nav>
            </div>
        </div>
    </header>
    <main>
        <div id="banner" class="p-8 bg-[url('/assets/images/banner-background.webp')] bg-no-repeat bg-cover bg-center">
            <div class="flex justify-center items-center">
                <div class="text-center">
                    <header class="text-primary mb-5">
                        <h1 class="text-[55px] font-serif leading-[4rem] mb-5">
                            Las invitaciones digitales<br>
                            mas lindas
                        </h1>
                        <p class="text-[38px]">Fijas, interactivas o en video</p>
                    </header>
                    <button class="bg-primary text-white py-2 px-4 rounded font-bold text-xl">
                        Ver diseños
                    </button>
                </div>
                <div>
                    <img class="w-[430px] animate-[2s_linear_0s_scale-in]" src="/assets/images/banner-cell-invitation.webp">
                </div>
            </div>
        </div>
        <div id="diseños" class="max-w-[1200px] mx-auto p-10">
            <h2 class="text-[40px] text-primary text-center font-serif mb-8">Diseños más elegidos</h2>
            <div class="grid grid-cols-3 gap-6">
                <div class="text-center space-y-5">
                    <img src="/assets/images/diseños-mas-elegidos/1.webp">
                    <h3 class="text-primary text-[43px] font-serif">Super Mario</h3>
                    <button class="font-serif text-white bg-primary w-[230px] h-[65px] rounded-[70px]">Comprar</button>
                </div>
                <div class="text-center space-y-5">
                    <img src="/assets/images/diseños-mas-elegidos/1.webp">
                    <h3 class="text-primary text-[43px] font-serif">Super Mario</h3>
                    <button class="font-serif text-white bg-primary w-[230px] h-[65px] rounded-[70px]">Comprar</button>
                </div>
                <div class="text-center space-y-5">
                    <img src="/assets/images/diseños-mas-elegidos/1.webp">
                    <h3 class="text-primary text-[43px] font-serif">Super Mario</h3>
                    <button class="font-serif text-white bg-primary w-[230px] h-[65px] rounded-[70px]">Comprar</button>
                </div>
            </div>
            <div class="text-primary text-center font-serif text-[40px] m-10">
                <a href="#">
                    Ver mas
                </a>
            </div>
        </div>
        <div id="plazos-de-entrega" class="p-20 bg-[#d2b4de]">
            <div class="max-w-[1200px] mx-auto grid grid-cols-2 font-serif">
                <div>
                    <div
                        class="relative w-[560px] h-[545px] bg-[url('/assets/images/tiempos-de-entrega/times-background.svg')] bg-no-repeat bg-cover">
                        <div class="absolute w-[370px] top-[86px] left-[96px]">
                            <h2 class="text-[#5f86e1] text-[44px] mb-4">Plazos de entrega</h2>
                            <ul class="text-[#88a3e2] text-[23px] list-disc leading-6 space-y-3">
                                <li>Hasta 72Hs hábiles para todos los diseños</li>
                                <li>Elegì la opcion “super rapida” si la necesitas para el mismo dìa (antes de las 16hs)
                                </li>
                                <li>En caso de querer un diseño nuevo el tiempo mínimo es de 72Hs hábiles según
                                    disponibilidad</li>
                            </ul>
                        </div>
                        <div
                            class="absolute bottom-[-31px] right-[-31px] bg-[url('/assets/images/tiempos-de-entrega/star-background.svg')] w-[230px] h-[230px] bg-no-repeat bg-cover">
                            <p class="text-white text-center w-[128px] absolute top-[50px] left-[50px]">Si no tenes algun
                                dato podes reservarla igual y dejar pendiente el armado</p>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-10 text-[25px] text-white">
                    <div class="flex justify-center items-center">
                        <div
                            class="skew-y-3 bg-[url('/assets/images/tiempos-de-entrega/sticky-background-1.svg')] bg-no-repeat bg-center bg-cover w-[318px] h-[309px] text-center px-8 py-11">
                            <h3 class="mb-2">Que nadie falte a tu fiesta!</h3>
                            <img class="w-[132px] h-[138px] mx-auto" src="/assets/images/tiempos-de-entrega/sticky-1.webp">
                        </div>
                    </div>
                    <div class="flex justify-center items-center">
                        <div
                            class="skew-x-2 bg-[url('/assets/images/tiempos-de-entrega/sticky-background-2.svg')] bg-no-repeat bg-center bg-cover w-[318px] h-[309px] text-center px-8 py-11">
                            <img class="w-[132px] h-[138px] mx-auto" src="/assets/images/tiempos-de-entrega/sticky-2.svg">
                            <h3 class="text-3xl">No gaste de más</h3>
                        </div>
                    </div>
                    <div class="flex justify-center items-center">
                        <div
                            class="skew-y-3 -rotate-1 bg-[url('/assets/images/tiempos-de-entrega/sticky-background-3.svg')] bg-no-repeat bg-center bg-cover w-[318px] h-[309px] text-center px-8 py-8">
                            <img class="w-[132px] h-[138px] mx-auto" src="/assets/images/tiempos-de-entrega/sticky-3.svg">
                            <h3>Recibi tu invitacion en 72 hs hàbiles màximo</h3>
                        </div>
                    </div>
                    <div class="flex justify-center items-center">
                        <div
                            class="skew-x-3 bg-[url('/assets/images/tiempos-de-entrega/sticky-background-4.svg')] bg-no-repeat bg-center bg-cover w-[318px] h-[309px] text-center px-8 py-8">
                            <h3>Personalizamos con el diseño que busques</h3>
                            <img class="w-[132px] h-[138px] mx-auto" src="/assets/images/tiempos-de-entrega/sticky-4.svg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="categorias-mas-pedidas" class="max-w-[1200px] mx-auto p-20">
            <h2 class="text-[40px] text-primary text-center font-serif mb-8">Categorías mas pedidas</h2>
            <div class="grid grid-cols-3 auto-rows-[125px] gap-4 text-xl text-primary font-bold">
                <div
                    class="flex items-center justify-end border border-primary rounded-xl bg-[url('/assets/images/categorias-mas-pedidas/baby-shower.webp')] bg-cover bg-no-repeat bg-left">
                    <h3 class="me-4">Cumpleaños</h3>
                </div>
                <div
                    class="flex items-center justify-end border border-primary rounded-xl bg-[url('/assets/images/categorias-mas-pedidas/comunion.webp')] bg-cover bg-no-repeat bg-left">
                    <h3 class="me-4">Comunión</h3>
                </div>
                <div
                    class="flex items-center justify-end border border-primary rounded-xl bg-[url('/assets/images/categorias-mas-pedidas/eventos.webp')] bg-cover bg-no-repeat bg-left">
                    <h3 class="me-4">Eventos</h3>
                </div>
                <div
                    class="flex items-center justify-end border border-primary rounded-xl bg-[url('/assets/images/categorias-mas-pedidas/confirmacion.webp')] bg-cover bg-no-repeat bg-left">
                    <h3 class="me-4">Confirmación</h3>
                </div>
                <div
                    class="flex items-center justify-end border border-primary rounded-xl bg-[url('/assets/images/categorias-mas-pedidas/casamiento.webp')] bg-cover bg-no-repeat bg-left">
                    <h3 class="me-4">Casamientos</h3>
                </div>
                <div
                    class="flex items-center justify-end border border-primary rounded-xl bg-[url('/assets/images/categorias-mas-pedidas/cumpleanos.webp')] bg-cover bg-no-repeat bg-left">
                    <h3 class="me-4">Cumpleaños</h3>
                </div>
            </div>
            <div class="text-center p-10">
                <h3 class="mb-8 text-primary text-[22px] font-serif">¿Buscas una tematica nueva?</h3>
                <a href="#" class="text-white text-[16px] font-extrabold py-4 px-10 bg-primary rounded-full">CONTÁCTANOS
                    AHORA</a>
            </div>
        </div>
        <div id="kits-imprimibles" class="p-20 bg-[#d2b4de]">
            <div class="max-w-[1200px] mx-auto">
                <header class="text-white text-center mb-12">
                    <h2 class="text-[56px] font-serif mb-4">Kits imprimibles para decoràr tus eventos</h2>
                    <p class="text-[26px] leading-8">
                        No pierdas tiempo diseñando, empeza cuanto antes con tu<br>
                        proyecto, decora tu fiesta o emprende con nuestras plantillas
                    </p>
                </header>
                <div class="grid grid-cols-3 gap-8 text-primary text-[26px] font-serif text-center uppercase">
                    <div class="bg-white rounded-xl py-12 px-8">
                        <img class="rounded w-[302px] h-[170px] mx-auto" src="/assets/images/kits-imprimibles/imprimi.webp">
                        <h3 class="mt-10">Imprimí</h3>
                    </div>
                    <div class="bg-white rounded-xl py-12 px-8">
                        <img class="rounded w-[302px] h-[170px] mx-auto" src="/assets/images/kits-imprimibles/recorta.webp">
                        <h3 class="mt-10">Recortá</h3>
                    </div>
                    <div class="bg-white rounded-xl py-12 px-8">
                        <img class="rounded w-[302px] h-[170px] mx-auto" src="/assets/images/kits-imprimibles/pega.webp">
                        <h3 class="mt-10">Pegá</h3>
                    </div>
                </div>
                <p class="text-center text-white text-[56px] font-serif mt-5">
                    y listo!
                </p>
            </div>
        </div>
        <div id="clientes-satisfechos" class="max-w-[1200px] mx-auto p-20">
            <h2 class="text-[40px] text-primary text-center font-serif mb-8">Clientes satisfechos</h2>
            <div class="grid grid-cols-3 gap-12">
                <div>
                    <img src="/assets/images/clientes-satisfechos/cliente-mauro.webp">
                </div>
                <div>
                    <img src="/assets/images/clientes-satisfechos/cliente-mauro.webp">
                </div>
                <div>
                    <img src="/assets/images/clientes-satisfechos/cliente-mauro.webp">
                </div>
            </div>
        </div>
        <div id="quienes-somos" class="grid grid-cols-[2fr_1fr] gap-6 max-w-[1200px] mx-auto p-20">
            <div class="font-serif text-center">
                <header>
                    <p class="text-[20px] text-[#fc8dca]">SOBRE NOSOTROS</p>
                    <h2 class="text-[77px] text-primary text-center mb-8">¿Quienes somos?</h2>
                </header>
                <div class="text-[#59524b] space-y-5 uppercase">
                    <p>¡SOY GISELLE, Y ESTOY ENCANTADA DE CONOCERTE!</p>
                    <p>SOY ESTUDIANTE DE LICENCIATURA EN ADMINISTRACIÓN. PERO MI VERDADERA PASIÓN RADICA EN EL MUNDO DEL
                        DISEÑO. DESDE QUE ERA JOVEN, SIEMPRE SENTI UN AMOR PROFUNDO POR LA CREATIVIDAD Y LA EXPRESIÓN
                        ARTÍSTICA.</p>
                    <p>DECIDÍ FUSIONAR MI AMOR POR EL DISEÑO CON MI CONOCIMIENTO EN ADMINISTRACIÓN Y EMPRENDER MI PROPIO
                        CAMINO. ASÍ NACIÓ MI PROYECTO: CREAR INVITACIONES DIGITALES EN VIDEO QUE SON MÁS QUE SIMPLES
                        PALABRAS EN UNA PANTALLA. SON PEQUEÑAS OBRAS DE ARTE ANIMADAS, LLENAS DE COLOR Y VIDA, DISEÑADAS
                        PARA HACER QUE CADA OCASIÓN ESPECIAL SEA AÚN MÁS MEMORABLE.

                        CADA PROYECTO ES UNA OPORTUNIDAD PARA MÍ DE DESPLEGAR MI CREATIVIDAD Y OFRECERTE ALGO ÚNICO Y
                        PERSONALIZADO.

                        TENGO UN PEQUEÑO EQUIPO QUE ME ACOMPAÑA EN ESTA HERMOSA TAREA, MI COMPAÑERO DE VIDA PROGRAMANDO LA
                        WEB, LAS INVITACIONES MAS COMPLEJAS Y DANDOLE VIDA A MIS IDEAS.

                        TAMBIEN ESTAN MIS AYUDANTES DE CONFIANZA MICA Y SABRI &lt;3.
                    </p>
                    <p>
                        ¡GRACIAS POR VISITAR MI PÁGINA Y POR CONSIDERAR CONFIAR EN MÍ PARA TUS INVITACIONES ESPECIALES!<br>
                        CON CARIÑO, GISELLE
                    </p>
                </div>
                <div class="mt-12">
                    <a href="#" class="text-[16px] text-[#fc8dca] underline underline-offset-8">ENVIAME UN EMAIL</a>
                </div>
            </div>
            <div class="flex">
                <img class="object-cover" src="/assets/images/quienes-somos.webp">
            </div>
        </div>
    </main>
    <footer>
        <div>
            <img class="max-w-[320px] mx-auto" src="/assets/images/logo.png" alt="Logo Papelito Digital">
        </div>
        <div class="max-w-[1200px] mx-auto p-5 grid lg:grid-cols-4 gap-3">
            <div>
                <h4 class="text-lg font-bold pt-5 pb-2">Navegación</h4>
                <ul class="grid grid-cols-2 lg:block">
                    <li>
                        <Link href="/gallery" :data="{tag:1}">Baby Shower</link>
                    </li>
                    <li>
                        <Link href="/gallery" :data="{tag:2}">Comuniones</Link>
                    </li>
                    <li>
                        <Link href="/gallery" :data="{tag:3}">Bautismos</Link>
                    </li>
                    <li>
                        <Link href="/gallery" :data="{tag:4}">Bodas</Link>
                    </li>
                    <li>
                        <Link href="/gallery" :data="{tag:5}">Cumpleaños<br>Adultos</Link>
                    </li>
                    <li>
                        <Link href="/gallery" :data="{tag:6}">Cumpleaños<br>Niños</Link>
                    </li>
                </ul>
            </div>

            <div>
                <h4 class="text-lg font-bold pt-5 pb-2">Medios de Pago</h4>
                <ul>
                    <img class="inline-block w-12 p-1" src="/assets/images/cards/visa.webp" alt="Tarjeta Visa">
                    <img class="inline-block w-12 p-1" src="/assets/images/cards/mastercard.webp" alt="Tarjeta Mastercard">
                    <img class="inline-block w-12 p-1" src="/assets/images/cards/amex.webp" alt="Tarjeta American Express">
                    <img class="inline-block w-12 p-1" src="/assets/images/cards/tarjeta-naranja.webp" alt="Tarjeta Naranja">
                    <img class="inline-block w-12 p-1" src="/assets/images/cards/cabal.webp" alt="Tarjeta Cabal">
                    <img class="inline-block w-12 p-1" src="/assets/images/cards/mercadopago.webp" alt="Mercado pago">
                    <img class="inline-block w-12 p-1" src="/assets/images/icons/bank-transfer.webp" alt="Transferencia bancaria">
                </ul>
            </div>

            <div>
                <h4 class="text-lg font-bold pt-5 pb-2">Contactanos</h4>
                <ul>
                    <li>
                        <a class="flex items-center" href="https://api.whatsapp.com/message/MQG3D2XP3BMWD1?autoload=1&app_absent=0" target="_blank">
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
                        <li><a href="https://www.facebook.com/papelitodigital.ar" target="_blank"><img class="w-10 p-2" src="/assets/images/icons/facebook.webp" alt="Facebook"></a></li>
                        <li><a href="https://www.instagram.com/papelitodigital.ar" target="_blank"><img class="w-10 p-2" src="/assets/images/icons/instagram.webp" alt="Instagram"></a></li>
                        <li><a href="https://ar.pinterest.com/Papelitodigital" target="_blank"><img class="w-10 p-2" src="/assets/images/icons/pinterest.webp" alt="Pinterest"></a></li>
                        <li><a href="https://www.tiktok.com/@papelitodigital?is_from_webapp=1&sender_device=pc" target="_blank"><img class="w-10 p-2" src="/assets/images/icons/tiktok.webp" alt="TikTok"></a></li>
                        <li><a href="https://www.youtube.com/@papelitodigital" target="_blank"><img class="w-10 p-2" src="/assets/images/icons/youtube.webp" alt="Youtube"></a></li>
                    </ul>
                </section>

                <section>
                    <h4 class="text-lg pt-5 pb-2">Suscribite y enterate de las novedades!</h4>
                    <form @submit.prevent="suscribe" class="grid grid-cols-[1fr_auto]">
                        <input class="p-1 border-t border-s border-b border-[rgb(225, 227, 230)]" type="email" aria-label="Suscribir email" required>
                        <button class="bg-primary text-white p-2 rounded-tr-md rounded-br-md" type="submit" aria-label="Suscribir">
                            <svg class="w-5" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <path
                                    d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z">
                                </path>
                            </svg>
                        </button>
                    </form>
                </section>
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
    }
</style>