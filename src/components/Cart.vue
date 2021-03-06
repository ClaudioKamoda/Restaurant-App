<template>
	<div class="cart">
		<router-link to="/" class="cart--goBack"> ←️ Voltar </router-link>
		<h2 class="cart--title">Seu pedido</h2>
		<div class="cart--content">
			<p class="cart--empty" v-if="isEmpty">
				Seu carrinho ainda está vazio
			</p>
			<transition-group name="list">
				<CartItem
					v-for="item in cartList"
					:key="item.id"
					:item="item"
				/>
			</transition-group>
		</div>
		<div class="cart--total" v-if="!isEmpty">
			<span>Total: </span>
			<span class="cart--totalPrice">{{ getCartTotal | priceCalc }}</span>
		</div>
		<button
			class="primary-button payment-button"
			@click="goToPayment"
			v-if="cartHasItem && !isPaymentScreen"
		>
			Finalizar compra
		</button>
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
		CartItem
	},
	computed: {
		...mapGetters(['getCartTotal']),
		cartList() {
			return this.$store.state.cartList
		},
		isEmpty() {
			return this.$store.state.cartList.length === 0
		},
		cartHasItem() {
			return this.cartList.length > 0
		},
		isPaymentScreen() {
			return this.$route.name === 'Payment'
		}
	},
	mixins: [Mixin],
	methods: {
		goToPayment() {
			this.$router.push({ name: 'Payment' })
		}
	}
}
</script>

<style lang="scss" scoped>
.cart {
	background-color: white;
	min-width: 500px;
	height: 100vh;
	padding: 50px 20px 20px;
	@include Flexbox(column, center, flex-start);

	&--goBack {
		display: block;
		margin-bottom: 25px;
		text-decoration: none;

		display: none;
	}

	&--title,
	&--goBack {
		@include FontBase(600, 1.5rem, black);
	}

	&--content {
		flex-grow: 1;
		overflow: auto;
		width: 100%;
	}

	&--empty {
		padding-top: 10px;
	}

	&--total {
		padding-top: 10px;
		align-self: flex-end;
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

	.payment-button {
		width: 80%;
		margin: 20px auto 0;
	}

	@media screen and (max-width: 1170px) {
		&--goBack {
			display: block;
			margin-bottom: 25px;
			text-decoration: none;
		}
	}

	@media screen and (max-width: 720px) {
		min-width: unset;
		width: 100vw;

		.payment-button {
			width: 100%;
		}
	}
}
</style>
