<script setup>
import { reactive , onMounted } from 'vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';

const props = defineProps({
    mercadopago_public_key: {
        type: String,
        required: true,
    },
    payment_method: {
        type: String,
        required: true,
    },
    final_price: {
        type: Number,
        required: true,
    },
});

const emit = defineEmits(['goBack']);

const STATE_INACTIVE = Symbol();
const STATE_LOADING = Symbol();
const STATE_ERROR = Symbol();
const STATE_READY = Symbol();
const STATE_SUCCESS = Symbol();

const payment_methods = reactive({
    bank_transfer: {
        state: STATE_READY,
    },
    mercado_pago: {
        state: STATE_LOADING,
        message: '',
    },
});

onMounted(async () => {
    const el = document.createElement('script');
    el.src = 'https://sdk.mercadopago.com/js/v2';
    el.onerror = () => {
        payment_methods.mercado_pago.state = STATE_ERROR;
        payment_methods.mercado_pago.message = 'Error al preparar el pago, vuelva a intentar mas tarde.';
    };
    el.onload = createMercadoPagoPayment;
    document.querySelector('main').append(el);
});

function createMercadoPagoPayment() {
    if( typeof(window.cardPaymentBrickController) != 'undefined')
        window.cardPaymentBrickController.unmount();

    payment_methods.mercado_pago.state = STATE_LOADING;

    const mp = new MercadoPago(props.mercadopago_public_key, {
        locale: 'es-AR',
    });
    const bricksBuilder = mp.bricks();

    const renderCardPaymentBrick = async (bricksBuilder) => {
        const settings = {
            initialization: {
                amount: props.final_price,
            },
            customization: {
                paymentMethods: {
                    creditCard: "all",
                    debitCard: "all",
                    mercadoPago: "all",
                },
            },
            callbacks: {
                onReady: () => payment_methods.mercado_pago.state = STATE_READY,
                onSubmit: async paymentData => {
                    try {
                        await axios.post('/order', {
                            ...paymentData,
                            name: form.name,
                            address: form.address,
                            observation: form.observation,
                            phone_number: form.phone_number,
                            invitation_id: props.invitation.id,
                        });

                        payment_methods.mercado_pago.state = STEP_SUCCES;

                    } catch (error) {
                        payment_methods.mercado_pago.state = STATE_ERROR;
                        payment_methods.mercado_pago.message = error.response.status === 402 ? 'El pago fue rechazado.' : 'Ocurrió un error con el pago.';
                    }
                },
                onError: (error) => {
                    payment_methods.mercado_pago.state = STATE_ERROR;
                    payment_methods.mercado_pago.message = 'Ocurrió un error con el pago.';
                },
            },
        };
        window.cardPaymentBrickController = await bricksBuilder.create(
            'payment',
            'mercado-pago-payment-container',
            settings,
        );
    };
    renderCardPaymentBrick(bricksBuilder);
};
</script>

<template>
    <div class="mb-5">
        
        <div v-show="props.payment_method === 'transferencia'">

        </div>

        <div v-show="props.payment_method === 'mercado_pago'">
            <div id="mercado-pago-payment-container"></div>
        </div>

        <div class="grid grid-cols-2 gap-2">
            <PrimaryButton type="button" @click="$emit('goBack')">Volver</PrimaryButton>
        </div>
    </div>
</template>

<style scoped></style>