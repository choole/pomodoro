<template>
    <div class="flex flex-grow items-center justify-center">
    <Checkbox v-model="task" inputId="task1" name="task" :value="label" class="mr-7"/>
    <label for="task1">{{label}}</label>
    <Button icon="pi pi-trash" severity="danger" raised aria-label="Delete" class="ml-auto"/>
    </div>
</template>

<script setup>
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
const task = ref('');
defineProps({
  label: String
})
</script>
