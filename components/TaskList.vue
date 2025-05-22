<template>
<!-- Make list that dynamically creates TaskCards -->
    <div class="card flex justify-center pt-30">
         <ul class="w-full items-center border rounded-md divide-y divide-gray-200">
              <li
                v-for="item in countries"
                :key="item.code"
                :class="[
                    'p-3 cursor-pointer hover:bg-gray-700',
                ]"
              >
                <div class="flex items-center">
                    <TaskCard :label="item.name"/>
                </div>
            </li>
        </ul>
    </div>
<!-- Add Button -->
</template>

<script setup>

import { ref } from "vue";
import Listbox from 'primevue/listbox';
import TaskCard from "./TaskCard.vue";

const selectedItem = ref();
const countries = ref([
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
]);
</script>
