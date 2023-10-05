<script setup>
import { useForm } from '@inertiajs/vue3'

import Input from '@/Components/Input.vue';
import Label from '@/Components/Label.vue';
import Button from '@/Components/Button.vue';
import Alert from '@/Components/Alert.vue';

const form = useForm({
  email: '',
  password: '',
})
</script>

<template>
    <div class="flex items-center justify-center h-screen">
        <div class="max-w-[600px] border border-primary rounded-xl shadow-lg">
            <form @submit.prevent="form.post('/login')" class="p-10 grid gap-4">
                <div>
                    <Label id="email">Email</Label>
                    <Input for="email" v-model="form.email" type="text" required />
                </div>
                <div>
                    <Label id="password">Contraseña</Label>
                    <Input for="password" v-model="form.password" type="password" required />
                </div>

                <Alert v-if="form.errors.email" type="danger">{{ form.errors.email }}</Alert>
                <Alert v-if="form.errors.password" type="danger">{{ form.errors.password }}</Alert>

                <Button :loading="form.processing" type="submit">Ingresar</Button>
            </form>
        </div>
    </div>
</template>

<style scoped></style>