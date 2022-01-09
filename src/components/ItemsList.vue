<template>
	<div class="items-list">
		<Item v-for="item in itemsList" :key="item.id" :itemData="item" />
	</div>
</template>

<script>
import Item from './Item.vue'
import axios from 'axios'

export default {
	name: 'ItemsList',
	components: {
		Item
	},
	data() {
		return {
			itemsList: []
		}
	},
	computed: {
		selectedNav: {
			get(){
				return this.$store.state.selectedNav
			}	
		}
	},
	methods:{
		getItemList(){
			axios.get(`http://localhost:3000/${this.selectedNav}`).then(response => {
				this.itemsList = response.data
			})
		}
	},
	watch:{
		selectedNav(){
			this.getItemList()
		}
	}
}
</script>

<style lang="scss" scoped>
.items-list {
	padding: 50px;
	display: flex;
	flex-wrap: wrap;
	background-color: $bg-color;

	@media screen and (max-width: 720px) {
		background-color: white;
		padding: 23px;
		flex-direction: column;
		align-items: center;
	}
}
</style>
