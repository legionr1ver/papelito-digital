<script setup>
import axios from 'axios';
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps([
    'order',
    'mercadopago_public_key',
]);

const STATES = {
    LOADING: Symbol('LOADING'),
    READY: Symbol('READY'),
    SUCCESS: Symbol('SUCCESS'),
    ERROR: Symbol('ERROR'),
};
const state = ref(STATES.LOADING);

async function createPreference() {
    const response = await axios.post(`/mercadopago-payment/${props.order.id}/preference`);
    return response.data;
}

onMounted(() => {
    const el = document.createElement('script');
    el.onload = async () => {

        try {
            const preferenceId = await createPreference();

            const mp = new MercadoPago(props.mercadopago_public_key);

            window.paymentBrickController = await mp.bricks().create(
                "payment",
                "mercadopago-buttons",
                {
                    initialization: {
                        /*
                         "amount" es el monto total a pagar por todos los medios de pago con excepción de la Cuenta de Mercado Pago y Cuotas sin tarjeta de crédito, las cuales tienen su valor de procesamiento determinado en el backend a través del "preferenceId"
                        */
                        amount: props.order.price,
                        preferenceId: preferenceId,
                    },
                    customization: {
                        paymentMethods: {
                            creditCard: "all",
                            debitCard: "all",
                            /*mercadoPago: "all",*/
                        },
                    },
                    callbacks: {
                        onReady: () => state.value = STATES.READY,

                        onSubmit: async ({ selectedPaymentMethod, formData }) => {
                            try {
                                state.value = STATES.LOADING;

                                const response = await axios.post(`/mercadopago-payment/${props.order.id}/payment`, formData);
                                state.value = STATES.SUCCESS;

                            } catch (error) {
                                state.value = STATES.ERROR;
                            }
                        },
                        onError: (error) => {
                            // callback llamado para todos los casos de error de Brick
                            state.value = STATES.ERROR;
                        },
                    },
                }
            );
        } catch (error) {
            state.value = STATES.ERROR;
        }
    };
    el.onerror = () => state.value = STATES.ERROR;
    document.head.appendChild(el);
    el.src = 'https://sdk.mercadopago.com/js/v2';
});

onUnmounted(() => window.paymentBrickController?.unmount());
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

        <div v-show="state === STATES.READY" id="mercadopago-buttons"></div>

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