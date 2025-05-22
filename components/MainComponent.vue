<template>
    <div class="card">
        <Splitter style="height: 100%">
            <SplitterPanel class="flex flex-col items-center justify-center"> 
                <div class="pb-10">INSERT LOGO HERE</div>
                <!-- <ComponentName/> -->
                  <!-- Toolbar -->
                  <Toolbar class="mb-4">
                    <template #center>
                        <div class="flex justify-center space-x-4">
                        <Button label="Pomodoro" class="text-white font-semibold rounded-full px-6 py-2 border-none shadow-none" style="background-color: #E3A3A3;" />
                        <Button label="Short Break" class="text-white font-semibold rounded-full px-6 py-2 border-none shadow-none" style="background-color: #E3A3A3;" />
                        <Button label="Long Break" class="text-white font-semibold rounded-full px-6 py-2 border-none shadow-none" style="background-color: #E3A3A3;" />
                        </div>
                    </template>
                  </Toolbar>
                <div class="flex justify-center my-4">
                    <img src="../assets/cat-reading.gif" alt="Image" class="w-150" >
                </div>
            </SplitterPanel>
            <SplitterPanel class="flex flex-col justify-center">
                <div class="mt-10 text-3xl text-center">Tasks</div>
                <TaskList/>
            </SplitterPanel>
        </Splitter>
    </div>
</template>


  <script setup lang="ts">
import Button from 'primevue/button';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Toolbar from 'primevue/toolbar';
import TaskList from './TaskList.vue';
  </script>
