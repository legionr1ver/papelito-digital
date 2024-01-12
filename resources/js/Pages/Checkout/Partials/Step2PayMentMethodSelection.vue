<script setup>
import Button from '@/Components/Button.vue';

defineProps([
    'page_step',
    'payment_method',
]);

defineEmits([
    'update:page_step',
    'update:payment_method',
]);
</script>

<template>
    <form id="payment-method-selection-step-form" @submit.prevent="$emit('update:page_step', 3)" class="mb-5">
        <h2 class="text-2xl mb-5">Seleccione el medio de pago </h2>
        
        <ul class="mb-5 space-y-5">
            <li @click="$emit('update:payment_method', 'transferencia')" class="cursor-pointer flex items-center p-3 border border-primary rounded">
                <input :checked="payment_method == 'transferencia'" class="mx-2" type="radio" name="payment_method" value="transferencia">
                <div class="p-2">Transferencia</div>
                <img class="w-14 p-2" src="/assets/images/icons/bank-transfer.webp">
                <div class="p-2 ms-auto font-bold">Descuento 10%</div>
            </li>
            <li @click="$emit('update:payment_method', 'mercado_pago')" class="cursor-pointer flex items-center p-3 border border-primary rounded">
                <input :checked="payment_method == 'mercado_pago'" class="mx-2" type="radio" name="payment_method" value="mercado_pago">
                <div class="p-2">Mercado pago</div>
                <img class="w-14 p-2" src="/assets/images/cards/mercadopago.webp">
                <div class="p-2 ms-auto font-bold">Sin descuento</div>
            </li>
        </ul>            

        <div class="grid grid-cols-2 gap-2 my-2">
            <Button type="button" @click="$emit('update:page_step', 1)">Volver</Button>
            <Button type="submit" :disabled="payment_method == ''">Siguiente</Button>
        </div>
    </form>
</template>

<style scoped></style>