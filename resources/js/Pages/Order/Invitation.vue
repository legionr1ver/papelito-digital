<script>
import Layout from './../../Layouts/GuestLayout.vue';
import axios from 'axios';

export default {
    layout: Layout,
}
</script>

<script setup>
import { ref, reactive, onMounted, onUpdated, onUnmounted } from 'vue';
import { Link } from '@inertiajs/vue3'

const PAGE_STEP_INFORMATION = 1;
const PAGE_STEP_PAYMENT = 2;
const PAGE_STEP_SUCCESS = 3;
const PAYMENT_STATE_LOADING = 1;
const PAYMENT_STATE_READY = 2;
const PAYMENT_STATE_ERROR = 3;
const INVITATION_TYPE_FIJA = 1;
const INVITATION_TYPE_ANIMADA = 2;

const props = defineProps({
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

const form = reactive({
    name: '',
    address: '',
    observation: '',
    phone_number: ''
});

const payment = reactive({
    state: PAYMENT_STATE_LOADING,
    error: '',
});

onMounted(async () => {
    const el = document.createElement('script');
    el.src = 'https://sdk.mercadopago.com/js/v2';
    el.onerror = () => {
        payment.error = 'Error al preparar el pago, vuelva a intentar mas tarde.';
        payment.state = PAYMENT_STATE_ERROR;
    };
    el.onload = createMercadoPagoPayment;
    document.querySelector('main').append(el);
});

function createMercadoPagoPayment() {
    if( payment.state === PAYMENT_STATE_ERROR && typeof(window.cardPaymentBrickController) != 'undefined')
        window.cardPaymentBrickController.unmount();

    payment.state = PAYMENT_STATE_LOADING;

    const mp = new MercadoPago(props.mercadopago_public_key, {
        locale: 'es-AR',
    });
    const bricksBuilder = mp.bricks();

    const renderCardPaymentBrick = async (bricksBuilder) => {
        const settings = {
            initialization: {
                amount: props.invitation.price,
            },
            callbacks: {
                onReady: () => payment.state = PAYMENT_STATE_READY,
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

                        page_step.value = PAGE_STEP_SUCCESS;

                    } catch (error) {
                        payment.error = error.response.status === 402 ? 'El pago fue rechazado.' : 'Ocurrió un error con el pago.';
                        payment.state = PAYMENT_STATE_ERROR;
                    }
                },
                onError: (error) => {
                    payment.state = PAYMENT_STATE_ERROR;
                    payment.error = 'Ocurrió un error con el pago.';
                },
            },
        };
        window.cardPaymentBrickController = await bricksBuilder.create(
            'cardPayment',
            'payment-container',
            settings,
        );
    };
    renderCardPaymentBrick(bricksBuilder);
};
</script>

<template>
    <div class="max-w-[1200px] mx-auto mb-16 grid md:grid-cols-2">
        <div class="">
            <img v-if="invitation.type_id == INVITATION_TYPE_FIJA" class="p-2 mx-auto max-w-md" :src="invitation.source_url">
            <video v-if="invitation.type_id == INVITATION_TYPE_ANIMADA" class="p-2 mx-auto max-w-md" :src="invitation.source_url" loop controls></video>
        </div>
        <div class="p-5">
            <header class="pb-10 text-5xl text-primary font-serif">
                <h2 class="mb-4">{{ invitation.title }}</h2>
                <div>${{ invitation.price }}</div>
            </header>
            <div>
                <div v-show="page_step === PAGE_STEP_INFORMATION">
                    <div class="mb-5">
                        <h2 class="text-2xl mb-5">¿En que formato voy a recibir la invitaión?</h2>
                        <ul class="space-y-5">
                            <li>
                                <strong>Invitación fija (estática):</strong> Formato PNG.
                            </li>
                            <li>
                                <strong>Invitación interactiva (botones):</strong> Formato PDF.<br>
                                Sirve para agregar botones con links a la Ubicación del evento (google maps) o botón de
                                "confirmación asistencia" (a whatsapp).
                            </li>
                            <li>
                                <strong>Invitación animada (video):</strong> Formato MP4.<br>
                                Animación y musica de fondo, duran entre 20 y 30 seg.
                            </li>
                        </ul>
                    </div>
                    <form class="grid text-gray-400" @submit.prevent="page_step = PAGE_STEP_PAYMENT">
                        <label class="mt-1" for="name">Nombre</label>
                        <input v-model="form.name" class="p-2 border border-[rgb(225, 227, 230)]" id="name"
                            name="name" type="text" required>

                        <label class="mt-1" for="address">Dirección</label>
                        <input v-model="form.address" class="p-2 border border-[rgb(225, 227, 230)]" id="address"
                            name="address" type="text" required>

                        <label class="mt-1" for="observation">Observación</label>
                        <textarea v-model="form.observation" rows="4"
                            class="resize-y p-2 border border-[rgb(225, 227, 230)]" id="observation"
                            name="observation"></textarea>

                        <label class="mt-1" for="phone_number">Teléfono</label>
                        <input v-model="form.phone_number" class="p-2 border border-[rgb(225, 227, 230)]" id="phone_number"
                            name="phone_number" type="number" required>

                        <button
                            class="bg-primary text-white py-2 px-6 mt-5 rounded text-xl shadow-xl tracking-wider">Siguiente</button>
                    </form>
                </div>
                <div v-show="page_step === PAGE_STEP_PAYMENT">

                    <div v-show="payment.state === PAYMENT_STATE_LOADING">
                        <h2 class="text-primary text-xl text-center p-5 mb-3">Preparando el pago..</h2>
                        <div class="text-center">
                            <svg class="animate-spin mx-auto h-14 w-14 text-primary" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                                </circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                        </div>
                    </div>

                    <div v-show="payment.state === PAYMENT_STATE_READY" id="payment-container"></div>

                    <div v-show="payment.state === PAYMENT_STATE_ERROR">
                        <h2 class="text-primary text-xl text-center p-5 mb-3">{{ payment.error }}</h2>
                        <img class="max-w-[200px] mx-auto" src="/assets/images/stickers/ocurrio-un-error.png"
                            alt="Error al prepara el pago">
                        <div class="text-center">
                            <button @click="createMercadoPagoPayment"
                                class="bg-primary text-white py-2 px-6 mt-5 rounded text-xl shadow-xl tracking-wider">
                                Volver a intentar
                            </button>
                        </div>
                    </div>

                </div>
                <div v-show="page_step === PAGE_STEP_SUCCESS">
                    <h2 class="text-primary text-3xl text-center p-5 mb-3">Invitación confirmada</h2>
                    <p class="text-center mb-3">
                        Nos pondremos en contacto a la brevedad al número indicado.<br>
                        Por favor tenga en cuenta los tiempos para la realización se un invitación.<br>
                        Muchas gracias por su compra!
                    </p>
                    <img class="max-w-[200px] mx-auto mb-5" src="/assets/images/stickers/pago-confirmado.png"
                        alt="Pago recibido exitosamente">
                    <div class="text-center">
                        <Link href="/gallery" class="bg-primary text-white py-2 px-6 mt-5 rounded text-xl shadow-xl tracking-wider">Ver otras invitaciones</Link>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>