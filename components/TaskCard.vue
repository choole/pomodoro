<template>
    <div class="flex flex-grow items-center justify-center">
      <Checkbox :input-id="`${task.code}`" :name="task.name" :value="task.name" class="mr-7"/>
     <Inplace>
            <template #display>
                {{ task.name || 'Click to Edit' }}
            </template>
            <template #content="{ closeCallback }">
              <div v-focustrap>
                <span class="inline-flex items-center gap-2">
                    <InputText v-model="task.name" autofocus @change="taskStore.handleUpdateTaks({ name: task.name, code: task.code, sessions: task.sessions, completedSessions: task.completedSessions })" @keydown.enter="closeCallback"/>
                    <Button icon="pi pi-times" text severity="danger" @click="closeCallback" />
                </span>
              </div>
            </template>
        </Inplace>
      <!-- <label :for="task.code">{{task.name}}</label> -->
    <div class="flex flex-row ml-auto">
       <Inplace>
              <template #display>
          {{ task.completedSessions+"/"+task.sessions || 'Click to Edit' }}
              </template>
              <template #content="{ closeCallback }">
                <div v-focustrap class="inline-flex items-center gap-2">
                  <!-- <span class="inline-flex items-center gap-2"> -->
                      <IftaLabel>
                        <InputNumber v-model="task.sessions" input-id="sessions" :min="0" :max="100" fluid @change="taskStore.updateSessions({ name: task.name, code: task.code, sessions: task.sessions, completedSessions: task.completedSessions })"  @keydown.enter="closeCallback"/>
                        <label for="sessions">Sessions to Complete</label>
                      </IftaLabel>
                      <Button icon="pi pi-times" text severity="danger" @click="closeCallback" />
                  <!-- </span> -->
                </div>
              </template>
          </Inplace>
       <Button icon="pi pi-trash" severity="danger" raised aria-label="Delete" :style="{ visibility: hide }" @click="taskStore.removeTask(task.code)" />
    </div>
    </div>
</template>

<script setup>
import Checkbox from 'primevue/checkbox';
import IftaLabel from 'primevue/iftalabel';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const taskStore = useTaskStore();

defineProps({
  task: Object,
  hide: String,
});
const emit = defineEmits(['delete','update-task']);
</script>
