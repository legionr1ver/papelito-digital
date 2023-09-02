<script>
import Layout from './../../Layouts/GuestLayout.vue';

export default {
  layout: Layout,
}
</script>

<script setup>
import Invitation from './Partials/Invitation.vue';

defineProps({
    invitations: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <div class="max-w-[1200px] mx-auto mb-16 flex">
        <div id="buscador-galeria" class="flex-initial p-10">
            <div class="mb-12">
                <h2 class="font-serif text-4xl text-primary mb-4">Temáticas</h2>
                <ul class="space-y-1 text-md text-gray-500">
                    <li><a class="hover:underline" href="#">Baby Shower</a></li>
                    <li><a class="hover:underline" href="#">Casamientos</a></li>
                    <li><a class="hover:underline" href="#">Comuniones</a></li>
                    <li><a class="hover:underline" href="#">Cumpleaños Infantiles</a></li>
                    <li><a class="hover:underline" href="#">Cumpleaños Adultos</a></li>
                    <li><a class="hover:underline" href="#">Cumpleaños de 15</a></li>
                    <li><a class="hover:underline" href="#">Graduaciones</a></li>
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
                        <label for="chk-confirmacion">Confirmación de asistencia</label>
                    </li>
                </ul>
            </div>
            
        </div>
        <div id="galeria" class="flex-1">
            <div v-if="invitations.length > 0" class="grid grid-cols-4 gap-x-4 gap-y-8">
                <Invitation v-for="invitation in invitations" v-bind="invitation" />
            </div>
            <div v-else class="text-md text-gray-500 grid justify-center">
                <p class="text-2xl">Contanos por Whatsapp tu idea y la armamos a tu gusto.</p>
                <img class="mx-auto w-96" src="/assets/images/stickers/sin-resultados.png" alt="No hay resultados para la búsqueda">
            </div>
        </div>
    </div>
</template>

<style scoped></style>