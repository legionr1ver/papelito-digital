<script>
import Layout from './../../Layouts/AuthenticatedLayout.vue';
export default {
  layout: Layout,
}
</script>

<script setup>
import { Link, useForm } from '@inertiajs/vue3';
import { ref } from 'vue';

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

const receiptImageInput = ref(null);
const transferPaymentForm = useForm({
  reference: '',
  receipt_image: null,
});

function submitTransferPayment(){
  transferPaymentForm.post(`/transfer-payment/${props.order.id}`, {
    onSuccess: () => {
      transferPaymentForm.reset();
      receiptImageInput.value.value = '';
    },
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

    <form v-show="props.order.payment_method === 'transferencia'" @submit.prevent="submitTransferPayment" class="flex-1 flex items-center border p-2 gap-2">

      <p v-if="order.payment?.receipt_image" class="text-blue-500">Ya hay un comprobante cargado.</p>

      <input class="flex-1 p-1" placeholder="Ej: Número de comprobante" type="text" v-model="transferPaymentForm.reference">
      
      <input class="flex-1" ref="receiptImageInput" @input="transferPaymentForm.receipt_image = $event.target.files[0]" type="file" accept="image/*">

      <button :disabled="transferPaymentForm.processing" type="submit" class="flex-1 py-1 px-3 bg-blue-400 rounded text-white font-bold">
        <FontAwesomeIcon class="me-2" :icon="['fas', 'receipt']" />
        Ingresar pago
      </button>
    </form>

    <Link as="button" :href="`/order/${props.order.id}`" method="put" :data="{finished: !props.order.finished}" class="py-1 px-3 bg-blue-400 rounded text-white font-bold">
      <template v-if="order.finished">
        <FontAwesomeIcon class="me-2" :icon="['far', 'circle-xmark']" />
        Marcar como pendiente
      </template>
      <template v-else>
        <FontAwesomeIcon class="me-2" :icon="['far', 'circle-check']" />
        Marcar como finalizado
      </template>
    </Link>
      
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
          <span class="uppercase">{{ order.currency }} {{ order.price }}</span>
        </li>
        <li>
          <span>Fecha:</span>
          <span>{{ (new Date(order.created_at)).toLocaleString() }}</span>
        </li>
        <li>
          <span>Método de pago:</span>
          <span class="uppercase">{{ order.payment_method }}</span>
        </li>
        <li>
          <span>Pagado:</span>
          <span class="text-xl flex items-center">
            <a v-if="order.payment?.receipt_image" :href="`/transfer-payment/${props.order.id}/view`" target="_blank" class="text-xs text-primary underline me-2">Ver comprobante</a>
            <FontAwesomeIcon v-if="order.payment?.is_paid" :icon="['far', 'circle-check']" class="text-green-500" />
            <FontAwesomeIcon v-else :icon="['far', 'circle-xmark']" class="text-red-500" />
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