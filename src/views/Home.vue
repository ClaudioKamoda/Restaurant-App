<template>
	<div class="home">
		<NavigationBar />
		<ItemsList />
	</div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from '@/components/NavigationBar.vue'
import ItemsList from '@/components/ItemsList.vue'

export default {
	name: 'Home',
	components: {
		NavigationBar,
		ItemsList
	}
}
</script>

<style lang="scss" scoped>
.home {
	display: flex;
}
</style>
