<script setup>
defineProps({
    src: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <article class="cursor-pointer hover:-translate-y-2 transition-transform grid grid-rows-[200px_auto]">
        <div class="relative shadow-lg mb-3 flex items-center justify-center">
            <small
                class="absolute bottom-2 right-2 bg-primary py-0 px-2 rounded-xl text-white font-bold tracking-wider">Fija</small>
            <img :src="src">
        </div>
        <div class="text-sm font-semibold">{{ title }}</div>
    </article>
</template>

<style scoped></style>