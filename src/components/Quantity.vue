<template>
	<div class="item-quantity">
		<button
			class="button"
			@click="decreaseQuantity(item.id)"
			:disabled="item.quantity == 0"
		>
			-
		</button>
		<span class="number">{{ item.quantity }}</span>
		<button class="button" @click="increaseQuantity(item.id)">+</button>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'Quantity',
	props: {
		item: {}
	},
	methods: {
		...mapActions(['increaseQuantity', 'decreaseQuantity'])
	}
}
</script>

<style lang="scss" scoped>
.item-quantity {
		@include Flexbox(row, center, center);

		.number {
			@include FontBase(500, 1.125rem, $yellow);
			width: 28px;
			text-align: center;
		}

		.button {
			@include FontBase(600, 1.125rem, black);
			cursor: pointer;
			background: none;
			border: 0;

			&:focus {
				outline: 0;
			}
		}
	}
</style>
