<script>
import Layout from './../../Layouts/GuestLayout.vue';

export default {
    layout: Layout,
}
</script>

<script setup>
import { ref, reactive, computed } from 'vue';
import { Link } from '@inertiajs/vue3';
import Step1Information from './Partials/Step1Information.vue';
import Step2PayMentMethodSelection from './Partials/Step2PayMentMethodSelection.vue';
import Step3Confirmation from './Partials/Step3Confirmation.vue';
import Step4OrderCreation from './Partials/Step4OrderCreation.vue';
import Step5Payment from './Partials/Step5Payment.vue';

/* fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
library.add(faChevronLeft, faChevronRight);

const props = defineProps({
    previous_url: {
        type: String,
        required: true,
    },
    item: {
        type: Object,
        required: true,
    },
    mercadopago_public_key: {
        type: String,
        required: true,
    },
});

const selected = ref(props.item.files[0].id);
const page_step = ref(1);
const order = ref(null);
const form = reactive({
    birthday_name: 'Mauro',
    birthday_age: 34,
    birthday_main_address: 'Tapia 441',
    birthday_secondary_address: 'Belgrano',
    birthday_date: '1989-12-05',
    birthday_from_time: '06:00',
    birthday_to_time: '23:00',
    observation: 'No vengan',
    contact_name: 'Mauro (si es para mi)',
    contact_number: '1150404755',
    high_priority: true,
    map_ubication: false,
    whatsapp_confirmation: false,
    payment_method: '',
});
</script>

<template>
    <div class="max-w-[1200px] mx-auto mb-16 grid md:grid-cols-2">

        <div class="grid grid-cols-[100px_1fr] gap-3">

            <!-- Minatures -->
            <ul class="space-y-4">

                <li v-for="file in item.files" class="border border-primary rounded hover:outline cursor-pointer" @mouseover="selected = file.id">
                    <img v-if="file.mime.startsWith('image/')" class="max-w-full" :src="`/file/${file.id}`" :alt="`Imagen de l artículo ${item.title}`">
                    <video v-if="file.mime.startsWith('video/')" class="max-w-full" :src="`/file/${file.id}`">
                        No se puede reproducir video
                    </video>
                </li>

            </ul>

            <!-- Viewer -->
            <ul>
                <li v-for="file in item.files">
                    <div v-show="selected === file.id" class="flex items-center justify-center">
                        <img v-if="file.mime.startsWith('image/')" :src="`/file/${file.id}`" :alt="`Imagen de l artículo ${item.title}`">
                        <video v-if="file.mime.startsWith('video/')" :src="`/file/${file.id}`" controls>
                            No se puede reproducir video
                        </video>
                    </div>
                </li>
            </ul>

        </div>
        <div class="p-5">
            <header class="pb-10 grid">
                <Link :href="previous_url" class="text-primary">Volver a galeria</Link>
                <h2 class="text-5xl text-primary font-serif">{{ item.title }}</h2>
            </header>
            <div>
                <Step1Information v-if="page_step === 1"
                    :item="props.item"
                    v-model:page_step="page_step"
                    v-model:birthday_name="form.birthday_name"
                    v-model:birthday_age="form.birthday_age"
                    v-model:birthday_main_address="form.birthday_main_address"
                    v-model:birthday_secondary_address="form.birthday_secondary_address"
                    v-model:birthday_date="form.birthday_date"
                    v-model:birthday_from_time="form.birthday_from_time"
                    v-model:birthday_to_time="form.birthday_to_time"
                    v-model:observation="form.observation"
                    v-model:contact_name="form.contact_name"
                    v-model:contact_number="form.contact_number"
                    v-model:high_priority="form.high_priority"
                    v-model:map_ubication="form.map_ubication"
                    v-model:whatsapp_confirmation="form.whatsapp_confirmation" />

                <Step2PayMentMethodSelection v-if="page_step === 2"
                    v-model:page_step="page_step"
                    v-model:payment_method="form.payment_method"/>

                <Step3Confirmation v-if="page_step === 3"
                    v-model:page_step="page_step"
                    :item="item"
                    :form="form"/>

                <Step4OrderCreation v-if="page_step === 4"
                    :form="form"
                    :item="item"
                    @order-created="(newOrder) => {order = newOrder; page_step++;}" />

                <Step5Payment v-if="page_step === 5"
                    :order="order"
                    :mercadopago_public_key="mercadopago_public_key" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>