<script setup>
import TransferPayment from './Payments/Transfer.vue';
import PaypalPayment from './Payments/Paypal.vue';
import MercadopagoPayment from './Payments/Mercadopago.vue';

const props = defineProps({
    paypal_client_id: {
        type: String,
        required: true,
    },
    mercadopago_public_key: {
        type: String,
        required: true,
    },
    order: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div class="mb-5">

        <TransferPayment v-if="props.order.payment_method === 'transferencia'" :order="order" />

        <PaypalPayment v-if="props.order.payment_method === 'paypal'" :order="order" :paypal_client_id="paypal_client_id" />

        <MercadopagoPayment v-if="props.order.payment_method === 'mercadopago'" :order="order" />

    </div>
</template>

<style></style>