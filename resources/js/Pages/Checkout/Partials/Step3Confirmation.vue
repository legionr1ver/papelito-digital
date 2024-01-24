<script setup>
import { computed } from 'vue';
import { usePage } from '@inertiajs/vue3';
import Button from '@/Components/Button.vue';

const props = defineProps([
    'page_step',
    'item',
    'configurations',
    'form',
]);

const emit = defineEmits([
    'update:page_step',
]);

const page = usePage();
const currency = page.props.currency.code;

const finalPrice = computed(() => {
    let price = props.item[`${currency}_price`];
    if( props.form.high_priority ) price += props.configurations.get(`high_priority_price_${currency}`);
    if( props.form.map_ubication ) price += props.configurations.get(`map_ubication_price_${currency}`);
    if( props.form.whatsapp_confirmation ) price += props.configurations.get(`whatsapp_confirmation_price_${currency}`);
    if( props.form.payment_method === 'transferencia' ) price *= 0.9;
    return Math.floor(price);
});
</script>

<template>
    <section id="resumen">
        <h2 class="text-2xl mb-5">Resumen de la compra</h2>

        <ul class="space-y-5">
            <li>
                <span>Precio de la invitacion</span>
                <span class="font-bold">+{{ page.props.currency.label }} {{ item[`${currency}_price`] }}</span>
            </li>
            <li v-if="form.high_priority">
                <span>Elaboración en menos de 24hs</span>
                <span class="font-bold">+{{ page.props.currency.label }} {{ configurations.get(`high_priority_price_${currency}`) }}</span>
            </li>
            <li v-if="form.whatsapp_confirmation">
                <span>Confirmación de asistencia</span>
                <span class="font-bold">+{{ page.props.currency.label }} {{ configurations.get(`whatsapp_confirmation_price_${currency}`) }}</span>
            </li>
            <li v-if="form.map_ubication">
                <span>Ubicación en el mapa</span>
                <span class="font-bold">+{{ page.props.currency.label }} {{ configurations.get(`map_ubication_price_${currency}`) }}</span>
            </li>
            <li v-if="form.payment_method == 'transferencia'">
                <span>Descuento por transferencia</span>
                <span class="font-bold">-10%</span>
            </li>
            <li>
                <span>Total</span>
                <span class="font-bold">{{ page.props.currency.label }} {{ finalPrice }}</span>
            </li>
        </ul>
    </section>

    <div class="grid grid-cols-2 gap-2 my-2">
        <Button type="button" @click="$emit('update:page_step', page_step - 1)">Volver</Button>
        <Button type="button" @click="$emit('update:page_step', page_step + 1)">Confirmar</Button>
    </div>
</template>

<style scoped>
#resumen li {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: solid 1px #dddddd;
    border-bottom-style: dashed;
}
</style>