<script setup>
import { ref, onMounted } from 'vue';
import Button from '@/Components/Button.vue';

const props = defineProps([
    'form',
    'item',
]);

const emits = defineEmits([
    'order-created',
]);

const possibleStatus = {
    LOADING: Symbol('loading'),
    ERROR: Symbol('error'),
};
const status = ref(possibleStatus.LOADING);

async function createOrder(){
    try {
        status.value = possibleStatus.LOADING;

        const response = await axios.post('/order', {
            item_id: props.item.id,
            ...props.form
        });
        emits('order-created', response.data);

    } catch (error) {
        status.value = possibleStatus.ERROR;
    }
}

onMounted(createOrder);
</script>

<template>
    <div>

        <div v-if="status === possibleStatus.LOADING" class="flex justify-center items-center">
            <svg class="animate-spin -ml-1 mr-3 h-14 w-14 text-primary my-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </div>

        <div v-if="status === possibleStatus.ERROR" class="flex justify-center items-center">
            <div>
                <img class="max-w-[200px] mx-auto" src="/assets/images/stickers/ocurrio-un-error.webp" alt="Ocurrio un error">
                <div>
                    <Button @click="createOrder" class="m-5">Volver a intentar</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>