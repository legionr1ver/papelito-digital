<script setup>
import { computed } from 'vue';
import Button from '@/Components/Button.vue';

const props = defineProps([
    'page_step',
    'item',
    'form',
]);

const emit = defineEmits([
    'update:page_step',
]);

const finalPrice = computed(() => {
    let price = props.item.price;
    if( props.form.high_priority ) price += 200;
    if( props.form.map_ubication ) price += 150;
    if( props.form.whatsapp_confirmation ) price += 150;
    if( props.form.payment_method === 'transferencia' ) price *= 0.9;
    return price;
});
</script>

<template>
    <section id="resumen">
        <h2 class="text-2xl mb-5">Resumen de la compra</h2>

        <ul class="space-y-5">
            <li>
                <span>Precio de la invitacion</span>
                <span class="font-bold">+${{ item.price }}</span>
            </li>
            <li v-if="form.high_priority">
                <span>Elaboración en menos de 24hs</span>
                <span class="font-bold">+$200</span>
            </li>
            <li v-if="form.whatsapp_confirmation">
                <span>Confirmación de asistencia</span>
                <span class="font-bold">+$150</span>
            </li>
            <li v-if="form.map_ubication">
                <span>Ubicación en el mapa</span>
                <span class="font-bold">+$150</span>
            </li>
            <li v-if="form.payment_method == 'transferencia'">
                <span>Descuento por transferencia</span>
                <span class="font-bold">-10%</span>
            </li>
            <li>
                <span>Total</span>
                <span class="font-bold">${{ finalPrice }}</span>
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