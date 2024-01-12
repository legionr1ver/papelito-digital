<script>
import Layout from './../../Layouts/AuthenticatedLayout.vue';
export default {
  layout: Layout,
}
</script>

<script setup>
import { Link } from '@inertiajs/vue3';
import Pagination from '@/Components/Pagination.vue';

/* fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTrashCan, faEnvelope, faEnvelopeOpen, faBell } from '@fortawesome/free-regular-svg-icons';
library.add(faTrashCan, faEnvelope, faEnvelopeOpen, faBell);

const props = defineProps({
  paginatedNotifications: {
    type: Object,
    requird: true,
  },
});
</script>

<template>
  <h1 class="text-3xl">Notificaciones</h1>

  <p v-if="paginatedNotifications.data.length === 0" class="text-2xl text-center mx-3 my-6">
    No hay notificaciones
  </p>
  <div v-else class="max-w-[800px] mx-auto">
    <header class="flex p-2">
      <Link as="button" method="post" href="/notifications-all/read" class="text-sm text-primary hover:underline">Marcar todo como leido</Link>
    </header>
    <ul>
      <li v-for="notification in paginatedNotifications.data" class="grid grid-flow-col grid-cols-[auto_1fr_auto_auto] items-center p-3 cursor-pointer hover:bg-slate-200" :class="{'bg-slate-200': !notification.read_at}">
        <div class="relative mx-2">
          <FontAwesomeIcon class="m-1" :icon="['far', 'bell']" />
          <div v-if="!notification.read_at" class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
        </div>
        <p class="mx-2">
          <template v-if="notification.type.includes('OrderCreated')">
            Tiene un nuevo pedido. <Link class="m-1 text-primary font-bold hover:underline" :href="`/order/${notification.data.order_id}`">Ir</Link>
          </template>
          <template v-if="notification.type.includes('OrderPaid')">
            Un pedido pedido ya fue <strong class="text-green-500 m-1">Pagado</strong>. <Link class="m-1 text-primary font-bold hover:underline" :href="`/order/${notification.data.order_id}`">Ir</Link>
          </template>
        </p>
        <span class="mx-2">
          {{ (new Date(notification.created_at)).toLocaleString() }}
        </span>
        <div class="mx-6 text-2xl">
          <Link v-if="notification.read_at" class="me-6" as="button" :href="`/notifications/${notification.id}`" method="patch" :data="{read: 0}">
            <FontAwesomeIcon :icon="['far', 'envelope-open']" />
          </Link>
          <Link v-else class="me-6" as="button" :href="`/notifications/${notification.id}`" method="patch" :data="{read: 1}">
            <FontAwesomeIcon :icon="['far', 'envelope']" />
          </Link>
          <Link as="button" :href="`/notifications/${notification.id}`" method="delete">
            <FontAwesomeIcon :icon="['far', 'trash-can']" />
          </Link>
        </div>
      </li>
    </ul>
  </div>

  <Pagination :links="paginatedNotifications.links" />
  
</template>

<style scoped></style>