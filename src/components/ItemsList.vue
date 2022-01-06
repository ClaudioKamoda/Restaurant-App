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
	created() {
		axios.get('http://localhost:3000/burguers').then(response => {
			this.itemsList = response.data
		})
	}
}
</script>

<style lang="scss" scoped></style>
