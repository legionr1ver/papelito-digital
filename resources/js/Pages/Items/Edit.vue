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
  item: {
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
  title: props.item.title,
  canva_url: props.item.canva_url,
  description: props.item.description,
  ars_price: props.item.ars_price,
  usd_price: props.item.usd_price,
  tagInput: null,
  tags: props.item.tags.map(t => t.label),
  thumbnail: null,
  files: null,
  filesDelete: [],
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

    <form @submit.prevent="form.post(`/item/${item.id}`)" class="py-5 space-y-5">
      <div>
        <Label for="title">Titulo</Label>
        <Input v-model="form.title" id="title" type="text" required />
        <Alert v-if="form.errors.title" type="danger">{{ form.errors.title }}</Alert>
      </div>
      <div>
        <Label for="canva-url">Link Canva</Label>
        <Input v-model="form.canva_url" id="canva-url" type="url" />
        <Alert v-if="form.errors.canva_url" type="danger">{{ form.errors.canva_url }}</Alert>
      </div>
      <div>
        <Label for="description">Descripcion</Label>
        <Input v-model="form.description" id="description" type="text" />
        <Alert v-if="form.errors.description" type="danger">{{ form.errors.description }}</Alert>
      </div>
      <div>
        <Label for="ars-price">Precio en pesos</Label>
        <Input v-model="form.ars_price" id="ars-price" type="number" step="1" min="1" required />
        <Alert v-if="form.errors.ars_price" type="danger">{{ form.errors.ars_price }}</Alert>
      </div>
      <div>
        <Label for="usd-price">Precio en dólares</Label>
        <Input v-model="form.usd_price" id="usd-price" type="number" step="1" min="1" required />
        <Alert v-if="form.errors.usd_price" type="danger">{{ form.errors.usd_price }}</Alert>
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
        <img class="max-w-[400px] my-1" :src="`/item/${item.id}/thumbnail`" :alt="`Thumbnail del artículo ${item.title}`">
        <Label for="thumbnail" class="my-1">Miñatura del artículo</Label>
        <input @input="form.thumbnail = $event.target.files[0]" class="block my-1" id="thumbnail" type="file" accept="image/*" >
        <Alert v-if="form.errors.thumbnail" type="danger">{{ form.errors.thumbnail }}</Alert>
      </div>

      <div>
        <ul class="grid grid-cols-6 gap-3">
          <li v-for="file in item.files">

            <img v-if="file.mime.startsWith('image/')" class="block max-w-full" :src="`/file/${file.id}`" :alt="`Achivo adjunto del artículo ${item.title}`">

            <video v-if="file.mime.startsWith('video/')" class="block max-w-full" :src="`/file/${file.id}`" controls>
              No se pudo reproducir el video.
            </video>

            <div class="text-center p-2">
              <input :id="`eliminar-${file.id}`" v-model="form.filesDelete" :value="file.id" type="checkbox" class="mx-1">
              <Label :for="`eliminar-${file.id}`">Eliminar</Label>
            </div>
          </li>
        </ul>
        <div>
          <Label for="files" class="my-1">Imagenes y videos</Label>
          <input @input="form.files = $event.target.files" class="block my-1" id="files" type="file" accept="image/*,video/*" multiple >
          <Alert v-if="form.errors.files" type="danger">{{ form.errors.files }}</Alert>
        </div>
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