<template>
  <div class="card">
    <Splitter style="height: 100vh">
      
      <SplitterPanel>
       <div class="flex justify-end w-full px-4 mt-4">
          <Button 
            icon="pi pi-external-link" 
            severity="secondary"
            variant="text" 
            rounded 
            aria-label="Fullscreen"
          />
        </div>

        <div class="flex flex-col items-center justify-center">
          <!-- <ComponentName/> -->
          <HeaderTabs />
          <!-- <TimerInput/> -->
          <AdjustButtons />
        </div>
      </SplitterPanel>

      <SplitterPanel>
		<div class="flex justify-end w-full px-4 mt-4">
          <Button 
            icon="pi pi-cog" 
            severity="secondary"
            variant="text" 
            rounded 
            aria-label="Settings"
          />
        </div>

	  <div class="flex flex-col justify-center">
          <div class="mt-10 text-3xl text-center">Tasks</div>
          <TaskList />
        </div>
      </SplitterPanel>

    </Splitter>
  </div>
</template>

<script setup lang="ts">
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import HeaderTabs from './HeaderTabs.vue';
import TaskList from './TaskList.vue';
import AdjustButtons from './AdjustButtons.vue';
import Button from 'primevue/button';
</script>
