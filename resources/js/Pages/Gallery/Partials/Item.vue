<script setup>
import { Link, usePage } from '@inertiajs/vue3';

const props = defineProps({
    id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    ars_price: {
        type: Number,
        required: true,
    },
    usd_price: {
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

const page = usePage();
</script>

<template>
    <Link :href="`/checkout/${id}`" as="article" class="grid grid-rows-[auto_auto_1fr_auto] gap-1 cursor-pointer transition-transform hover:-translate-y-2">
        <img :src="`/item/${id}/thumbnail`" class="max-w-full">
        <div class="text-center text-sm">{{ title }} | {{ type.name }}</div>
        <div class="text-center text-xl font-bold">{{ page.props.currency.label }} {{ props[`${page.props.currency.code}_price`] }}</div>
        <div class="px-5">
            <button type="button" class="bg-primary text-white rounded w-full py-1">
                Ver
            </button>
        </div>
    </Link>
</template>

<style scoped></style>