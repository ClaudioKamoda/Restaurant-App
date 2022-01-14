<template>
	<div class="addToCart">
		<router-link to="/" class="addToCart--goBack" v-if="isSmallDevice()">
			←️ Voltar
		</router-link>
		<Item :itemData="this.item" class="addToCart--item" />
		<div class="addToCart--container">
			<span>Quantidade:</span>
			<Quantity :item="item" />
		</div>
		<p class="addToCart--observations">Observações:</p>
		<textarea v-model="observations" rows="10"></textarea>
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
			item: {},
			observations: ''
		}
	},
	computed: {
		selectedNav() {
			return this.$store.state.selectedNav
		}
	},
	created() {
		axios
			.get(`http://localhost:3000/${this.selectedNav}/${this.id}`)
			.then(response => {
				this.item = response.data
			})
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
		margin-top: 50px;
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
		margin-top: 10px;
	}

	textarea {
		width: 100%;
		border: 1px solid $light-grey;
		border-radius: 8px;
	}
}
</style>
