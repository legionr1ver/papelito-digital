<script setup>
import PrimaryButton from '@/Components/PrimaryButton.vue';

const props = defineProps([
    'invitation',
    'information_step_form',
    'payment_method',
    'final_price',
]);

const emit = defineEmits(['goBack','submitted']);
</script>

<template>
    <div class="mb-5">
        <h2 class="text-2xl mb-5">Resumen de su compra</h2>
        
        <div class="space-y-2">
            <div>Invitación: <strong>{{ props.invitation.title }}</strong></div>
            <div>Tipo: <strong>{{ props.invitation.type.name }}</strong></div>
            <div>Ubicación en mapa: <strong>{{ props.information_step_form.map_ubication ? 'Si' : 'No' }}</strong></div>
            <div>Confirmación por whatsapp: <strong>{{ props.information_step_form.whatsapp_confirmation ? 'Si' : 'No' }}</strong></div>
            <div>Observación: <strong>{{ props.information_step_form.observation }}</strong></div>
            <div>Precio final: <strong>$ {{ props.final_price }}</strong></div>
            <div>Metodo de pago: <strong>{{ props.payment_method == 'transferencia' ? 'Transferencia' : 'Mercado pago' }}</strong></div>
        </div>

        <div class="grid grid-cols-2 gap-2">
            <PrimaryButton type="button" @click="$emit('goBack')">Volver</PrimaryButton>
            <PrimaryButton type="button" @click="$emit('submitted')">Confirmar</PrimaryButton>
        </div>
    </div>
</template>

<style scoped></style>