<script setup>
import { ref, computed } from 'vue';
import Button from '@/Components/Button.vue';

const emit = defineEmits(['goBack','submitted']);
const props = defineProps([
    'invitation',
    'name',
    'address',
    'observation',
    'phone_number',
    'map_ubication',
    'whatsapp_confirmation',
    'payment_method',
]);

const states = Object.freeze({
    INITIAL: Symbol(),
    LOADING: Symbol(),
    ERROR: Symbol(),
    SUCCESS: Symbol(),
});

const state = ref(states.INITIAL);
const errorMessage = ref(null);

const final_price = computed(() => {
    return Math.floor( (
                props.invitation.price
                + (props.map_ubication ? 150 : 0)
                + (props.whatsapp_confirmation ? 150 : 0)
            ) * (props.payment_method === 'transferencia' ? 0.9 : 1) );
});

async function submit(){
    try {
        state.value = states.LOADING;

        const response = await axios.post('/order', {
            invitation_id: props.invitation.id,
            name: props.name,
            address: props.address,
            observation: props.observation,
            phone_number: props.phone_number,
            map_ubication: props.map_ubication,
            whatsapp_confirmation: props.whatsapp_confirmation,
            payment_method: props.payment_method,
        });
        
        emit('submitted', response.data);
        state.value = states.SUCCESS;

    } catch (error) {
        state.value = states.ERROR;
        errorMessage.value = error.response.data;
    }
}
</script>

<template>
    <div>
        <div v-if="state === states.INITIAL">
            <h2 class="text-2xl mb-5">Resumen de su compra</h2>

            <div class="space-y-2">
                <div>Invitación: <strong>{{ props.invitation.title }}</strong></div>
                <div>Tipo: <strong>{{ props.invitation.type.name }}</strong></div>
                <div>Ubicación en mapa: <strong>{{ props.map_ubication ? 'Si' : 'No' }}</strong></div>
                <div>Confirmación por whatsapp: <strong>{{ props.whatsapp_confirmation ? 'Si' : 'No' }}</strong></div>
                <div>Observación: <strong>{{ props.observation }}</strong></div>
                <div>Precio final: <strong>$ {{ final_price }}</strong></div>
                <div>Metodo de pago: <strong>{{ props.payment_method == 'transferencia' ? 'Transferencia' : 'Mercado pago' }}</strong></div>
            </div>

            <div class="grid grid-cols-2 gap-2">
                <Button type="button" @click="$emit('goBack')">Volver</Button>
                <Button type="button" @click="submit">Confirmar</Button>
            </div>
        </div>

        <div v-if="state === states.LOADING" class="flex justify-center items-center">
            <svg class="animate-spin -ml-1 mr-3 h-14 w-14 text-primary my-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </div>

        <div v-if="state === states.ERROR" class="flex justify-center items-center">
            <div>
                <img class="max-w-[200px] mx-auto" src="/assets/images/stickers/ocurrio-un-error.png" alt="Ocurrio un error">
                <div>
                    <Button @click="submit">Volver a intentar</Button>
                </div>
            </div>
        </div>

        <div v-if="state === states.SUCCESS">
            
        </div>
    </div>
</template>

<style scoped></style>