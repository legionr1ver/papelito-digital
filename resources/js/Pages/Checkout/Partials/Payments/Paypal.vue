<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps([
    'order',
    'paypal_client_id',
]);

const STATES = {
    LOADING: Symbol('LOADING'),
    READY: Symbol('READY'),
    SUCCESS: Symbol('SUCCESS'),
    ERROR: Symbol('ERROR'),
};
const state = ref(STATES.LOADING);

onMounted(() => {
    const el = document.createElement('script');
    el.onload = () => {
        state.value = STATES.READY;

        window.paypal.Buttons({

            async createOrder() {
                try {

                    const response = await axios.post(`/paypal-payment/${props.order.id}/create`);
                    return response.data;

                } catch (error) {
                    state.value = STATES.ERROR;
                }
            },

            async onApprove(data, actions) {
                try {
                    state.value = STATES.LOADING;

                    const response = await axios.post(`/paypal-payment/${props.order.id}/capture`, {
                        paypal_order_id: data.orderID,
                    });

                    const orderData = response.data;

                    // Three cases to handle:
                    //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                    //   (2) Other non-recoverable errors -> Show a failure message
                    //   (3) Successful transaction -> Show confirmation or thank you message

                    const errorDetail = orderData?.details?.[0];

                    if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                        // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                        // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
                        return actions.restart();
                    } else if (errorDetail) {
                        // (2) Other non-recoverable errors -> Show a failure message
                        throw new Error(`${errorDetail.description} (${orderData.debug_id})`);
                    } else if (!orderData.purchase_units) {
                        throw new Error(JSON.stringify(orderData));
                    } else {
                        // (3) Successful transaction -> Show confirmation or thank you message
                        // Or go to another URL:  actions.redirect('thank_you.html');
                        state.value = STATES.SUCCESS;
                    }
                } catch (error) {
                    state.value = STATES.ERROR;
                }
            },

        }).render('#paypal-buttons');
    }
    el.onerror = () => error.value = true;
    document.head.appendChild(el);
    el.src = `https://www.paypal.com/sdk/js?client-id=${props.paypal_client_id}&currency=USD`;
});
</script>

<template>
    <div>

        <div v-show="state === STATES.LOADING" class="flex justify-center items-center p-5">
            <svg class="animate-spin h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
            </svg>
        </div>

        <div v-show="state === STATES.READY" id="paypal-buttons"></div>

        <div v-show="state === STATES.ERROR" class="flex justify-center items-center">
            <div>
                <img class="max-w-[200px] mx-auto" src="/assets/images/stickers/ocurrio-un-error.webp"
                    alt="Ocurrio un error">

                <p class="text-center text-primary font-bold p-10">Ocurrió un error al preparar el pago, vuelva a
                    intentarlo en unos momentos.</p>
            </div>
        </div>

        <div v-show="state === STATES.SUCCESS" class="flex justify-center items-center">
            <div>
                <img class="max-w-[200px] mx-auto mb-5" src="/assets/images/stickers/pago-confirmado.webp"
                    alt="Pago confirmado">

                <div class="text-center">
                    <h3 class="text-primary font-bold text-3xl mb-2 font-serif">Pago realizado con éxito!</h3>
                    <p class="">Nos contactaremos a la brevedad para enviarle su pedido.</p>
                </div>
            </div>
        </div>

    </div>
</template>

<style></style>