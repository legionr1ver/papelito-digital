<script>
import Layout from './../../Layouts/AuthenticatedLayout.vue';

export default {
  layout: Layout,
}
</script>

<script setup>
import { ref, computed } from 'vue';
import { useForm } from '@inertiajs/vue3';
import Label from '@/Components/Label.vue';
import Input from '@/Components/Input.vue';
import Button from '@/Components/Button.vue';
import Alert from '@/Components/Alert.vue';

const props = defineProps({
  invitation: {
    type: Object,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
});

const form = useForm({
  _method: 'put',
  title: props.invitation.title,
  description: props.invitation.description,
  price: props.invitation.price,
  tagInput: null,
  tags: props.invitation.tags.map(t => t.label),
  thumbnail: null,
});

const unselectedTags = computed(() => {
  return props.tags.filter(t => !form.tags.includes(t.label));
});

function selectTag(){
  if( !form.tags.includes(form.tagInput) ){
    form.tags.push(form.tagInput);
  }
  form.tagInput = '';
}

function deselectTag(tag){
  const index = form.tags.indexOf(tag);
  form.tags.splice(index, 1);
}
</script>

<template>
  <div>
    <h1 class="text-3xl">Editar Invitacion</h1>

    <Alert v-if="$page.props.flash.message" type="success">{{ $page.props.flash.message }}</Alert>

    <div class="max-w-[400px]">
      <img class="max-w-full" v-if="invitation.type_id === 1" :src="invitation.source_url" :alt="`Invitation ${invitation.title}`">
      <video class="max-w-full" v-if="invitation.type_id === 2" :src="invitation.source_url" controls>
        No puede reproducir la invitation "{{ invitation.title }}"
      </video>
    </div>

    <form @submit.prevent="form.post(`/invitations/${invitation.id}`)" class="py-5 space-y-5">
      <div>
        <Label for="title">Titulo</Label>
        <Input v-model="form.title" id="title" type="text" required />
        <Alert v-if="form.errors.title" type="danger">{{ form.errors.title }}</Alert>
      </div>
      <div>
        <Label for="description">Descripcion</Label>
        <Input v-model="form.description" id="description" type="text" />
        <Alert v-if="form.errors.description" type="danger">{{ form.errors.description }}</Alert>
      </div>
      <div>
        <Label for="price">Precio</Label>
        <Input v-model="form.price" id="price" type="number" step="1" min="1" required />
        <Alert v-if="form.errors.price" type="danger">{{ form.errors.price }}</Alert>
      </div>
      <div>
        <Label for="tags">Tags</Label>
        <Input @change="selectTag" @keydown.enter.prevent="selectTag" v-model="form.tagInput" id="tags" ref="tagInput" type="text" list="tagsDatalist" />
        <datalist id="tagsDatalist">
          <option v-for="tag in unselectedTags">{{ tag.label }}</option>
        </datalist>
        <div class="p-2">
          <p v-if="form.tags.length === 0">No se seleccionaron tags</p>
          <ul v-else class="flex">
            <li v-for="tag in form.tags" class="bg-blue-400 text-white text-xs rounded-full py-1 px-2 mx-1 hover:cursor-pointer hover:outline" @click="deselectTag(tag)">
              <span class="me-1">{{ tag }}</span>
            </li>
          </ul>
        </div>
        <Alert v-if="form.errors.tags" type="danger">{{ form.errors.tags }}</Alert>
      </div>
      <div>
        <Label for="thumbnail">Thumbnail o carátula (para el video)</Label>
        <div class="max-w-[400px] m-7 font-bold text-xl">
          <img v-if="invitation.thumbnail_url" :src="invitation.thumbnail_url">
          <p v-else>Sin carátula.</p>
        </div>
        <input @input="form.thumbnail = $event.target.files[0]" class="block" id="thumbnail" type="file" accept="image/*" >
        <Alert v-if="form.errors.thumbnail" type="danger">{{ form.errors.thumbnail }}</Alert>
      </div>

      <div class="flex">
        <Button :loading="form.processing" :disabled="form.processing" class="me-5">
          Guardar
        </Button>

        <Button type="button" @click="form.cancel()" :disabled="!form.processing">
          Cancelar
        </Button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>