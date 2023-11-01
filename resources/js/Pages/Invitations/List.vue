<script>
import Layout from './../../Layouts/AuthenticatedLayout.vue';

export default {
  layout: Layout,
}
</script>

<script setup>
import { Link } from '@inertiajs/vue3';
import Alert from '@/Components/Alert.vue';

/* fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPenToSquare, faCircleXmark } from '@fortawesome/free-regular-svg-icons';
library.add(faPenToSquare,faCircleXmark);

defineProps({
  paginatedInvitations: {
    type: Object,
    requird: true,
  },
});
</script>

<template>
    <h1 class="text-3xl">Invitaciones</h1>

    <Alert v-if="$page.props.flash.message" type="success">{{ $page.props.flash.message }}</Alert>

    <ul class="p-7 grid lg:grid-cols-5 gap-10">
      <li v-for="invitation in paginatedInvitations.data">
        <header class="flex items-center">
          <h2 class="flex-1 text-xl py-2 text-blue-400">{{ invitation.title }}</h2>
          <div class="flex-initial text-xl">
            <Link as="button" :href="`/invitations/${invitation.id}/edit`" class="p-1 hover:text-blue-400 transition-colors">
              <FontAwesomeIcon :icon="['far', 'pen-to-square']" />
            </Link>
            <Link as="button" :href="`/invitations/${invitation.id}`" method="delete" class="p-1 hover:text-blue-400 transition-colors" preserve-scroll>
              <FontAwesomeIcon :icon="['far', 'circle-xmark']" />
            </Link>
          </div>
        </header>
        <div class="py-1">
          <span>Descripcion: </span>
          <strong class="ms-2">{{ invitation.description }}</strong>
        </div>
        <div class="py-1">
          <span>Precio: </span>
          <strong class="ms-2">${{ invitation.price }}</strong>
        </div>
        <div class="py-1">
          <span class="me-2">Tags:</span>
          <strong v-if="invitation.tags.length === 0">Sin tags</strong>
          <div v-else class="flex">
            <span v-for="tag in invitation.tags" class="bg-blue-400 text-white text-xs rounded-full py-1 px-2 mx-1">
              {{ tag.label }}
            </span>
          </div>
        </div>
        <div class="py-1">
          <span>Tipo: </span>
          <strong class="ms-2">{{ invitation.type.name }}</strong>
        </div>
        <div class="py-1">
          <img class="max-w-full" v-if="invitation.type_id === 1" :src="invitation.source_url" :alt="`Invitation ${invitation.title}`">
          <video class="max-w-full" v-if="invitation.type_id === 2" :src="invitation.source_url" controls>
            No puede reproducir la invitation "{{ invitation.title }}"
          </video>
        </div>
      </li>
    </ul>
</template>

<style scoped></style>