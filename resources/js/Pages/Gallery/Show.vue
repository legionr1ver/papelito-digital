<script>
import Layout from './../../Layouts/GuestLayout.vue';

export default {
  layout: Layout,
}
</script>

<script setup>
import { ref } from 'vue';
import { router, Link } from '@inertiajs/vue3'
import Invitation from './Partials/Invitation.vue';

const props = defineProps({
    invitations: {
        type: Object,
        required: true,
    },
    filters: {
        type: Object,
        default(){
            return {
                search: '',
                tag: '',
                type: '',
            };
        },
    },
});

const search = ref(props.filters.search);

function filter(filter){
    const currentFilters = {
        search: props.filters.search,
        tag: props.filters.tags?.id || '',
        type: props.filters.type?.id || '',
    };
    const newFilters = {...currentFilters, ...filter};

    router.get('/gallery', newFilters, {
        preserveScroll: true,
    });
}

</script>

<template>
    <div class="max-w-[1200px] mx-auto mb-16 flex">
        <div id="buscador-galeria" class="hidden lg:block flex-initial p-10">
            <form @submit.prevent="filter({search})" class="mb-12 flex">
                <button type="submit" class="flex-initial flex items-center border-t border-s border-b border-[rgb(225, 227, 230)] p-2">
                    <svg class="text-gray-400" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path
                            d="M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z">
                        </path>
                    </svg>
                </button>
                <input v-model="search" class="flex-1 p-2 border-t border-e border-b border-[rgb(225, 227, 230)] w-full" type="search">
            </form>
            <div class="mb-12">
                <h2 class="font-serif text-4xl text-primary mb-4">Temáticas</h2>
                <ul class="space-y-1 text-md text-gray-500">
                    <li>
                        <button @click="filter({tag: 1})">Baby Shower</button>
                    </li>
                    <li>
                        <button @click="filter({tag: 2})">Comuniones</button>
                    </li>
                    <li>
                        <button @click="filter({tag: 3})">Bautismos</button>
                    </li>
                    <li>
                        <button @click="filter({tag: 4})">Bodas</button>
                    </li>
                    <li>
                        <button @click="filter({tag: 5})">Cumpleaños Adultos</button>
                    </li>
                    <li>
                        <button @click="filter({tag: 6})">Cumpleaños Niños</button>
                    </li>
                </ul>
            </div>
            <div class="mb-12">
                <h2 class="font-serif text-4xl text-primary mb-4">Tipo</h2>
                <ul class="space-y-1 text-md text-gray-500">
                    <li class="flex items-center">
                        <button @click="filter({type: ''})">Todas</button>
                    </li>
                    <li class="flex items-center">
                        <button @click="filter({type: 1})">Fijas</button>
                    </li>
                    <li class="flex items-center">
                        <button @click="filter({type: 2})">Animadas</button>
                    </li>                    
                </ul>
            </div>
            
        </div>
        <div id="galeria" class="flex-1 px-5">
            <div class="flex p-4 text-md text-gray-500">
                <div class="flex-1">
                    <p v-if="!props.filters.tag && !props.filters.type && !props.filters.search">Mostrando todas las invitaciones</p>

                    <button v-if="props.filters.type" @click="filter({type:''})" class="bg-primary text-white rounded-full px-3 py-1 m-1 text-sm inline-flex items-center hover:outline hover:outline-1 hover:outline-gray-400">
                        <span class="me-2">Invitaciones {{ props.filters.type.name }}</span>
                        <span class="font-bold">x</span>
                    </button>

                    <button v-if="props.filters.tag" @click="filter({tag:''})" class="bg-primary text-white rounded-full px-3 py-1 m-1 text-sm inline-flex items-center hover:outline hover:outline-1 hover:outline-gray-400">
                        <span class="me-2">{{ props.filters.tag.label }}</span>
                        <span class="font-bold">x</span>
                    </button>

                    <button v-if="props.filters.search" @click="filter({search:''})" class="bg-primary text-white rounded-full px-3 py-1 m-1 text-sm inline-flex items-center hover:outline hover:outline-1 hover:outline-gray-400">
                        <span class="me-2">Buscando "{{ props.filters.search }}"</span>
                        <span class="font-bold">x</span>
                    </button>
                </div>
                <p class="flex-initial">Hay <strong>{{ props.invitations.data.length }}</strong> invitaciones.</p>
            </div>
            <div v-if="props.invitations.data.length > 0">
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
                    <Invitation v-for="invitation in props.invitations.data" v-bind="invitation" />
                </div>
                <ul class="p-10 flex justify-center">
                    <li v-for="link in props.invitations.links" class="px-2 py-1 bg-primary text-white font-bold">
                        <Link class="disabled:text-gray-300" as="button" :href="link.url || '#'" :disabled="!link.url"><span v-html="link.label"></span></Link>
                    </li>
                </ul>
            </div>
            <div v-else class="text-md text-gray-500 grid justify-center">
                <p class="text-2xl text-center">
                    No se encontraron invitaciones.<br>
                    Contanos por Whatsapp tu idea y la armamos a tu gusto.
                </p>
                <img class="mx-auto max-w-[200px] p-3" src="/assets/images/stickers/sin-resultados.png" alt="No hay resultados para la búsqueda">
            </div>
        </div>
    </div>
</template>

<style scoped></style>