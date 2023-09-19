<script>
import Layout from './../../Layouts/AuthenticatedLayout.vue';

export default {
  layout: Layout,
}
</script>

<script setup>
import { computed } from 'vue';
import { useForm } from '@inertiajs/vue3';
import Label from '@/Components/Label.vue';
import Input from '@/Components/Input.vue';
import Button from '@/Components/Button.vue';
import Alert from '@/Components/Alert.vue';

const props = defineProps({
  tags: {
    type: Array,
    required: true,
  },
});

const form = useForm({
  title: null,
  description: null,
  price: null,
  tagInput: null,
  tags: [],
  source: null,
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
    <h1 class="text-3xl">Nueva Invitacion</h1>

    <Alert v-if="$page.props.flash.message" type="success">{{ $page.props.flash.message }}</Alert>

    <form @submit.prevent="form.post('/invitations')" class="py-5 space-y-5">
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
        <Input v-model="form.tagInput" id="tags" type="text" list="tagsDatalist" @change="selectTag" />
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
        <Label for="source">Imagen o Video de la invitacion</Label>
        <input @input="form.source = $event.target.files[0]" class="block" id="source" type="file" accept="video/*,image/*" required >
        <Alert v-if="form.errors.source" type="danger">{{ form.errors.source }}</Alert>
      </div>
      <div>
        <Label for="thumbnail">Thumbnail o carátula (para el video)</Label>
        <input @input="form.thumbnail = $event.target.files[0]" class="block" id="thumbnail" type="file" accept="image/*" >
        <Alert v-if="form.errors.thumbnail" type="danger">{{ form.errors.thumbnail }}</Alert>
      </div>

      <Button :disabled="form.processing">
        Guardar
      </Button>
    </form>
  </div>
</template>

<style scoped></style>