<script>
import Layout from './../../Layouts/GuestLayout.vue';

export default {
    layout: Layout,
}
</script>

<script setup>
import { ref, computed } from 'vue';
import { Link } from '@inertiajs/vue3'
import InformationStep from './Partials/InformationStep.vue';
import PayMentMethodSelectionStep from './Partials/PayMentMethodSelectionStep.vue';
import ConfirmationStep from './Partials/ConfirmationStep.vue';
import PaymentStep from './Partials/PaymentStep.vue';

const PAGE_STEP_INFORMATION = 1;
const PAGE_STEP_PAYMENT_METHOD_SELECTION = 2;
const PAGE_STEP_CONFIRMATION = 3;
const PAGE_STEP_PAYMENT = 4;

const INVITATION_TYPE_FIJA = 1;
const INVITATION_TYPE_ANIMADA = 2;

const props = defineProps({
    previous_url: {
        type: String,
        required: true,
    },
    invitation: {
        type: Object,
        required: true,
    },
    mercadopago_public_key: {
        type: String,
        required: true,
    },
});

let page_step = ref(PAGE_STEP_INFORMATION);
const payment_method = ref('transferencia');

const information_step_form = ref({
    map_ubication: false,
    whatsapp_confirmation: false,
    name: '',
    address: '',
    observation: '',
    phone_number: ''
});

const final_price = computed(() => {
    console.log('final_price');
    return Math.floor( (
                props.invitation.price
                + (information_step_form.value.map_ubication ? 150 : 0)
                + (information_step_form.value.whatsapp_confirmation ? 150 : 0)
            ) * (payment_method.value === 'transferencia' ? 0.9 : 1) );
});
</script>

<template>
    <div class="max-w-[1200px] mx-auto mb-16 grid md:grid-cols-2">
        <div class="">
            <img v-if="invitation.type_id == INVITATION_TYPE_FIJA" class="p-2 mx-auto max-w-md" :src="invitation.source_url">
            <video v-if="invitation.type_id == INVITATION_TYPE_ANIMADA" class="p-2 mx-auto max-w-md" :src="invitation.source_url" loop controls></video>
        </div>
        <div class="p-5">
            <header class="pb-10">
                <Link :href="previous_url" class="text-primary">Volver a galeria</Link>
                <div class="text-5xl text-primary font-serif">
                    <h2 class="mb-4">{{ invitation.title }}</h2>
                    <div>${{ invitation.price }}</div>
                </div>
            </header>
            <div>
                <InformationStep v-show="page_step === PAGE_STEP_INFORMATION" :invitation="props.invitation" v-model="information_step_form" @submitted="page_step = PAGE_STEP_PAYMENT_METHOD_SELECTION" />
                <PayMentMethodSelectionStep v-show="page_step === PAGE_STEP_PAYMENT_METHOD_SELECTION" v-model="payment_method" @goBack="page_step = PAGE_STEP_INFORMATION" @submitted="page_step = PAGE_STEP_CONFIRMATION" />
                <ConfirmationStep v-show="page_step === PAGE_STEP_CONFIRMATION" :invitation="props.invitation" :information_step_form="information_step_form" :payment_method="payment_method" :final_price="final_price" @goBack="page_step = PAGE_STEP_PAYMENT_METHOD_SELECTION" @submitted="page_step = PAGE_STEP_PAYMENT" />
                <PaymentStep v-show="page_step === PAGE_STEP_PAYMENT" :payment_method="payment_method" :final_price="final_price" :mercadopago_public_key="mercadopago_public_key" @goBack="page_step = PAGE_STEP_CONFIRMATION" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>