<template>
	<div class="item">
		<h2>{{ itemData.name }}</h2>
		<p>{{ itemData.description }}</p>
		<p>{{ itemData.price }}</p>
	</div>
</template>

<script>
export default {
	name: 'Item',
	props: {
		itemData: {}
	}
}
</script>

<style></style>
