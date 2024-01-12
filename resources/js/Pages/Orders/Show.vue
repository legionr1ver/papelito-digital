<script>
import Layout from './../../Layouts/AuthenticatedLayout.vue';
export default {
  layout: Layout,
}
</script>

<script setup>
import { Link, useForm } from '@inertiajs/vue3';

/* fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faAngleLeft, faReceipt } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck, faCircleXmark, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
library.add(faAngleLeft,faReceipt,faCircleCheck,faCircleXmark,faPenToSquare);

const props = defineProps({
  order: {
    type: Object,
    requird: true,
  },
});

const paymentReferenceForm = useForm({
  payment_reference: '',
});

const finishedForm = useForm({
  finished: !props.order.finished,
});

function submitPaymentReference(){
  paymentReferenceForm.put(`/order/${props.order.id}`, {
    onSuccess: () => paymentReferenceForm.reset(),
  });
}
</script>

<template>

  <header class="flex items-center my-2 text-3xl">
    <Link href="/order">
      <FontAwesomeIcon :icon="['fas', 'angle-left']" />
    </Link>
    <h1 class="mx-4">Pedido número #{{ order.id }}</h1>

    <small v-if="order.finished" class="text-green-500">Terminado!</small>
    <small v-else class="text-red-500">Pendiente!</small>
    
  </header>

  <div class="flex items-center gap-3 p-4">

    <form @submit.prevent="submitPaymentReference" class="flex items-center border p-1">
      <input type="text" class="me-2" v-model="paymentReferenceForm.payment_reference" required>
      <p v-if="paymentReferenceForm.errors.payment_reference" class="mx-2">{{ paymentReferenceForm.errors.payment_reference }}</p>

      <button :disabled="paymentReferenceForm.processing" type="submit" class="flex-1 py-1 px-3 bg-blue-400 rounded text-white font-bold">
        <FontAwesomeIcon class="me-2" :icon="['fas', 'receipt']" />
        Ingresar referencia del pago
      </button>
    </form>

    <button :disabled="finishedForm.processing" @click="finishedForm.put(`/order/${props.order.id}`)" class="py-1 px-3 bg-blue-400 rounded text-white font-bold">
      <template v-if="order.finished">
        <FontAwesomeIcon class="me-2" :icon="['far', 'circle-xmark']" />
        Marcar como pendiente
      </template>
      <template v-else>
        <FontAwesomeIcon class="me-2" :icon="['far', 'circle-check']" />
        Marcar como finalizado
      </template>
    </button>
      
  </div>

  <article class="my-7 max-w-2xl mx-auto space-y-12">

    <section>
      <h2 class="text-4xl text-primary mb-5">General</h2>

      <ul class="space-y-2">
        <li>
          <span>Artículo:</span>
          <span>
            <span class="me-2">{{ order.item.title }}</span>
            <small class="me-4">({{ order.item.type.name }} años)</small>
            <Link :href="`/item/${order.item.id}/edit`" class="text-sm text-white font-bold px-2 py-1 rounded bg-blue-300">Ver</Link>
          </span>
        </li>
        <li>
          <span>Prioridad:</span>
          <span v-if="order.high_priority" class="text-green-500 font-bold">Si</span>
          <span v-else class="text-red-500 font-bold">No</span>
        </li>
        <li>
          <span>Ubicación en mapa:</span>
          <span v-if="order.map_ubication" class="text-green-500 font-bold">Si</span>
          <span v-else class="text-red-500 font-bold">No</span>
        </li>
        <li>
          <span>Confirmación por whatsapp:</span>
          <span v-if="order.whatsapp_confirmation" class="text-green-500 font-bold">Si</span>
          <span v-else class="text-red-500 font-bold">No</span>
        </li>
        <li>
          <span>Precio final:</span>
          <span>${{ order.price }}</span>
        </li>
        <li>
          <span>Fecha:</span>
          <span>{{ (new Date(order.created_at)).toLocaleString() }}</span>
        </li>
        <li>
          <span>Método de pago:</span>
          <span>{{ order.payment_method }}</span>
        </li>
        <li>
          <span>Referencia del pago:</span>
          <span>
            {{ order.payment_reference }}
          </span>
        </li>
        <li>
          <span>Finalizado:</span>
          <span class="text-xl">
            <FontAwesomeIcon v-if="order.finished" :icon="['far', 'circle-check']" class="text-green-500" />
            <FontAwesomeIcon v-else :icon="['far', 'circle-xmark']" class="text-red-500" />
          </span>
        </li>
      </ul>
      
    </section>

    <section>
      <h2 class="text-4xl text-primary mb-5">Evento</h2>

      <ul class="space-y-2">
        <li>
          <span>Nombre:</span>
          <span>{{ order.birthday_name }}</span> <small>({{ order.birthday_age }} años)</small>
        </li>
        <li>
          <span>Dirección principal:</span>
          <span>{{ order.birthday_main_address }}</span>
        </li>
        <li>
          <span>Dirección secundaria:</span>
          <span>{{ order.birthday_secondary_address }}</span>
        </li>
        <li>
          <span>Fecha:</span>
          <span>{{ (new Date(order.birthday_date)).toLocaleDateString() }}</span>
        </li>
        <li>
          <span>Horario:</span>
          <span>Desde {{ order.birthday_from_time.slice(0,5) }} hasta {{ order.birthday_to_time.slice(0,5) }}</span>
        </li>
        <li>
          <span>Observación:</span>
          <span>{{ order.observation }}</span>
        </li>
      </ul>
      
    </section>

    <section>
      <h2 class="text-4xl text-primary mb-5">Contacto</h2>

      <ul class="space-y-2">
        <li>
          <span>Nombre:</span>
          <span>{{ order.contact_name }}</span>
        </li>
        <li>
          <span>Teléfono:</span>
          <span>{{ order.contact_number }}</span>
        </li>
      </ul>
      
    </section>

  </article>

</template>

<style scoped>
ul li {
  padding: 0.25rem;
  display: flex;
  align-items: center;
  border-bottom: dashed 0.5px rgb(196, 196, 196);
}
ul li > span:first-child {
  flex: 1;
}
</style>