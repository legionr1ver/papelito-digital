<script>
import Layout from './../../Layouts/GuestLayout.vue';

export default {
  layout: Layout,
}
</script>

<script setup>
import { ref, computed } from 'vue';
import Invitation from './Partials/Invitation.vue';

const props = defineProps({
    invitations: {
        type: Array,
        required: true,
    },
    initialSearch: {
        type: String,
    },
    initialSelectedTagSlug: {
        type: String,
    },
    initialType: {
        type: String,
    },
});

const tags = [
    {label: 'Baby Shower', slug: 'baby-shower'},
    {label: 'Comuniones', slug: 'comuniones'},
    {label: 'Bautismos', slug: 'bautismos'},
    {label: 'Bodas', slug: 'bodas'},
    {label: 'Cumpleaños Adultos', slug: 'cumpleanos-adultos'},
    {label: 'Cumpleaños Niños', slug: 'cumpleanos-ninos'},
];

const search = ref(props.initialSearch || '');
const selectedTags = ref( tags.find(t => t.slug === props.initialSelectedTagSlug) ? [tags.find(t => t.slug === props.initialSelectedTagSlug)] : [] );
const type = ref(props.initialType || '');

const filteredInvitations = computed(() => {
    
    return props.invitations.filter(invitation => {

        const invitationTagsLabel = invitation.tags.map(t => t.label);
        const invitationTagsSlug = invitation.tags.map(t => t.slug);
        const selectedTagsSlug = selectedTags.value.map(t => t.slug);
        
        let invitationHasTag = false;
        for(let selectedTagSlug of selectedTagsSlug )
        {
            if( invitationTagsSlug.includes(selectedTagSlug) ){
                invitationHasTag = true;
                break;
            }
        }

        return (type.value === '' || type.value == invitation.type.slug)
            && (selectedTags.value.length === 0 || invitationHasTag)
            && (!search.value || invitation.title.toLowerCase().includes(search.value.toLowerCase()) || invitationTagsLabel.some(label => label.toLowerCase().includes(search.value.toLowerCase())));
    });
});

</script>

<template>
    <div class="max-w-[1200px] mx-auto mb-16 flex">
        <div id="buscador-galeria" class="hidden lg:block flex-initial p-10">
            <div class="mb-12 flex">
                <div class="flex-initial flex items-center border-t border-s border-b border-[rgb(225, 227, 230)] p-2">
                    <svg class="text-gray-400" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path
                            d="M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z">
                        </path>
                    </svg>
                </div>
                <input v-model="search" class="flex-1 p-2 border-t border-e border-b border-[rgb(225, 227, 230)] w-full" type="search">
            </div>
            <div class="mb-12">
                <h2 class="font-serif text-4xl text-primary mb-4">Temáticas</h2>
                <ul class="space-y-1 text-md text-gray-500">
                    <li v-for="tag in tags">
                        <button :disabled="selectedTags.includes(tag)" @click="selectedTags.push(tag)">+ {{ tag.label }}</button>
                    </li>
                </ul>
            </div>
            <div class="mb-12">
                <h2 class="font-serif text-4xl text-primary mb-4">Tipo</h2>
                <ul class="space-y-1 text-md text-gray-500">
                    <li class="flex items-center">
                        <input id="tipo-todas" v-model="type" name="tipo" value="" type="radio" class="block w-4 h-4 me-2 accent-primary">
                        <label for="tipo-todas">Todas</label>
                    </li>
                    <li class="flex items-center">
                        <input id="tipo-animadas" v-model="type" name="tipo" value="animada" type="radio" class="block w-4 h-4 me-2 accent-primary">
                        <label for="tipo-animadas">Animadas</label>
                    </li>
                    <li class="flex items-center">
                        <input id="tipo-fijas" v-model="type" name="tipo" value="fija" type="radio" class="block w-4 h-4 me-2 accent-primary">
                        <label for="tipo-fijas">Fijas</label>
                    </li>
                </ul>
            </div>
            
        </div>
        <div id="galeria" class="flex-1 px-5">
            <div class="flex p-4 text-md text-gray-500">
                <div class="flex-1">
                    <p v-show="!selectedTags.length && !type && !search">Mostrando todas las invitaciones</p>

                    <button v-if="type === 'animada'" @click="type = ''" class="bg-primary text-white rounded-full px-3 py-1 m-1 text-sm inline-flex items-center hover:outline hover:outline-1 hover:outline-gray-400">
                        <span class="me-2">Invitaciones animadas</span>
                        <span class="font-bold">x</span>
                    </button>

                    <button v-if="type === 'fija'" @click="type = ''" class="bg-primary text-white rounded-full px-3 py-1 m-1 text-sm inline-flex items-center hover:outline hover:outline-1 hover:outline-gray-400">
                        <span class="me-2">Invitaciones fijas</span>
                        <span class="font-bold">x</span>
                    </button>

                    <button v-if="search" @click="search = ''" class="bg-primary text-white rounded-full px-3 py-1 m-1 text-sm inline-flex items-center hover:outline hover:outline-1 hover:outline-gray-400">
                        <span class="me-2">Buscando "{{ search }}"</span>
                        <span class="font-bold">x</span>
                    </button>

                    <button v-for="(selectedTag,index) in selectedTags" @click="selectedTags.splice(index,1)" class="bg-primary text-white rounded-full px-3 py-1 m-1 text-sm inline-flex items-center hover:outline hover:outline-1 hover:outline-gray-400">
                        <span class="me-2">{{ selectedTag.label }}</span>
                        <span class="font-bold">x</span>
                    </button>
                </div>
                <p class="flex-initial">Hay <strong>{{ filteredInvitations.length }}</strong> invitaciones.</p>
            </div>
            <div v-if="filteredInvitations.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
                <Invitation v-for="invitation in filteredInvitations" v-bind="invitation" />
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