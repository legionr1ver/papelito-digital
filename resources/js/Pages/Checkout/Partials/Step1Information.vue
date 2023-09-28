<script setup>
import { ref, reactive } from 'vue';
import Button from '@/Components/Button.vue';

const emit = defineEmits(['submitted']);
const props = defineProps([
    'invitation',
    'name',
    'address',
    'observation',
    'phone_number',
    'map_ubication',
    'whatsapp_confirmation',
]);

const name = ref(props.name);
const address = ref(props.address);
const observation = ref(props.observation);
const phone_number = ref(props.phone_number);
const map_ubication = ref(props.map_ubication);
const whatsapp_confirmation = ref(props.whatsapp_confirmation);

function submit(){
    emit('submitted',{
        name: name.value,
        address: address.value,
        observation: observation.value,
        phone_number: phone_number.value,
        map_ubication: map_ubication.value,
        whatsapp_confirmation: whatsapp_confirmation.value,
    });
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
                        <input v-model="map_ubication" id="add-map-ubication" type="checkbox" class="m-2 accent-primary">
                        <label for="add-map-ubication">+$150 Agregar ubiación en mapa.</label>
                    </li>
                    <li class="flex items-center">
                        <input v-model="whatsapp_confirmation" id="add-whatsapp-confirmation" type="checkbox" class="m-2 accent-primary">
                        <label for="add-whatsapp-confirmation">+$150 Agregar confirmación de asistencia por
                            whatsapp.</label>
                    </li>
                </ul>
            </section>
        </div>
        <form id="information-step-form" class="grid text-gray-400" @submit.prevent="submit">
            <label class="mt-1" for="name">Nombre</label>
            <input v-model="name" class="p-2 border border-[rgb(225, 227, 230)]" id="name" name="name" type="text"
                required>

            <label class="mt-1" for="address">Dirección</label>
            <input v-model="address" class="p-2 border border-[rgb(225, 227, 230)]" id="address" name="address"
                type="text" required>

            <label class="mt-1" for="observation">Observación</label>
            <textarea v-model="observation" rows="4" class="resize-y p-2 border border-[rgb(225, 227, 230)]"
                id="observation" name="observation"></textarea>

            <label class="mt-1" for="phone_number">Teléfono</label>
            <input v-model="phone_number" class="p-2 border border-[rgb(225, 227, 230)]" id="phone_number"
                name="phone_number" type="text" required>
        </form>

        <div class="grid grid-cols-2 gap-2">
            <Button type="buttom" disabled>Volver</Button>
            <Button type="submit" form="information-step-form">Siguiente</Button>
        </div>
    </div>
</template>

<style scoped></style>