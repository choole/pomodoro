<template>
    <div class="card">
        <Splitter style="height: 100%">
            <SplitterPanel class="flex flex-col items-center justify-center"> 
                <div>Pomodoro Timer</div>
                <!-- <ComponentName/> -->
                  <!-- Toolbar -->
                  <Toolbar class="mb-4">
                    <template #center>
                        <div class="flex justify-center space-x-4 mb-6">
                        <Button label="Pomodoro" class="text-white font-semibold rounded-full px-6 py-2 border-none shadow-none" style="background-color: #E3A3A3;" />
                        <Button label="Short Break" class="text-white font-semibold rounded-full px-6 py-2 border-none shadow-none" style="background-color: #E3A3A3;" />
                        <Button label="Long Break" class="text-white font-semibold rounded-full px-6 py-2 border-none shadow-none" style="background-color: #E3A3A3;" />
                        </div>
                    </template>
                  </Toolbar>

                  <h5 class="mt-6 text-lg font-semibold">Image/GIF</h5>
                    <div class="flex justify-center my-4">
                        <div class="w-60 h-60 bg-gray-200 rounded-xl"></div>
                        <!--
                        <img
                            src=""
                            alt="Motivational Pomodoro GIF"
                            class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain rounded-xl"
                        />
                        -->
                    </div>


                
            
            </SplitterPanel>
            <SplitterPanel class="flex flex-col justify-center">
                <div>Tasks</div>
                <TaskList/>
            </SplitterPanel>
        </Splitter>
    </div>
</template>


  <script setup lang="ts">
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Toolbar from 'primevue/toolbar';
import TaskList from './TaskList.vue';
  </script>
