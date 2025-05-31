<template>
	<div class="flex justify-center my-4 w-150 h-100">
		<img :src="props.image" alt="Image">
	</div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true
  },
  imgClass: {
    type: [String, Array],  
    default: ''
  }
});
</script>
