<template>
   <Toolbar class="mb-4 mt-4"  >
        <template #center>
             <div class="flex justify-center space-x-4">
                <Button icon="pi pi-replay" severity="secondary" variant="text" raised rounded aria-label="Replay" />
								<Button icon="pi pi-play-circle" severity="secondary" variant="text" raised rounded aria-label="Play" />
							  <Button icon="pi pi-step-forward" severity="secondary" variant="text" raised rounded aria-label="Step forward" />
            </div>
        </template>
     </Toolbar>
</template>

<script setup>
	import Button from 'primevue/button';
	import Toolbar from 'primevue/toolbar';
	import 'primeicons/primeicons.css'

</script>