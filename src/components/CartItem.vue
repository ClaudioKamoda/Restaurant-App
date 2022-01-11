<template>
	<div class="cart-item">
		<img :src="imagePath" alt="imagem do produto" />
	</div>
</template>

<script>
export default {
	name: 'CartItem',
	computed: {
		selectedNav() {
			return this.$store.state.selectedNav
		},
		imagePath() {
			return require(`..assets/images/${this.selectedNav}/${item.id}.png`)
		}
	}
}
</script>

<style lang="scss" scoped></style>
