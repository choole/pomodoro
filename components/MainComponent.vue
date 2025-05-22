<template>
    <div class="card">
        <Splitter style="height: 100%">
            <SplitterPanel class="flex flex-col items-center justify-center"> 
                <div>Panel 1</div>
                <!-- <ComponentName/> -->
            </SplitterPanel>
            <SplitterPanel class="flex flex-col justify-center">
                <div>Tasks</div>
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
