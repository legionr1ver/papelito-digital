<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
    id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    tags: {
        type: Array,
        required: true
    },
    type: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <Link :href="`/checkout/${id}`" as="article" class="grid grid-rows-[auto_auto_1fr_auto] gap-3 shadow p-5 rounded cursor-pointer transition-transform hover:-translate-y-2">
        <div class="flex">
            <strong class="flex-1">
                <span class="me-2">{{ title }}</span>
                <small class="text-primary">({{ type.name }})</small>
            </strong>
            <span class="flex-initial">${{ price }}</span>
        </div>
        <div class="text-xs">
            <ul v-if="tags.length > 0" class="flex">
                <li v-for="tag in tags" class="px-2 mx-1 bg-primary text-white rounded-full">
                    {{ tag.label }}
                </li>
            </ul>
            <p v-else>
                Sin tags
            </p>
        </div>
        <div class="flex items-center justify-center">
            <img :src="`/item/${id}/thumbnail`" class="max-w-full max-h-[200px]">
        </div>
        <button type="button" class="bg-primary text-white py-2 rounded">
            Comprar
        </button>
    </Link>
</template>

<style scoped></style>