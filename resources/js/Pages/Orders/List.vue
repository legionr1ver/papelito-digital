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
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-regular-svg-icons';
library.add( faCircleCheck, faCircleXmark);

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

  <form @submit.prevent="search.get('/order')" class="py-2 flex">
    <Input v-model="search.query" class="max-w-xs me-3" type="search" placeholder="Buscar.." />
    <Select v-model="search.finished" class="max-w-xs me-3">
      <option value="">Todas</option>
      <option value="0">Pendiente</option>
      <option value="1">Finalizado</option>
    </Select>
    <Button class="p-0" type="submit">Buscar</Button>
  </form>

  <p v-if="paginatedOrders.data.length === 0" class="text-2xl text-center mx-3 my-6">No hay pedidos</p>

  <table v-else class="w-full my-3 text-center">
    <thead class="bg-primary text-white">
      <th class="py-1" scope="col">Artículo</th>
      <th scope="col">Cumpleañero/a</th>
      <th scope="col">Monto</th>
      <th scope="col">Prioridad</th>
      <th scope="col">Método de pago</th>
      <th scope="col">Pagado</th>
      <th scope="col">Estado</th>
      <th scope="col">Fecha</th>
      <th scope="col"></th>
    </thead>
    <tbody>
      <tr v-for="order in paginatedOrders.data" class="even:bg-slate-50">
        <td class="py-4">
          <strong>{{ order.item.title }}</strong>
          <small class="mx-2">({{ order.item.type.name }})</small>
        </td>
        <td>{{ order.birthday_name }}</td>
        <td class="uppercase">{{ order.currency }} {{ order.price }}</td>
        <td>
          <FontAwesomeIcon v-if="order.high_priority" :icon="['far', 'circle-check']" class="text-green-500" />
          <FontAwesomeIcon v-else :icon="['far', 'circle-xmark']" class="text-red-500" />
        </td>
        <td>
          <img class="w-10 mx-auto" v-if="order.payment_method === 'transferencia'" src="/assets/images/icons/bank-transfer.webp" alt="Transferencia bancaria">
          <img class="w-14 mx-auto" v-if="order.payment_method === 'mercadopago'" src="/assets/images/cards/mercadopago.webp" alt="Mercado pago">
          <img class="w-14 mx-auto" v-if="order.payment_method === 'paypal'" src="/assets/images/cards/paypal-logo.webp" alt="Paypal">
        </td>
        <td>
          <FontAwesomeIcon v-if="order.payment?.is_paid" :icon="['far', 'circle-check']" class="text-green-500" />
          <FontAwesomeIcon v-else :icon="['far', 'circle-xmark']" class="text-red-500" />
        </td>
        <td>
          <strong v-if="order.finished" class="text-green-500">Finalizado</strong>
          <strong v-else class="text-red-500">Pendiente</strong>
        </td>
        <td>{{ (new Date(order.created_at)).toLocaleString() }}</td>
        <td>
          <Link :href="`/order/${order.id}`" as="button" class="py-1 px-4 rounded bg-primary font-bold text-white me-2">
            Ver
          </Link>
        </td>
      </tr>
    </tbody>
  </table>

  <Pagination :links="paginatedOrders.links" />
  
</template>

<style scoped></style>