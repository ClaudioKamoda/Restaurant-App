<template>
	<div class="cart">
		<router-link to="/" class="cart--goBack" v-if="isSmallDevice()">
			←️ Voltar
		</router-link>
		<h2 class="cart--title">Seu pedido</h2>
		<p class="cart--empty" v-if="isEmpty">Seu carrinho ainda está vazio</p>
		<transition-group name="list">
			<CartItem v-for="item in cartList" :key="item.id" :item="item" />
		</transition-group>
		<div class="cart--total" v-if="!isEmpty">
			<span>Total: </span>
			<span class="cart--totalPrice">{{ getCartTotal | priceCalc }}</span>
		</div>
	</div>
</template>

<script>
import CartItem from './CartItem.vue'
import Mixin from '@/mixin.js'
import { mapGetters } from 'vuex'

export default {
	name: 'Cart',
	filters: {
		priceCalc(value) {
			return `R$ ${value.toLocaleString('pt-br', {
				minimumFractionDigits: 2
			})}`
		}
	},
	components: {
		CartItem,
	},
	computed: {
		...mapGetters(['getCartTotal']),
		cartList() {
			return this.$store.state.cartList
		},
		isEmpty() {
			return this.$store.state.cartList.length === 0
		}
	},
	mixins: [Mixin]
}
</script>

<style lang="scss" scoped>
.cart {
	background-color: white;
	min-width: 600px;
	padding: 50px 20px;

	&--goBack {
		display: block;
		margin-bottom: 25px;
		text-decoration: none;
	}

	&--title,
	&--goBack {
		@include FontBase(600, 1.5rem, black);
	}

	&--empty {
		padding-top: 10px;
	}

	&--total {
		padding-top: 10px;
		text-align: right;
		@include FontBase(600, 1.125rem, black);
	}

	&--totalPrice {
		padding-left: 10px;
		color: $yellow;
	}

	.list-enter-active,
	.list-leave-active {
		transition: all 1s;
	}
	.list-enter,
	.list-leave-to {
		opacity: 0;
		transform: translateX(-30deg);
	}

	@media screen and (max-width: 720px) {
		min-width: unset;
		width: 100vw;
	}
}
</style>
