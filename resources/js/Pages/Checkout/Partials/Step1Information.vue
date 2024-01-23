<script setup>
import { ref } from 'vue';
import Button from '@/Components/Button.vue';
import { usePage } from '@inertiajs/vue3';

const props = defineProps([
    'item',
    'configurations',
    'page_step',
    'birthday_name',
    'birthday_age',
    'birthday_main_address',
    'birthday_secondary_address',
    'birthday_date',
    'birthday_from_time',
    'birthday_to_time',
    'observation',
    'contact_name',
    'contact_number',
    'high_priority',
    'map_ubication',
    'whatsapp_confirmation',
]);

const emit = defineEmits([
    'update:page_step',
    'update:birthday_name',
    'update:birthday_age',
    'update:birthday_main_address',
    'update:birthday_secondary_address',
    'update:birthday_date',
    'update:birthday_from_time',
    'update:birthday_to_time',
    'update:observation',
    'update:contact_name',
    'update:contact_number',
    'update:high_priority',
    'update:map_ubication',
    'update:whatsapp_confirmation',
]);

const page = usePage();
const confirmation = ref(false);
</script>

<template>
    <form @submit.prevent="$emit('update:page_step', 2)">
        <div class="mb-5 space-y-8">

            <section>
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
            </section>

            <section>
                <h2 class="text-2xl mb-5">Datos para la celebración</h2>

                <div class="grid text-gray-400 space-y-5">

                    <div class="grid">
                        <label for="name">
                            <div>Nombre del cumpleañero</div>
                            <small>Tal como quieras que figure en la tarjeta</small>
                        </label>
                        <input @input="$emit('update:birthday_name', $event.target.value)" :value="birthday_name" class="p-2 border border-[rgb(225, 227, 230)]" id="name" type="text" placeholder="Ej: Nacho"
                            required>
                    </div>

                    <div class="grid">
                        <label for="edad">
                            <div>Edad a cumplir</div>
                            <small>Solo si es necesario</small>
                        </label>
                        <input @input="$emit('update:birthday_age', $event.target.value)" :value="birthday_age" class="p-2 border border-[rgb(225, 227, 230)]" id="edad" type="number" step="1" min="0" placeholder="Ej: 2">
                    </div>

                    <div class="grid">
                        <label for="direccion">
                            <div>Dirección del evento</div>
                        </label>
                        <input @input="$emit('update:birthday_main_address', $event.target.value)" :value="birthday_main_address" class="p-2 border border-[rgb(225, 227, 230)]" id="direccion" type="text" placeholder="Ej: Las Lilas 123, Barrio San Juan, Escobar" required>
                    </div>

                    <div class="grid">
                        <label for="segunda_direccion">
                            <div>Segunda dirección del evento</div>
                            <small>Para bautismos/confirmaciones/comuniones</small>
                        </label>
                        <input @input="$emit('update:birthday_secondary_address', $event.target.value)" :value="birthday_secondary_address" class="p-2 border border-[rgb(225, 227, 230)]" id="segunda_direccion" type="text" placeholder="Ej: Parroquia Nuestra señora del Carmen,  Las Lilas 123, Escobar">
                    </div>

                    <div class="grid">
                        <label for="fecha">
                            <div>Fecha del evento</div>
                        </label>
                        <input @input="$emit('update:birthday_date', $event.target.value)" :value="birthday_date" class="p-2 border border-[rgb(225, 227, 230)]" id="fecha" type="date" required>
                    </div>

                    <div class="grid grid-cols-2">
                        <div>
                            <label for="desde" class="me-5">Desde</label>
                            <input @input="$emit('update:birthday_from_time', $event.target.value)" :value="birthday_from_time" class="p-2 border border-[rgb(225, 227, 230)]" id="desde" type="time">
                        </div>
                        <div>
                            <label for="hasta" class="me-5">Hasta</label>
                            <input @input="$emit('update:birthday_to_time', $event.target.value)"  :value="birthday_to_time" class="p-2 border border-[rgb(225, 227, 230)]" id="hasta" type="time">
                        </div>
                    </div>

                    <div class="grid">
                        <label for="comentarios">
                            <div>Comentarios</div>
                            <small>Cualquier frase que quieras incluir en la invitación</small>
                        </label>
                        <textarea id="comentarios" @input="$emit('update:observation', $event.target.value)" :value="observation" class="p-2 border border-[rgb(225, 227, 230)]" placeholder="Ej: traer traje de baño, confirmar asistencia, te espero, etc" rows="4"></textarea>
                    </div>

                </div>
            </section>

            <section>
                <h2 class="text-2xl mb-5">Información de contacto</h2>

                <div class="text-gray-400 space-y-5">

                    <div class="grid">
                        <label for="nombre_contacto">
                            <div>Nombre</div>
                        </label>
                        <input @input="$emit('update:contact_name', $event.target.value)" :value="contact_name" class="p-2 border border-[rgb(225, 227, 230)]" id="nombre_contacto" type="text" required>
                    </div>

                    <div class="grid">
                        <label for="telefono_contacto">
                            <div>Teléfono</div>
                        </label>
                        <input @input="$emit('update:contact_number', $event.target.value)" :value="contact_number" class="p-2 border border-[rgb(225, 227, 230)]" id="nombre_contacto" type="text" required>
                    </div>

                </div>
                
            </section>

            <section>
                <h2 class="text-2xl mb-5">Confirmación</h2>

                <div class="grid">
                    <p class="mb-2">
                        Una vez realizada la invitación solo se podrá hacer cambios una cantidad limitada de veces. Por favor verificar que los datos ingresados sean correctos.
                    </p>
                    <div class="flex items-center text-xl">
                        <input v-model="confirmation" id="confirmacion" type="checkbox" class="m-2 accent-primary">
                        <label for="confirmacion" class="grid">
                            <strong>¡Confirmo que los datos ingresados son correctos!</strong>
                            <span class="text-sm text-red-600 font-semibold">Requerido</span>
                        </label>
                    </div>
                </div>
            </section>

            <section>
                <h2 class="text-2xl mb-5">Extras</h2>

                <ul>
                    <li class="flex items-center">
                        <input @input="$emit('update:high_priority', $event.target.checked)" :checked="high_priority" id="urgente" type="checkbox" class="m-2 accent-primary">
                        <label for="urgente">+{{ page.props.currency.label }} {{ props.configurations.get(`high_priority_price_${page.props.currency.code}`) }} Elaboración en menos de 24hs. <strong>¡Urgente!</strong></label>
                    </li>

                    <template v-if="item.type_id == 1">
                        <li class="flex items-center">
                            <input @change="$emit('update:whatsapp_confirmation', $event.target.checked)" :checked="whatsapp_confirmation" id="add-whatsapp-confirmation" type="checkbox" class="m-2 accent-primary">
                            <label for="add-whatsapp-confirmation">+{{ page.props.currency.label }} {{ props.configurations.get(`whatsapp_confirmation_price_${page.props.currency.code}`) }} Agregar confirmación de asistencia por
                                whatsapp.</label>
                        </li>
                        <li class="flex items-center">
                            <input @change="$emit('update:map_ubication', $event.target.checked)" :checked="map_ubication" id="map-confirmation" type="checkbox" class="m-2 accent-primary">
                            <label for="map-confirmation">+{{ page.props.currency.label }} {{ props.configurations.get(`map_ubication_price_${page.props.currency.code}`) }} Agregar ubicación en el mapa.</label>
                        </li>
                    </template>
                </ul>
            </section>
        </div>

        <div class="grid grid-cols-2 gap-2 my-2">
            <Button type="buttom" disabled>Volver</Button>
            <Button type="submit" :disabled="!confirmation">Siguiente</Button>
        </div>

    </form>
</template>

<style scoped></style>