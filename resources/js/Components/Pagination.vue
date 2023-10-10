<script setup>
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    links: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <ul class="flex justify-center m-3">
        <li v-for="link in props.links">
            <Link as="button" class="bg-primary disabled:text-gray-300 py-1 px-2 mx-2 min-w-[100px] text-white rounded"
                :class="{ outline: link.active }" :href="link.url || '#'" :disabled="!link.url"><span v-html="link.label"></span>
            </Link>
        </li>
    </ul>
</template>

<style scoped></style>