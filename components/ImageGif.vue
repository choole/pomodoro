 <template>
		 <div class="flex justify-center my-4">
        <img :src="props.image" alt="Image" class="w-150" >
		</div>
</template>

<script setup>
const props = defineProps({
image: {
    type: String,
    required: true
  }
});
</script>