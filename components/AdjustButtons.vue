<template>
   <Toolbar class="mb-4 mt-4"  >
      <template #center>
         <div class="flex justify-center space-x-4">
            <Button icon="pi pi-replay" severity="secondary" variant="text" raised rounded aria-label="Replay"/>
            <Button icon="pi pi-play-circle" severity="secondary" variant="text" raised rounded aria-label="Play" @click="timerStore.startTimer(tab)"/>
            <Button icon="pi pi-pause-circle" severity="secondary" variant="text" raised rounded aria-label="Pause " @click="timerStore.pauseTimer(tab)"/>
         </div>
      </template>
   </Toolbar>
</template>

<script setup>
import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
import 'primeicons/primeicons.css';
import { eventBus} from '@/utils/event-bus';

const tab=ref(0);

function setTab(payload){
   tab.value=payload.tab
}
onMounted(() => {
   eventBus.on('activeTab', setTab)
})
onUnmounted(() => {
   eventBus.off('activeTab', setTab)
})
const timerStore=useTimerStore();
</script>
