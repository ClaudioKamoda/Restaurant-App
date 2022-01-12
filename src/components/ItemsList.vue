<template>
	<div class="items-list">
		<Loading v-if="isLoading" />
		<Item v-for="item in itemsList" :key="item.id" :itemData="item" />
	</div>
</template>

<script>
import Item from './Item.vue'
import Loading from './Loading.vue'
import axios from 'axios'

export default {
	name: 'ItemsList',
	components: {
		Item,
		Loading
	},
	data() {
		return {
			itemsList: [],
			isLoading: false
		}
	},
	created() {
		this.getItemList()
	},
	computed: {
		selectedNav() {
			return this.$store.state.selectedNav
		}
	},
	methods: {
		getItemList() {
			this.itemsList = []
			this.isLoading = true
			setTimeout(() => {
				axios
					.get(`http://localhost:3000/${this.selectedNav}`)
					.then(response => {
						this.itemsList = response.data
						this.isLoading = false
					})
			}, 500)
		}
	},
	watch: {
		selectedNav() {
			this.getItemList()
		}
	}
}
</script>

<style lang="scss" scoped>
.items-list {
	padding: 20px;
	width: 100vw;
	display: flex;
	align-content: flex-start;
	flex-wrap: wrap;
	background-color: $bg-color;

	@media screen and (max-width: 720px) {
		background-color: white;
		padding: 23px;
		flex-direction: column;
		align-items: center;
		gap: 10px;
	}
}
</style>
