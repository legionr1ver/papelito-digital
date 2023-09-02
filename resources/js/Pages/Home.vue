<script>
import Layout from './../Layouts/GuestLayout.vue';

export default {
  layout: Layout,
}
</script>

<script setup>
</script>

<template>
    <section id="invitaciones-animadas" class="relative max-w-[1200px] mx-auto min-h-[450px] mb-16 bg-[url('/assets/images/bg-nubes.jpg')] bg-cover bg-no-repeat bg-right-bottom grid grid-cols-[2fr_1fr] items-center justify-center rounded-lg">
        <div class="grid items-center justify-center gap-1">
            <h2 class="text-7xl text-center font-serif font-bold tracking-wider text-white" style="text-shadow: 2px 2px 15px rgba(0,0,0,1);">Invitaciones<br>Animadas</h2>
            <p class="text-center text-white max-w-[40ch] text-xl">Con música de fondo y hasta 30 segundos de duración!</p>
            <div class="text-center">
                <button class="bg-primary text-white py-2 px-6 mt-5 rounded text-xl shadow-xl tracking-wider">Ver diseños</button>
            </div>
        </div>
        <div>
            <div class="w-[200px] relative">
                <img class="w-full h-[380px] relative z-20" src="/assets/images/cellphone-mockup.png" alt="Cellphone Mockup">
                <video class="absolute z-10 top-[13px] left-0 rounded-[25px] shadow-[10px_25px_15px_2px_rgba(0,0,0,0.75)]" src="/assets/video-invitations/rapunzel.mp4" autoplay loop playsinline muted></video>
            </div>
        </div>
    </section>

    <section id="categorias" class="max-w-[1200px] mx-auto mb-16">
        <header class="mb-7">
            <h3 class="text-center text-4xl font-serif font-bold tracking-wider">Cualquier razón para celebrar</h3>
            <p class="text-center text-sm">Hay muchos modelos para elegir</p>
        </header>
        <div class="grid grid-cols-3 auto-rows-[120px] gap-3 text-white font-bold">
            <a class="bg-[url('/assets/images/links/baby-shower.jpg')] bg-cover bg-no-repeat flex items-center justify-start p-5 rounded-lg" href="/gallery"><h4>Baby Shower</h4></a>
            <a class="bg-[url('/assets/images/links/comunion.jpg')] bg-cover bg-no-repeat flex items-center justify-start p-5 rounded-lg" href="/gallery"><h4>Comunión</h4></a>
            <a class="bg-[url('/assets/images/links/bautismo.jpg')] bg-cover bg-no-repeat flex items-center justify-start p-5 rounded-lg" href="/gallery"><h4>Bautismo</h4></a>
            <a class="bg-[url('/assets/images/links/boda.jpg')] bg-cover bg-no-repeat flex items-center justify-start p-5 rounded-lg" href="/gallery"><h4>Boda</h4></a>
            <a class="bg-[url('/assets/images/links/cumpleanos-adulto.jpg')] bg-cover bg-no-repeat flex items-center justify-start p-5 rounded-lg" href="/gallery"><h4>Cumpleaños<br>adultos</h4></a>
            <a class="bg-[url('/assets/images/links/cumpleanos-infantil.jpg')] bg-cover bg-no-repeat flex items-center justify-start p-5 rounded-lg" href="/gallery"><h4>Cumpleaños<br>infantiles</h4></a>
        </div>
    </section>

    <section id="informacion" class="bg-gray-100 py-10 mb-16">
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
</template>

<style scoped></style>