<template>
<!-- Make list that dynamically creates TaskCards -->
    <div class="card flex justify-center pt-30">
         <ul class="w-full items-center border rounded-md divide-y divide-gray-200">
              <li
                v-for="item in tasks"
                :key="item.code"
                :class="[
                    'p-3 cursor-pointer hover:bg-gray-700',
                ]"
                @mouseover="showDelete(item.code)"
                @mouseleave="hideDelete()"
              >
                <div class="flex items-center">
                    <TaskCard 
                        :task="item"
                        :hide="hoveredItem === item.code ? 'visible': 'hidden' "
                        @delete="removeTask(item.code)"
                        @update-task="handleUpdateTask(item)"
                    />
                </div>
            </li>
        </ul>
    </div>
<!-- Add Button -->
    <div>
        <Button icon="pi pi-plus" label="Click to add a task here" severity="primary" raised variant="outlined" aria-label="Add here the task that you will focus on" class="w-full mt-5" @click="addTask" />
    </div>
</template>

<script setup>

import { ref } from "vue";
import TaskCard from "./TaskCard.vue";

const hoveredItem = ref(null);
const tasks=ref([]);


function addTask() {
    tasks.value.push(
        {
            name: '',
            code: Date.now()
        }
    );
}
function removeTask(taskCode) {
  const index = tasks.value.findIndex(t => t.code === taskCode)
  if (index !== -1) {
    tasks.value.splice(index, 1)
  }
}
function handleUpdateTask(task) {
  const index = tasks.value.findIndex(t => t.code === task.code)
  tasks.value.splice(index,1,task);
}

function showDelete(itemCode) {
    hoveredItem.value = itemCode;
}
function hideDelete() {
    hoveredItem.value = null;
}

</script>
