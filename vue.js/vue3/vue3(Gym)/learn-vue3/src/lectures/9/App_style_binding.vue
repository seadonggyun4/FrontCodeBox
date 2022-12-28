<template>
	<div>
		<div :style="styleObject">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae enim
			nostrum molestiae earum nesciunt ad, totam perspiciatis consequuntur
			consectetur, quidem, cumque eveniet odit excepturi amet eum nisi veritatis
			similique veniam!
		</div>
		<button v-on:click="fontSize--">-</button>
		<button v-on:click="fontSize++">+</button>
	</div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
	setup() {
		const fontSize = ref(13);
		const styleObject = computed(() => {
			return {
				color: 'red',
				fontSize: fontSize.value + 'px',
			};
		});
		return { styleObject, fontSize };
	},
};
</script>

<style lang="scss" scoped></style>
