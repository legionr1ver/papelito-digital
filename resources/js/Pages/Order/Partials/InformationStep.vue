<script setup>
import { reactive } from 'vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';

const INVITATION_TYPE_ANIMADA = 2;

const props = defineProps({
    invitation: {
        type: Object,
        required: true,
    },
    modelValue: {
        type: Object,
        required: true,
    },
});

const emit = defineEmits(['submitted','update:modelValue']);

const form = reactive({
    map_ubication: false,
    whatsapp_confirmation: false,
    name: '',
    address: '',
    observation: '',
    phone_number: ''
});

function submit(){
    emit('update:modelValue', form);
    emit('submitted');
}

</script>

<template>
    <div>
        <div class="mb-5">
            <h2 class="text-2xl mb-5">¿En que formato voy a recibir la invitaión?</h2>
            <ul class="mb-5 space-y-5">
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
            <section v-if="props.invitation.type_id == 1">
                <h2 class="text-2xl mb-5">Extras</h2>
                <ul>
                    <li class="flex items-center">
                        <input v-model="form.map_ubication" true-value="1" false-value="0" id="add-map-ubication" type="checkbox" class="m-2 accent-primary">
                        <label for="add-map-ubication">+$150 Agregar ubiación en mapa.</label>
                    </li>
                    <li class="flex items-center">
                        <input v-model="form.whatsapp_confirmation" true-value="1" false-value="0" id="add-whatsapp-confirmation" type="checkbox" class="m-2 accent-primary">
                        <label for="add-whatsapp-confirmation">+$150 Agregar confirmación de asistencia por
                            whatsapp.</label>
                    </li>
                </ul>
            </section>
        </div>
        <form id="information-step-form" class="grid text-gray-400" @submit.prevent="submit">
            <label class="mt-1" for="name">Nombre</label>
            <input v-model="form.name" class="p-2 border border-[rgb(225, 227, 230)]" id="name" name="name" type="text"
                required>

            <label class="mt-1" for="address">Dirección</label>
            <input v-model="form.address" class="p-2 border border-[rgb(225, 227, 230)]" id="address" name="address"
                type="text" required>

            <label class="mt-1" for="observation">Observación</label>
            <textarea v-model="form.observation" rows="4" class="resize-y p-2 border border-[rgb(225, 227, 230)]"
                id="observation" name="observation"></textarea>

            <label class="mt-1" for="phone_number">Teléfono</label>
            <input v-model="form.phone_number" class="p-2 border border-[rgb(225, 227, 230)]" id="phone_number"
                name="phone_number" type="text" required>
        </form>

        <div class="grid grid-cols-2 gap-2">
            <PrimaryButton type="buttom" disabled>Volver</PrimaryButton>
            <PrimaryButton type="submit" form="information-step-form">Siguiente</PrimaryButton>
        </div>
    </div>
</template>

<style scoped></style>