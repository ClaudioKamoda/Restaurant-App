<template>
	<div class="cart">
		<router-link to="/" class="cart--goBack" v-if="isSmallDevice()">
			←️ Voltar
		</router-link>
		<h2 class="cart--title">Seu pedido</h2>
		<CartItem v-for="item in cartList" :key="item.id" :item="item" />
	</div>
</template>

<script>
import CartItem from './CartItem.vue'
import Mixin from '@/mixin.js'

export default {
	name: 'Cart',
	components: {
		CartItem
	},
	computed: {
		cartList() {
			return this.$store.state.cartList
		}
	},
	mixins: [Mixin]
}
</script>

<style lang="scss" scoped>
.cart {
	background-color: white;
	min-width: 600px;
	padding: 50px;

	&--goBack {
		display: block;
		margin-bottom: 25px;
		text-decoration: none;
	}

	&--title,
	&--goBack {
		@include FontBase(600, 1.5rem, black);
	}

	@media screen and (max-width: 720px) {
		width: 100vw;
	}
}
</style>
