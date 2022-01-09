<template>
	<div class="item">
		<div class="img-container">
			<img
				:src="imagePath"
				alt="imagem do produto"
			/>
			<div class="item--tag" v-if="itemData.offer">Oferta</div>
		</div>
		<div class="text-container">
			<h2 class="item--name">{{ itemData.name }}</h2>
			<p class="item--description">{{ itemData.description }}</p>
			<p class="item--price">{{ itemData.price | priceCalc }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Item',
	filters: {
		priceCalc(value) {
			return `R$ ${ value.toLocaleString('pt-br', {
				minimumFractionDigits: 2}) }`
		}
	},
	props: {
		itemData: {}
	},
	computed:{
		selectedNav(){
			return this.$store.state.selectedNav
		},
		imagePath(){
			return require(`../assets/images/${this.selectedNav}/${this.itemData.id}.png`)
		}
	}
}
</script>

<style lang="scss" scoped>
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

	.img-container {
		margin: 0 auto;
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

	@media screen and (max-width: 720px) {
		border: solid $light-grey 1.5px;
		width: 100vw;
		margin: 0 20px;
		height: fit-content;
		padding: 14px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		position: static;

		&--tag {
			position: static;
			width: fit-content;
			padding: 1px 10px;
			font-size: 1rem;
			border-radius: 12px;
		}

		.img-container {
			margin: 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 10px;
		}

		img {
			height: 59px;
			width: 100%;
			margin:auto;
		}

		&--price {
			text-align: right;
		}
	}
}
</style>
