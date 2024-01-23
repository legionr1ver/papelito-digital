<script setup>
import { usePage } from '@inertiajs/vue3';

const props = defineProps([
    'order',
]);

const page = usePage();
</script>

<template>
    <div>
        <div class="py-4">
            <h2 class="text-2xl mb-2">Pago por transferencia</h2>
            <p class="py-1">
                Por favor luego de realizar la transferencia envianos el comprobante por whatsapp a
                <a class="underline text-primary" href="tel:+549111521664157">+54 9 11 2166 4157</a>
                o por mail a <a class="underline text-primary"
                    href="mailto:contacto@papelitodigital.com.ar">contacto@papelitodigital.com.ar</a>
            </p>
            <p class="py-1">
                El monto a abonar es de <strong class="text-xl p-2">{{ page.props.currency.label }} {{ order.price }}</strong>
            </p>
        </div>

        <div class="py-4">
            <h2 class="text-2xl mb-2">Información de cuenta</h2>
            <div class="divide-y-2">
                <div class="flex p-2">
                    <span class="flex-initial">CBU</span>
                    <strong class="ms-auto flex-initial">0720071788000017486868</strong>
                </div>
                <div class="flex p-2">
                    <span class="flex-initial">Alias</span>
                    <strong class="ms-auto flex-initial">PAPELITO.DIGITAL</strong>
                </div>
                <div class="flex p-2">
                    <span class="flex-initial">Titular de cuenta</span>
                    <strong class="ms-auto flex-initial">Silvero Gabriela Giselle</strong>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>