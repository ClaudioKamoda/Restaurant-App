<template>
	<div class="cart-item">
		<img :src="imagePath" alt="imagem do produto" />
		<div class="item--content">
			<h3>{{ item.name }}</h3>
			<a>Adicionar observação</a>
		</div>
		<div class="item--price">
			{{ item.price }}
		</div>
	</div>
</template>

<script>
export default {
	name: 'CartItem',
	props: {
		item: {}
	},
	computed: {
		selectedNav() {
			return this.$store.state.selectedNav
		},
		imagePath() {
			return require(`..assets/images/${this.selectedNav}/${this.item.id}.png`)
		}
	}
}
</script>

<style lang="scss" scoped></style>
