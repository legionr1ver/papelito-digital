<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
    <select :value="modelValue" @input="$emit('update:modelValue',$event.target.value)" class="w-full p-2 border border-[rgb(225, 227, 230)] accent-primary">
        <slot></slot>
    </select>
</template>

<style scoped></style>