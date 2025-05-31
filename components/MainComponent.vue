<template>
    <div class="card">
        <Splitter style="height: 100vh">
            <SplitterPanel class="flex flex-col items-center justify-center"> 
                <div class="pb-10">INSERT LOGO HERE</div>
                <!-- <ComponentName/> -->
						<HeaderTabs/>
						<!-- <TimerInput/> -->
						<AdjustButtons/>
            </SplitterPanel>
            <SplitterPanel class="flex flex-col justify-center">
                <div class="mt-10 text-3xl text-center">Tasks</div>
                <TaskList/>
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
  </script>
