<template>
  <div>
    <h1 class="mb-3">Pomodoro Timer</h1>

    <div class="p-inputgroup mb-3">
      <InputText v-model="task" placeholder="Enter a task" />
      <Button label="Start" @click="startTask" />
    </div>

    <Toast />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'

const task = ref('')
const toast = useToast()

function startTask() {
  if (task.value.trim() === '') {
    toast.add({
      severity: 'warn',
      summary: 'Validation',
      detail: 'Please enter a task.',
      life: 3000,
    })
    return
  }

  toast.add({
    severity: 'success',
    summary: 'Pomodoro Started',
    detail: `Working on: ${task.value}`,
    life: 3000,
  })

  task.value = ''
}
</script>

