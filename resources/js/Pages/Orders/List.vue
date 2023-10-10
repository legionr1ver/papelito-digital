<script>
import Layout from './../../Layouts/AuthenticatedLayout.vue';
export default {
  layout: Layout,
}
</script>

<script setup>
import { Link, useForm } from '@inertiajs/vue3';
import Input from '@/Components/Input.vue';
import Select from '@/Components/Select.vue';
import Button from '@/Components/Button.vue';
import Pagination from '@/Components/Pagination.vue';

/* fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFileImage, faFileVideo } from '@fortawesome/free-regular-svg-icons';
library.add(faFileImage, faFileVideo);

const props = defineProps({
  search: {
    type: Object,
    required: true,
  },
  paginatedOrders: {
    type: Object,
    requird: true,
  },
});

const search = useForm({
  query: props.search.query,
  finished: props.search.finished,
});
</script>

<template>
  <h1 class="text-3xl">Pedidos</h1>

  <form @submit.prevent="search.get('/orders')" class="py-2 flex">
    <Input v-model="search.query" class="max-w-xs me-3" type="search" placeholder="Buscar.." />
    <Select v-model="search.finished" class="max-w-xs me-3">
      <option value="">Todas</option>
      <option value="false">Pendiente</option>
      <option value="true">Finalizado</option>
    </Select>
    <Button class="p-0" type="submit">Buscar</Button>
  </form>

  <p v-if="paginatedOrders.data.length === 0" class="text-2xl text-center mx-3 my-6">No hay pedidos</p>

  <table v-else class="w-full my-3 text-center">
    <thead class="bg-primary text-white">
      <th class="py-1" scope="col">Invitación</th>
      <th scope="col">Tipo</th>
      <th scope="col">Nombre</th>
      <th scope="col">Estado</th>
      <th scope="col">Medio de pago</th>
      <th scope="col">Pagado</th>
      <th scope="col">Fecha</th>
      <th scope="col"></th>
    </thead>
    <tbody>
      <tr v-for="order in paginatedOrders.data" class="even:bg-slate-50">
        <td class="py-4">{{ order.invitation.title }}</td>
        <td>
          <template v-if="order.invitation.type_id === 1">
            <FontAwesomeIcon class="mx-2 text-2xl" :icon="['far', 'file-image']" />
            <span>Fija</span>
          </template>
          <template v-if="order.invitation.type_id === 2">
            <FontAwesomeIcon class="mx-2 text-2xl" :icon="['far', 'file-video']" />
            <span>Video</span>
          </template>
        </td>
        <td>{{ order.name }}</td>
        <td>
          <strong v-if="order.finished" class="text-green-600">Finalizado</strong>
          <strong v-else class="text-red-600">Pendiente</strong>
        </td>
        <td>
          <span v-if="order.payment_method === 'transferencia'">Transferencia</span>
          <span v-else>Mercado Pago</span>
        </td>
        <td>
          {{ order.payment_external_id ? 'Si' : 'No' }}
        </td>
        <td>{{ (new Date(order.created_at)).toLocaleDateString() }}</td>
        <td>
          <Link :href="`/orders/${order.id}`" as="button" class="py-1 px-4 rounded bg-primary font-bold text-white me-2">
          Ver</Link>
          <Link v-if="order.finished" as="button" :href="`/orders/${order.id}`" :data="{ finished: false }" method="patch"
            preserve-scroll class="py-1 px-4 rounded bg-red-600 font-bold text-white">Pendiente</Link>
          <Link v-else as="button" :href="`/orders/${order.id}`" :data="{ finished: true }" method="patch" preserve-scroll
            class="py-1 px-4 rounded bg-green-600 font-bold text-white">Finalizar</Link>
        </td>
      </tr>
    </tbody>
  </table>

  <Pagination :links="paginatedOrders.links" />
  
</template>

<style scoped></style>