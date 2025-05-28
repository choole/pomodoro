<template>        
 <div class="card flex justify-center">
        <InputOtp v-model="value" :length="4" style="gap: 0" class="text-2xl" variant="filled">
					<template #default="{ attrs, events, index }">
            <input type="text" v-bind="attrs" v-on="events" class="custom-otp-input text-gray-400" />
            <div v-if="index === 2" class="mx-2 text-gray-400">:</div>
        </template>
		    </InputOtp>

    </div>
</template>

<script setup>
	import { ref } from 'vue';
	const value = ref(null);
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
