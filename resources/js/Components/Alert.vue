<script setup>
defineProps({
    type: {
        type: String,
        default: 'danger',
        validator(value){
            return ['success','danger'].includes(value);
        },
    },
});

const commonClasses = ['py-2', 'px-3', 'my-2', 'border', 'rounded'];
</script>

<template>
    <div v-if="type==='danger'" :class="commonClasses" class="border-[rgb(241,_174,_181)] bg-[rgb(248,_215,_218)] text-[rgb(88,_21,_28)]">
        <slot></slot>
    </div>
    <div v-if="type==='success'" :class="commonClasses" class="border-[rgb(163,_207,_187)] bg-[rgb(209,_231,_221)] text-[rgb(10,_54,_34)]">
        <slot></slot>
    </div>
</template>

<style scoped></style>