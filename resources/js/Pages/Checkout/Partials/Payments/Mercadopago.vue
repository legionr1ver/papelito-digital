<script setup>
import { ref, onMounted } from 'vue';

defineProps([
    'order',
]);

const loaded = ref(false);
const error = ref(false);

onMounted(() => {
    const el = document.createElement('script');
    el.onload = () => {
        loaded.value = true;

        window.paypal.Buttons({

            async createOrder() {
                try {

                    const response = await axios.post('/paypal/create', {
                        order_id: props.order.id,
                    });
                    return response.data;

                } catch (error) {
                    error.value = true;
                }
            },

            async onApprove(data, actions) {
                try {
                    const response = await axios.post('/paypal/capture', {
                        paypal_order_id: data.orderID,
                    });

                    console.log(response.data);
                    // Three cases to handle:
                    //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                    //   (2) Other non-recoverable errors -> Show a failure message
                    //   (3) Successful transaction -> Show confirmation or thank you message

                    const errorDetail = response.data.details?.[0];

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
                        paypal.success = true;
                    }
                } catch (error) {
                    error.value = true;
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

        <div v-show="error" class="flex justify-center items-center">
            <div>
                <img class="max-w-[200px] mx-auto" src="/assets/images/stickers/ocurrio-un-error.webp"
                    alt="Ocurrio un error">

                <p class="text-center text-primary font-bold p-10">Ocurrió un error al preparar el pago, vuelva a
                    intentarlo cliqueando en alguno de los botones en unos momentos.</p>
            </div>
        </div>

        <div id="paypal-buttons"></div>

    </div>
</template>

<style></style>