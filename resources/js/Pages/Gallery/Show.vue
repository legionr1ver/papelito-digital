<script>
import Layout from './../../Layouts/GuestLayout.vue';

export default {
  layout: Layout,
}
</script>

<script setup>
import { ref } from 'vue';
import { router, Link } from '@inertiajs/vue3'
import Item from './Partials/Item.vue';

const props = defineProps({
    items: {
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
    <div id="galeria" class="max-w-[1200px] mx-auto my-16">

        <h1 class="text-5xl underline text-primary font-serif mb-8">Nuestros diseños</h1>
            
        <div v-if="props.items.data.length > 0" class="px-2">
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-14">
                <Item v-for="item in props.items.data" v-bind="item" />
            </div>
            <ul class="p-10 flex justify-center">
                <li v-for="link in props.items.links" class="px-2 py-1 bg-primary text-white font-bold">
                    <Link class="disabled:text-gray-300" as="button" :href="link.url || '#'" :disabled="!link.url"><span v-html="link.label"></span></Link>
                </li>
            </ul>
        </div>

        <div v-else>
            <p class="text-2xl text-center text-md text-gray-500">
                No se encontraron invitaciones.<br>
                Contanos por Whatsapp tu idea y la armamos a tu gusto.
            </p>
            <img class="mx-auto max-w-[200px] p-3" src="/assets/images/stickers/sin-resultados.webp" alt="No hay resultados para la búsqueda">
        </div>

    </div>
</template>

<style scoped></style>