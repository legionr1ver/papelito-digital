<script>
import Layout from './../Layouts/GuestLayout.vue';

export default {
    layout: Layout,
}
</script>

<script setup>
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div id="banner" class="p-8 bg-[url('/assets/images/banner-background.webp')] bg-no-repeat bg-cover bg-center">
        <div class="grid grid-cols-1 gap-y-8 md:grid-cols-[auto_auto] justify-center items-center">
            <div class="text-center">
                <header class="text-primary mb-5">
                    <h1 class="text-[55px] font-serif leading-[4rem] mb-5">
                        Las invitaciones digitales<br>
                        mas lindas
                    </h1>
                    <p class="text-[38px]">Fijas, interactivas o en video</p>
                </header>
                <Link href="/gallery" class="bg-primary text-white py-2 px-4 rounded font-bold text-xl">
                    Ver diseños
                </Link>
            </div>
            <div>
                <img class="w-[430px] mx-auto animate-[2s_linear_0s_scale-in]" src="/assets/images/banner-cell-invitation.webp">
            </div>
        </div>
    </div>
    <div id="diseños" class="max-w-[1200px] mx-auto p-10">
        <h2 class="text-[40px] text-primary text-center font-serif mb-8">Diseños más elegidos</h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">

            <Link as="div" href="/checkout/18" class="grid grid-rows-[auto_1fr_auto] gap-5 text-center cursor-pointer group">
                <img class="mx-auto group-hover:-translate-y-3 transition-transform" src="/assets/images/diseños-mas-elegidos/super-mario-bross.png">
                <div class="flex justify-center items-center">
                    <h3 class="text-primary text-[43px] font-serif leading-10 group-hover:underline">Super Mario</h3>
                </div>
                <div>
                    <button type="button" class="font-serif text-white bg-primary w-[230px] h-[65px] rounded-[70px]">Comprar</button>
                </div>
            </Link>

            <Link as="div" href="/checkout/19" class="grid grid-rows-[auto_1fr_auto] gap-5 text-center cursor-pointer group">
                <img class="mx-auto group-hover:-translate-y-3 transition-transform" src="/assets/images/diseños-mas-elegidos/granja-acuarela-rosa.png">
                <div class="flex justify-center items-center">
                    <h3 class="text-primary text-[43px] font-serif leading-10 group-hover:underline">Granja acuarela rosa</h3>
                </div>
                <div>
                    <button type="button" class="font-serif text-white bg-primary w-[230px] h-[65px] rounded-[70px]">Comprar</button>
                </div>
            </Link>

            <Link as="div" href="/checkout/17" class="grid grid-rows-[auto_1fr_auto] gap-5 text-center cursor-pointer group">
                <img class="mx-auto group-hover:-translate-y-3 transition-transform" src="/assets/images/diseños-mas-elegidos/plim-plim.png">
                <div class="flex justify-center items-center">
                    <h3 class="text-primary text-[43px] font-serif leading-10 group-hover:underline">Plim Plim</h3>
                </div>
                <div>
                    <button type="button" class="font-serif text-white bg-primary w-[230px] h-[65px] rounded-[70px]">Comprar</button>
                </div>
            </Link>
            
        </div>
        <div class="text-primary text-center font-serif text-[40px] m-10">
            <Link href="/gallery">
                Ver mas
            </Link>
        </div>
    </div>
    <div id="plazos-de-entrega" class="p-20 bg-[#d2b4de]">
        <div class="max-w-[1200px] mx-auto grid grid-cols-1 gap-y-8 lg:grid-cols-2 font-serif">
            <div>
                <div
                    class="relative max-w-[560px] mx-auto h-[545px] bg-[url('/assets/images/tiempos-de-entrega/times-background.svg')] bg-no-repeat bg-cover">
                    <div class="absolute max-w-[370px] top-[86px] left-[96px]">
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
            <div class="grid md:grid-cols-2 gap-10 text-[25px] text-white">
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
        <div class="grid md:grid-cols-3 gap-4 text-xl text-primary font-bold">
            <Link href="/gallery" :data="{slug:'baby-showers'}" as="div" class="grid items-center cursor-pointer group">
                <div class="h-[150px] border border-primary rounded-xl overflow-hidden flex items-center justify-center group">
                    <img class="group-hover:scale-125 transition-transform duration-500" src="/assets/images/categorias-mas-pedidas/baby-shower.webp">
                </div>
                <h3 class="p-3 text-center group-hover:underline">Baby Showers</h3>
            </Link>
            <Link href="/gallery" :data="{slug:'comuniones'}" as="div" class="grid items-center cursor-pointer group">
                <div class="h-[150px] border border-primary rounded-xl overflow-hidden flex items-center justify-center group">
                    <img class="group-hover:scale-125 transition-transform duration-500" src="/assets/images/categorias-mas-pedidas/comunion.webp">
                </div>
                <h3 class="p-3 text-center group-hover:underline">Comuniónes</h3>
            </Link>
            <Link href="/gallery" :data="{slug:'eventos'}" as="div" class="grid items-center cursor-pointer group">
                <div class="h-[150px] border border-primary rounded-xl overflow-hidden flex items-center justify-center group">
                    <img class="group-hover:scale-125 transition-transform duration-500" src="/assets/images/categorias-mas-pedidas/eventos.webp">
                </div>
                <h3 class="p-3 text-center group-hover:underline">Eventos</h3>
            </Link>
            <Link href="/gallery" :data="{slug:'confirmaciones'}" as="div" class="grid items-center cursor-pointer group">
                <div class="h-[150px] border border-primary rounded-xl overflow-hidden flex items-center justify-center group">
                    <img class="group-hover:scale-125 transition-transform duration-500" src="/assets/images/categorias-mas-pedidas/confirmacion.webp">
                </div>
                <h3 class="p-3 text-center group-hover:underline">Confirmaciónes</h3>
            </Link>
            <Link href="/gallery" :data="{slug:'casamientos'}" as="div" class="grid items-center cursor-pointer group">
                <div class="h-[150px] border border-primary rounded-xl overflow-hidden flex items-center justify-center group">
                    <img class="group-hover:scale-125 transition-transform duration-500" src="/assets/images/categorias-mas-pedidas/casamiento.webp">
                </div>
                <h3 class="p-3 text-center group-hover:underline">Casamientos</h3>
            </Link>
            <Link href="/gallery" :data="{slug:'cumpleanos'}" as="div" class="grid items-center cursor-pointer group">
                <div class="h-[150px] border border-primary rounded-xl overflow-hidden flex items-center justify-center group">
                    <img class="group-hover:scale-125 transition-transform duration-500" src="/assets/images/categorias-mas-pedidas/cumpleanos.webp">
                </div>
                <h3 class="p-3 text-center group-hover:underline">Cumpleaños</h3>
            </Link>
        </div>
        <div class="text-center p-10">
            <h3 class="mb-8 text-primary text-[22px] font-serif">¿Buscas una tematica nueva?</h3>
            <a href="https://api.whatsapp.com/message/MQG3D2XP3BMWD1?autoload=1&app_absent=0" target="_blank" class="text-white text-[16px] font-extrabold py-4 px-10 bg-primary rounded-full">CONTÁCTANOS
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
            <div class="grid md:grid-cols-3 gap-8 text-primary text-[26px] font-serif text-center uppercase">
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
        <div class="grid md:grid-cols-3 gap-12">
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
                    PALABRAS EN UNA PANTALLA. SON PEQUEÑAS OBRAS DE ARTE ANIMATED_INVITATIONS, LLENAS DE COLOR Y VIDA, DISEÑADAS
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
                <a href="mailto:contacto@papelitodigital.com.ar" target="_blank" class="text-[16px] text-[#fc8dca] underline underline-offset-8">ENVIAME UN EMAIL</a>
            </div>
        </div>
        <div class="flex">
            <img class="object-cover" src="/assets/images/quienes-somos.webp">
        </div>
    </div>
</template>

<style scoped></style>