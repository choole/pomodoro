 <template>
		 <div class="flex justify-center my-4">
        <img :src="image" alt="Image" class="w-150" >
		</div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
	image: String
});
</script>