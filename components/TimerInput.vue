<template>
    <Toast />
    <div class="card flex justify-center">
        <InputOtp v-model="value" :readonly="isReadOnly" :default-value="time" :model-value="value" :length="4" style="gap: 0" class="text-2xl" variant="filled" integer-only @change="emit('update-value',value)">
            <template #default="{ attrs, events, index }">
                <input v-bind="attrs" :readOnly="isReadOnly" type="text" class="custom-otp-input text-gray-400" v-on="events">
                <div v-if="index === 2" class="mx-2 text-gray-400">:</div>
            </template>
        </InputOtp>
    </div>
</template>

<script setup>
    import { ref,onMounted, onUnmounted } from 'vue';
    import { eventBus } from '@/utils/event-bus'
    import { useToast } from 'primevue/usetoast';

    const props = defineProps({
        time: String
    });

    const toast = useToast();
    const isReadOnly = ref(false);
    const value = ref(props.time);

    const emit = defineEmits(["update-value","finish"]);
    const timerStore = useTimerStore();

    function updateTimer(payload) {
      isReadOnly.value=true;
      value.value=payload.time
      // maybe show toast, switch tab, etc.
    }
    function cleanUp() {
      isReadOnly.value=false;
      toast.add({ severity: 'success', summary: 'Finished', detail: 'Timer is finished. Switching to next section...', life: 2500 });
      emit('finish');
      //TODO: Start the timer on next tab
      //TODO: Make buttons start timer from current active Tab
    }

    onMounted(() => {
      eventBus.on('time', updateTimer)
      eventBus.on('timer:done', cleanUp)
    })
    onUnmounted(() => {
      eventBus.off('time', updateTimer)
      eventBus.off('timer:done', cleanUp)
    })


</script>

<style scoped>
.custom-otp-input {
    width: 40px;
    font-size: 36px;
    border: 0 none;
    appearance: none;
    text-align: center;
    transition: all 0.2s;
    background: transparent;
    border-bottom: 2px solid var(--p-inputtext-border-color);
}

.custom-otp-input:focus {
    outline: 0 none;
    border-bottom-color: var(--p-primary-color);
}
</style>
