<template>
	<div class="cart">
		<h2 class="cart-title">Seu pedido</h2>
		<CartItem v-for="item in cartList" :key="item.id" :item="item" />
	</div>
</template>

<script>
import CartItem from './CartItem.vue'

export default {
	name: 'Cart',
	components: {
		CartItem
	},
	props: {
		item: {}
	},
	computed: {
		cartList() {
			return this.$store.state.cartList
		}
	}
}
</script>

<style lang="scss" scoped>
.cart {
	background-color: white;
	min-width: 643px;
	padding: 50px;

	&--title {
		@include FontBase(600, 1.5rem, black);
	}
}
</style>
