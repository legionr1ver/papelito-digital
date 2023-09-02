<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
    id: {
        type: Number,
        required: true,
    },
    source_url: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    },
    type_id: {
        type: Number,
        required: true,
    },
});
</script>

<template>
    <article class="grid grid-rows-[350px_auto_auto]">
        <div class="flex justify-center items-center">
            <img :src="source_url" class="max-h-full">
        </div>
        <div class="p-2 flex">
            <strong class="flex-1">{{ title }}</strong>
            <span class="flex-initial">${{ price }}</span>
        </div>
        <Link :href="`/order/invitation/${id}`" as="button" class="bg-primary text-white py-2 mt-1 mx-2 rounded shadow-lg">
            Comprar
        </Link>
    </article>
</template>

<style scoped></style>