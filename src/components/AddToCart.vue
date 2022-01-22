<template>
	<div class="addToCart">
		<router-link to="/" class="addToCart--goBack"> ←️ Voltar </router-link>
		<Item :itemData="this.item" class="addToCart--item" />
		<div class="addToCart--container">
			<span>Quantidade:</span>
			<Quantity :item="item" :useStore="false" />
		</div>
		<p class="addToCart--observations">Observações:</p>
		<textarea v-model="item.observations" rows="10"></textarea>
		<button class="primary-button" @click="onAddButtonClick">
			Adicionar ao carrinho
		</button>
	</div>
</template>

<script>
import Mixin from '@/mixin.js'
import axios from 'axios'
import Item from './Item.vue'
import Quantity from './Quantity.vue'

export default {
	name: 'AddToCart',
	mixins: [Mixin],
	props: ['id'],
	components: {
		Item,
		Quantity
	},
	data() {
		return {
			item: {}
		}
	},
	computed: {
		selectedNav() {
			return this.$store.state.selectedNav
		}
	},
	created() {
		if (this.isDesktop()) this.$router.push('/')
		axios
			.get(`http://localhost:3000/${this.selectedNav}/${this.id}`)
			.then(response => {
				this.item = { quantity: 1, observations: '', ...response.data }
			})
	},
	methods: {
		onAddButtonClick() {
			this.$store.dispatch('addToCart', this.item)
			this.$router.push('/')
		}
	}
}
</script>

<style lang="scss" scoped>
.addToCart {
	padding: 50px 20px;

	&--goBack {
		@include FontBase(600, 1.5rem, black);
		display: block;
		margin-bottom: 25px;
		text-decoration: none;
	}

	&--item {
		margin-top: 20px;
	}

	&--container {
		@include Flexbox(row, flex-start, center);
		border: 1px solid $light-grey;
		padding: 10px 20px;
		border-radius: 8px;
		margin-top: 10px;

		span {
			margin-right: auto;
			@include FontBase(600, 1rem, black);
		}
	}

	&--observations {
		@include FontBase(600, 1rem, black);
		margin-top: 20px;
	}

	textarea {
		width: 100%;
		height: 80px;
		border: 1px solid $light-grey;
		border-radius: 8px;
	}

	button {
		display: block;
		width: calc(100% - 40px);
		margin: 20px auto;
	}
}
</style>
