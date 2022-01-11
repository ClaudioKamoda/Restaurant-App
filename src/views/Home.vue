<template>
	<div class="home">
		<NavigationBar />
		<ItemsList />
		<Cart />
	</div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from '@/components/NavigationBar.vue'
import ItemsList from '@/components/ItemsList.vue'
import Cart from '@/components/Cart.vue'

export default {
	name: 'Home',
	components: {
		NavigationBar,
		ItemsList,
		Cart
	}
}
</script>

<style lang="scss" scoped>
.home {
	display: flex;

	@media screen and(max-width: 720px) {
		flex-direction: column;
	}
}
</style>
