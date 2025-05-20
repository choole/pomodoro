<template>
    <div class="card">
        <Splitter style="height: 100%">
            <SplitterPanel class="flex items-center justify-center"> 
                Panel 1
                <!-- <ComponentName/> -->
            </SplitterPanel>
            <SplitterPanel class="flex items-center justify-center">
                Tasks
                <TaskCard/>
            </SplitterPanel>
        </Splitter>
    </div>
</template>


  <script setup lang="ts">
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import TaskCard from './TaskCard.vue';
// import ComponentName from './ComponentName.vue';
  </script>
  
  
