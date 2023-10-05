<script>
import Layout from './../../Layouts/AuthenticatedLayout.vue';
export default {
  layout: Layout,
}
</script>

<script setup>
import { Link } from '@inertiajs/vue3';

/* fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
library.add(faAngleLeft);

defineProps({
  order: {
    type: Object,
    requird: true,
  },
});
</script>

<template>
  <header class="flex items-center my-2">
    <Link href="/orders">
      <FontAwesomeIcon :icon="['fas', 'angle-left']" />
    </Link>
    <h1 class="text-3xl mx-4">Pedido</h1>
  </header>

  <article class="flex">
    <div class="flex-initial max-w-[300px]">
      <img v-if="order.invitation.type_id === 1" class="max-w-full" :src="order.invitation.source_url">
      <video v-if="order.invitation.type_id === 2" class="max-w-full" :src="order.invitation.source_url"></video>
    </div>
    <div class="flex-1 space-y-1 m-3">
      <div><span class="me-3">Nombre</span><strong>{{ order.name }}</strong></div>
      <div><span class="me-3">Dirección</span><strong>{{ order.address }}</strong></div>
      <div><span class="me-3">Observación</span><strong>{{ order.observation }}</strong></div>
      <div><span class="me-3">Teléfono</span><strong>{{ order.phone_number }}</strong></div>
      <div><span class="me-3">Ubicación en mapa</span><strong>{{ order.map_ubication ? 'Si' : 'No' }}</strong></div>
      <div><span class="me-3">Confirmación por Whatsapp</span><strong>{{ order.whatsapp_confirmation ? 'Si' : 'No' }}</strong></div>
      <div><span class="me-3">Precio</span><strong>${{ order.price }}</strong></div>
      <div><span class="me-3">Método de pago</span><strong>{{ order.payment_method }}</strong></div>
      <div><span class="me-3">Código de pago</span><strong>{{ order.payment_external_id }}</strong></div>
      <div><span class="me-3">Fecha</span><strong>{{ (new Date(order.created_at)).toLocaleDateString() }}</strong></div>
      <div>
        <span class="me-3">Estado</span>
        <strong v-if="order.finished" class="text-green-600">Finalizado</strong>
        <strong v-else class="text-red-600">Pendiente</strong>
      </div>
      <div class="my-2">
        <Link v-if="order.finished" as="button" :href="`/orders/${order.id}`" :data="{finished: false}" method="patch" preserve-scroll class="py-1 px-4 rounded bg-red-600 font-bold text-white">Pendiente</Link>
        <Link v-else  as="button" :href="`/orders/${order.id}`" :data="{finished: true}" method="patch" preserve-scroll class="py-1 px-4 rounded bg-green-600 font-bold text-white">Finalizar</Link>
      </div>
    </div>
  </article>

</template>

<style scoped></style>