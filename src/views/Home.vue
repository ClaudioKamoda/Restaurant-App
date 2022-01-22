<template>
	<div class="home">
		<router-link to="/cart" class="cart-icon">
			<CartIcon />
		</router-link>
		<NavigationBar />
		<ItemsList />
		<Cart class="cart-menu" />
	</div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from '@/components/NavigationBar.vue'
import ItemsList from '@/components/ItemsList.vue'
import Cart from '@/components/Cart.vue'
import Mixin from '@/mixin.js'
import CartIcon from '@/assets/icons/cart.svg'

export default {
	name: 'Home',
	components: {
		NavigationBar,
		ItemsList,
		Cart,
		CartIcon
	},
	mixins: [Mixin]
}
</script>

<style lang="scss" scoped>
.home {
	display: flex;

	.cart-icon {
		display: none;
	}

	@media screen and(max-width: 1170px) {
		flex-direction: column;

		.cart-menu {
			display: none;
		}

		.cart-icon {
			width: 42px;
			height: 42px;
			margin: 27px 22px 37px auto;
			border-radius: 50%;
			background-color: $pink;
			color: white;
			@include Flexbox(row, center, center);
		}
	}

	@media screen and(max-width: 720px) {
		background-color: white;
	}
}
</style>
