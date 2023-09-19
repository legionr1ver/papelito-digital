<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
    <input :value="modelValue" @input="$emit('update:modelValue',$event.target.value)" class="w-full p-2 border border-[rgb(225, 227, 230)] accent-primary">
</template>

<style scoped></style>