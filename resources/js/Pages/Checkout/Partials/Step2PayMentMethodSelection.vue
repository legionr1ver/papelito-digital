<script setup>
import { ref } from 'vue';
import Button from '@/Components/Button.vue';

const emit = defineEmits(['goBack','submitted']);
const props = defineProps({
    payment_method: {
        type: String,
        required: true,
    },
});

const payment_method = ref(props.payment_method);

function submit(){
    emit('submitted', payment_method.value);
}

</script>

<template>
    <form id="payment-method-selection-step-form" @submit.prevent="submit" class="mb-5">
        <h2 class="text-2xl mb-5">Seleccione el medio de pago </h2>
        
        <ul class="mb-5 space-y-5">
            <li @click="payment_method = 'transferencia'" class="cursor-pointer flex items-center p-3 border border-primary rounded">
                <input class="mx-2" type="radio" name="payment_method" value="transferencia" v-model="payment_method">
                <div class="p-2">Transferencia</div>
                <img class="w-14 p-2" src="/assets/images/icons/bank-transfer.png">
                <div class="p-2 ms-auto font-bold">Descuento 10%</div>
            </li>
            <li @click="payment_method = 'mercado_pago'" class="cursor-pointer flex items-center p-3 border border-primary rounded">
                <input class="mx-2" type="radio" name="payment_method" value="mercado_pago" v-model="payment_method">
                <div class="p-2">Mercado pago</div>
                <img class="w-14 p-2" src="/assets/images/cards/mercadopago.png">
                <div class="p-2 ms-auto font-bold">Sin descuento</div>
            </li>
        </ul>            

        <div class="grid grid-cols-2 gap-2 my-2">
            <Button type="button" @click="$emit('goBack')">Volver</Button>
            <Button type="submit" form="payment-method-selection-step-form">Siguiente</Button>
        </div>
    </form>
</template>

<style scoped></style>