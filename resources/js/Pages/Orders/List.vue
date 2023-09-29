<script>
import Layout from './../../Layouts/AuthenticatedLayout.vue';
export default {
  layout: Layout,
}
</script>

<script setup>
import Input from '@/Components/Input.vue';
import Select from '@/Components/Select.vue';
import Button from '@/Components/Button.vue';

/* fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFileImage, faFileVideo } from '@fortawesome/free-regular-svg-icons';
library.add(faFileImage,faFileVideo);

defineProps({
  paginatedOrders: {
    type: Object,
    requird: true,
  },
});
</script>

<template>
  <h1 class="text-3xl">Pedidos</h1>

  <form class="py-2 flex">
    <Input class="max-w-xs me-3" type="search" placeholder="Buscar.." />
    <Select class="max-w-xs me-3">
      <option value="">Todas</option>
      <option value="pendiente">Pendiente</option>
      <option value="finalizado">Finalizado</option>
    </Select>
    <Button class="p-0" type="submit">Buscar</Button>
  </form>

  <ul class="text-2xl">
    <li v-for="order in paginatedOrders.data" class="flex items-center">
      <div class="flex items-center">
        <span class="p-3 text-4xl">
          <FontAwesomeIcon v-if="order.invitation.type_id === 1" :icon="['far', 'file-image']" />
          <FontAwesomeIcon v-if="order.invitation.type_id === 2" :icon="['far', 'file-video']" />
        </span>
        <span class="p-3">
          {{ order.invitation.title }} "{{ order.name }}"
        </span>
        <span class="text-lg text-primary font-bold">
          Pendiente
        </span>
      </div>
      <div class="ms-auto p-3">
        {{ (new Date(order.created_at)).toLocaleDateString() }}
      </div>
      <div>
        <button type="button">Finalizada</button>
      </div>
    </li>
  </ul>

</template>

<style scoped></style>