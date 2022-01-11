<template>
	<div class="item">
		{{item.quantity}}
		<div class="img-container">
			<img :src="imagePath" alt="imagem do produto" />
		</div>
		<div class="item--content">
			<h3 class="name">{{ item.name }}</h3>
			<a class="description">Adicionar observação</a>
		</div>
		<p class="item--price">{{ item.price | priceCalc }}</p>
	</div>
</template>

<script>
export default {
	name: 'CartItem',
	filters: {
		priceCalc(value) {
			return `R$ ${value.toLocaleString('pt-br', {
				minimumFractionDigits: 2
			})}`
		}
	},
	props: {
		item: {}
	},
	computed: {
		imagePath() {
			return require(`../assets/images/${this.item.id}.png`)
		}
	}
}
</script>

<style lang="scss" scoped>
.item {
	@include Flexbox(row, center, center);
	gap: 15px;
	padding: 20px 0;
	border-bottom: 1px solid $light-grey;

	.img-container {
		background-color: $light-yellow;
		border-radius: 8px;
		height: 66px;
		width: 81px;
		@include Flexbox(row, center, center);

		img {
			width: 65px;
		}
	}

	&--content {
		@include Flexbox(column, center, flex-start);
		flex-grow: 1;
		.name {
			@include FontBase(600, 1.125rem, black);
		}
		.description {
			text-decoration: underline;
			@include FontBase(500, 0.75rem, $dark-grey);
		}
	}

	&--price {
		@include FontBase(600, 1.125rem, $yellow);
	}
}
</style>
