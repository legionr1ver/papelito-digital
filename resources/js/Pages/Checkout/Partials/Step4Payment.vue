<script setup>
import { ref, onMounted } from 'vue';
import { Link } from '@inertiajs/vue3';
import Button from '@/Components/Button.vue';

const props = defineProps({
    mercadopago_public_key: {
        type: String,
        required: true,
    },
    order: {
        type: Object,
        required: true,
    },
});

const states = Object.freeze({
    LOADING: Symbol(),
    ERROR: Symbol(),
    READY: Symbol(),
    SUCCESS: Symbol(),
});

const state = ref(states.LOADING);

onMounted(() => {
    if( props.order.payment_method === 'mercado_pago' )
    {
        const el = document.createElement('script');
        el.src = 'https://sdk.mercadopago.com/js/v2';
        el.onerror = () => state.value = states.ERROR;
        el.onload = createMercadoPagoPayment;
        document.querySelector('main').append(el);
    }
});

async function createMercadoPagoPayment() {
    if (typeof (window.cardPaymentBrickController) != 'undefined')
        window.cardPaymentBrickController.unmount();

    try {
        //const preference_response = await axios.post(`/mercado-pago/preference/${props.order.id}`);

        const mp = new MercadoPago(props.mercadopago_public_key, { locale: 'es-AR' });
        const bricksBuilder = mp.bricks();

        const renderCardPaymentBrick = async (bricksBuilder) => {
            const settings = {
                initialization: {
                    amount: props.order.price,
                    //preferenceId: preference_response.data,
                },
                /*customization: {
                    paymentMethods: {
                        creditCard: "all",
                        debitCard: "all",
                        mercadoPago: "all",
                    },
                },*/
                callbacks: {
                    onReady: () => state.value = states.READY,
                    onSubmit: async paymentData => {
                        console.log('onSubmit', paymentData);
                        try {
                            await axios.post('/mercado-pago/process', {
                                ...paymentData,
                                external_reference: props.order.id,
                            });

                            state.value = states.SUCCESS;

                        } catch (error) {
                            console.log('onSubmit-error',error);
                            state.value = states.ERROR;
                        }
                    },
                    onError: (error) => {
                        throw 'Ocurrió un error con el pago.';
                    },
                },
            };
            window.cardPaymentBrickController = await bricksBuilder.create(
                'cardPayment',
                'mercado-pago-payment-container',
                settings,
            );
        };
        renderCardPaymentBrick(bricksBuilder);

    } catch (error) {
        state.value = states.ERROR;
    }
};
</script>

<template>
    <div class="mb-5">

        <div v-show="props.order.payment_method === 'transferencia'">
            <div class="py-4">
                <h2 class="text-2xl mb-2">Pago por transferencia</h2>
                <p class="py-1">
                    Por favor luego de realizar la transferencia envianos el comprobante por whatsapp a 
                    <a class="underline text-primary" href="tel:+549111521664157">+54 9 11 2166 4157</a>
                    o por mail a <a class="underline text-primary" href="mailto:contacto@papelitodigital.com.ar">contacto@papelitodigital.com.ar</a>
                </p>
                <p class="py-1">
                    El monto a abonar es de <strong class="text-xl p-2">${{ props.order.price }}</strong>
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

        <div v-show="props.order.payment_method === 'mercado_pago'">

            <div v-show="state === states.LOADING" class="flex justify-center items-center">
                <svg class="animate-spin -ml-1 mr-3 h-14 w-14 text-primary my-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            </div>

            <div v-show="state === states.ERROR" class="flex justify-center items-center">
                <div>
                    <img class="max-w-[200px] mx-auto" src="/assets/images/stickers/ocurrio-un-error.png" alt="Ocurrio un error">
                    <div>
                        <Button @click="createMercadoPagoPayment">Volver a intentar</Button>
                    </div>
                </div>
            </div>

            <div v-show="state === states.READY" id="mercado-pago-payment-container"></div>

            <div v-show="state === states.SUCCESS" class="flex justify-center items-center m-5">
                <div>
                    <img class="max-w-[200px] mx-auto" src="/assets/images/stickers/pedido-finalizado.png" alt="Pedido finalizado">
                    <div class="text-center my-3">
                        <Link href="/gallery" class="bg-primary text-white py-2 px-6 mt-5 rounded text-xl shadow-xl tracking-wider disabled:cursor-not-allowed disabled:opacity-70">Ir a galeria</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>