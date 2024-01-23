<script setup>
import { usePage } from '@inertiajs/vue3';
import Button from '@/Components/Button.vue';

defineProps([
    'page_step',
    'payment_method',
]);

defineEmits([
    'update:page_step',
    'update:payment_method',
]);

const page = usePage();
</script>

<template>
    <form id="payment-method-selection-step-form" @submit.prevent="$emit('update:page_step', 3)" class="mb-5">
        <h2 class="text-2xl mb-5">Seleccione el medio de pago </h2>
        
        <section class="mb-5 grid gap-3 auto-rows-[100px]">
            
            <label for="payment-method-transferencia" class="cursor-pointer flex items-center p-3 border border-primary rounded">
                <input id="payment-method-transferencia" @input="$emit('update:payment_method', $event.target.value)" :checked="payment_method == 'transferencia'" class="mx-2" type="radio" name="payment_method" value="transferencia" :disabled="page.props.currency.code !== 'ars'" >
                <div class="p-2 flex items-center">
                    <h3 class="me-2">Transferencia</h3>
                    <small class="text-primary font-bold">($)</small>
                </div>
                <img class="w-16 p-2" src="/assets/images/icons/bank-transfer.webp">
                <div class="p-2 ms-auto font-bold">Descuento 10%</div>
            </label>

            <label for="payment-method-mercadopago" class="cursor-pointer flex items-center p-3 border border-primary rounded">
                <input id="payment-method-mercadopago" @input="$emit('update:payment_method', $event.target.value)" :checked="payment_method == 'mercadopago'" class="mx-2" type="radio" name="payment_method" value="mercadopago" :disabled="page.props.currency.code !== 'ars'">
                <div class="p-2 flex items-center">
                    <h3 class="me-2">Mercado pago</h3>
                    <small class="text-primary font-bold">($)</small>
                </div>
                <img class="w-24 p-2" src="/assets/images/cards/mercadopago.webp">
                <div class="p-2 ms-auto font-bold">Sin descuento</div>
            </label>
            
            <label for="payment-method-paypal" class="cursor-pointer flex items-center p-3 border border-primary rounded">
                <input id="payment-method-paypal" @input="$emit('update:payment_method', $event.target.value)" :checked="payment_method == 'paypal'" class="mx-2" type="radio" name="payment_method" value="paypal" :disabled="page.props.currency.code !== 'usd'">
                <div class="p-2 flex items-center">
                    <h3 class="me-2">Paypal</h3>
                    <small class="text-primary font-bold">(USD)</small>
                </div>
                <img class="w-28 p-2" src="/assets/images/cards/paypal-logo.webp">
                <div class="p-2 ms-auto font-bold">Sin descuento</div>
            </label>
        </section>            

        <div class="grid grid-cols-2 gap-2 my-2">
            <Button type="button" @click="$emit('update:page_step', 1)">Volver</Button>
            <Button type="submit" :disabled="payment_method == ''">Siguiente</Button>
        </div>
    </form>
</template>

<style scoped></style>