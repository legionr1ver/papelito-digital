<script>
import Layout from './../../Layouts/GuestLayout.vue';

export default {
    layout: Layout,
}
</script>

<script setup>
import { ref, reactive } from 'vue';
import { Link } from '@inertiajs/vue3';
import Step1Information from './Partials/Step1Information.vue';
import Step2PayMentMethodSelection from './Partials/Step2PayMentMethodSelection.vue';
import Step3Confirmation from './Partials/Step3Confirmation.vue';
import Step4Payment from './Partials/Step4Payment.vue';

const constants = Object.freeze({
    PAGE_STEP_1_INFORMATION: Symbol(),
    PAGE_STEP_2_PAYMENT_METHOD: Symbol(),
    PAGE_STEP_3_CONFIRMATION: Symbol(),
    PAGE_STEP_4_PAYMENT: Symbol(),
});

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

const page_step = ref(constants.PAGE_STEP_1_INFORMATION);
const form = reactive({
    name: '',
    address: '',
    observation: '',
    phone_number: '',
    map_ubication: false,
    whatsapp_confirmation: false,
    payment_method: 'transferencia',
});
const order = ref(null);

function step1Submitted(data){
    form.name = data.name;
    form.address = data.address;
    form.observation = data.observation;
    form.phone_number = data.phone_number;
    form.map_ubication = data.map_ubication;
    form.whatsapp_confirmation = data.whatsapp_confirmation;

    page_step.value = constants.PAGE_STEP_2_PAYMENT_METHOD;
}

function step2Submitted(payment_method){
    form.payment_method = payment_method;

    page_step.value = constants.PAGE_STEP_3_CONFIRMATION;
}

async function step3Submitted(createdOrder){
    order.value = createdOrder;

    page_step.value = constants.PAGE_STEP_4_PAYMENT;
}
</script>

<template>
    <div class="max-w-[1200px] mx-auto mb-16 grid md:grid-cols-2">
        <div class="">
            <img v-if="invitation.type_id == 1" class="p-2 mx-auto max-w-md" :src="invitation.source_url">
            <video v-if="invitation.type_id == 2" class="p-2 mx-auto max-w-md" :src="invitation.source_url" loop controls></video>
        </div>
        <div class="p-5">
            <header class="pb-10">
                <Link :href="previous_url" class="text-primary">Volver a galeria</Link>
                <div class="text-5xl text-primary font-serif">
                    <h2 class="mb-4">{{ invitation.title }}</h2>
                    <!--div>${{ invitation.price }}</div-->
                </div>
            </header>
            <div>
                <Step1Information v-if="page_step === constants.PAGE_STEP_1_INFORMATION" :invitation="props.invitation" v-bind="form" @submitted="step1Submitted" />
                <Step2PayMentMethodSelection v-if="page_step === constants.PAGE_STEP_2_PAYMENT_METHOD" v-bind="form" @goBack="page_step = constants.PAGE_STEP_1_INFORMATION" @submitted="step2Submitted" />
                <Step3Confirmation v-if="page_step === constants.PAGE_STEP_3_CONFIRMATION" :invitation="props.invitation" v-bind="form" @goBack="page_step = constants.PAGE_STEP_2_PAYMENT_METHOD" @submitted="step3Submitted" />
                <Step4Payment v-if="page_step === constants.PAGE_STEP_4_PAYMENT" :order="order" :mercadopago_public_key="mercadopago_public_key" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>