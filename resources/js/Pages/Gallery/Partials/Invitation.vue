<script setup>
defineProps({
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
    <article class="cursor-pointer hover:-translate-y-2 transition-transform flex flex-col">
        <div class="relative shadow-xl flex items-center justify-center flex-1">
            <small class="absolute bottom-2 right-2 bg-primary py-0 px-2 rounded-xl text-white font-bold tracking-wider">Fija</small>
            <img :src="source_url" class="max-w-full max-h-full object-contain">
        </div>
        <div class="flex-initial">
            <div class="text-sm font-semibold py-1">{{ title }}</div>
        </div>
    </article>
</template>

<style scoped></style>