<template>
	<div class="payment">
		<div class="payment--content">
			<router-link to="/" class="goBack"> ←️ Voltar </router-link>
		</div>
		<Cart v-if="isDesktop()" />
	</div>
</template>

<script>
import Mixin from '@/mixin.js'
import Cart from '@/components/Cart.vue'

export default {
	name: 'Payment',
	components: {
		Cart
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
}
</style>
