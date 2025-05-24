<template>
    <div class="flex flex-grow items-center justify-center">
      <Checkbox :input-id="task.code" :name="task.name" :value="task.name" class="mr-7"/>
     <Inplace>
            <template #display>
                {{ task.name || 'Click to Edit' }}
            </template>
            <template #content="{ closeCallback }">
                <span class="inline-flex items-center gap-2">
                    <InputText v-model="task.name" autofocus @change="update"/>
                    <Button icon="pi pi-times" text severity="danger" @click="closeCallback" />
                </span>
            </template>
        </Inplace>
      <!-- <label :for="task.code">{{task.name}}</label> -->
    <Button icon="pi pi-trash" severity="danger" raised aria-label="Delete" class="ml-auto" :style="{ visibility: hide }" @click="emit('delete', task.code)" />
    </div>
</template>

<script setup>
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { defineProps, defineEmits } from 'vue'
defineProps({
  task: Object,
  hide: String,
});
const emit = defineEmits(['delete','update-task']);
function update(taskCode,taskName){
  const task = { name: taskName, code: taskCode };
  emit('update-task',task);
}
</script>
