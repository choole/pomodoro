<template>
   <Toolbar class="mb-4">
        <template #center>
             <div class="flex justify-center space-x-4">
                <Button label="Pomodoro" class="text-white font-semibold rounded-full px-6 py-2 border-none shadow-none" style="background-color: #E3A3A3;" />
                <Button label="Short Break" class="text-white font-semibold rounded-full px-6 py-2 border-none shadow-none" style="background-color: #E3A3A3;" />
                <Button label="Long Break" class="text-white font-semibold rounded-full px-6 py-2 border-none shadow-none" style="background-color: #E3A3A3;" />
            </div>
        </template>
     </Toolbar>
</template>

<script setup>
	import Button from 'primevue/button';
	import Toolbar from 'primevue/toolbar';
</script>