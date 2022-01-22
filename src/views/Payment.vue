<template>
	<div class="payment">
		<div class="payment--content">
			<router-link to="/" class="goBack"> ←️ Voltar </router-link>
			<Order />
		</div>
		<Cart class="cart-menu" />
	</div>
</template>

<script>
import Mixin from '@/mixin.js'
import Cart from '@/components/Cart.vue'
import Order from '@/components/Order.vue'

export default {
	name: 'Payment',
	components: {
		Cart,
		Order
	},
	mixins: [Mixin]
}
</script>

<style lang="scss" scoped>
.payment {
	@include Flexbox(row, flex-start, flex-start);

	&--content {
		flex-grow: 1;
		padding: 50px;

		.goBack {
			@include FontBase(600, 1.5rem, black);
			display: block;
			margin-bottom: 25px;
			text-decoration: none;
		}
	}

	.cart-menu {
		display: block;
	}

	@media screen and (max-width: 1170px) {
		.cart-menu {
			display: none;
		}
	}

	@media screen and (max-width: 720px) {
		&--content {
			padding: 50px 20px 10px;
		}
	}
}
</style>
