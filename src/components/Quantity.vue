<template>
	<div class="item-quantity">
		<button
			class="button"
			@click="onDecreaseButtonClick"
			:disabled="item.quantity == 0"
		>
			-
		</button>
		<span class="number">{{ item.quantity }}</span>
		<button class="button" @click="onIncreaseButtonClick">+</button>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'Quantity',
	props: {
		item: {},
		useStore: {
			type: Boolean,
			default: true
		}
	},
	methods: {
		...mapActions(['increaseQuantity', 'decreaseQuantity']),
		onDecreaseButtonClick() {
			if (this.useStore) {
				this.decreaseQuantity(this.item.id)
				return
			}
			--this.item.quantity
		},
		onIncreaseButtonClick() {
			if (this.useStore) {
				this.increaseQuantity(this.item.id)
				return
			}
			++this.item.quantity
		}
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
