<template>
	<div class="addToCart">
		<router-link to="/" class="addToCart--goBack" v-if="isSmallDevice()">
			←️ Voltar
		</router-link>
		<Item :itemData="this.item" />
		<!--<div class="container">
			<span>Quantidade:</span>
			<Quantity :item="item" />
		</div>-->
	</div>
</template>

<script>
import Mixin from '@/mixin.js'
import axios from 'axios'
import Item from './Item.vue'
//import Quantity from './Quantity.vue'

export default {
	name: 'AddToCart',
	mixins: [Mixin],
	props: ['id'],
	components: {
		Item
		//Quantity
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
	padding: 50px;

	&--goBack {
		@include FontBase(600, 1.5rem, black);
		display: block;
		margin-bottom: 25px;
		text-decoration: none;
	}

	//&--item {
	///	margin-top: 50px;
	//}
}
</style>
