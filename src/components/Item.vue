<template>
	<div class="item">
		<div class="item--tag" v-if="itemData.offer">Oferta</div>
		<img src="../assets/images/burguer.png" alt="imagem de um hamburguer" />
		<h2 class="item--name">{{ itemData.name }}</h2>
		<p class="item--description">{{ itemData.description }}</p>
		<p class="item--price">{{ itemData.price | priceCalc }}</p>
	</div>
</template>

<script>
export default {
	name: 'Item',
	filters: {
		priceCalc(value) {
			return `R$ ${value.toLocaleString('pt-br', {
				minimumFractionDigits: 2
			})}`
		}
	},
	props: {
		itemData: {}
	}
}
</script>

<style lang="scss" scoped>
@mixin FontBase($weight, $size, $color) {
	font-weight: $weight;
	font-size: $size;
	color: $color;
}

.item {
	width: 216px;
	height: 290px;
	background-color: white;
	border-radius: 8px;
	padding: 23px;
	margin: 16px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 8px;
	position: relative;

	&--tag {
		position: absolute;
		top: 15px;
		right: 15px;
		background-color: $pink;
		border-radius: 8px;
		@include FontBase(500, 0.75rem, white);
		padding: 3px 8px;
	}

	img {
		width: 127px;
		height: 87px;
		margin: 0 auto;
	}

	&--name {
		@include FontBase(600, 1.125rem, black);
	}

	&--description {
		@include FontBase(300, 0.75rem, $dark-grey);
	}

	&--price {
		@include FontBase(600, 1.125rem, $yellow);
	}
}
</style>
