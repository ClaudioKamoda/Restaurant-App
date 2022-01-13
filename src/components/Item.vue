<template>
	<div class="item" @click="addToCart">
		<div class="img-container">
			<!--Don't remove this, otherwise the code will break-->
			<p style="display: none">
				{{ itemData.id }}
			</p>

			<img :src="imagePath" alt="imagem do produto" />
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
import Mixin from '@/mixin.js'

export default {
	name: 'Item',
	filters: {
		priceCalc(value) {
			return `R$ ${value.toLocaleString('pt-br', {
				minimumFractionDigits: 2
			})}`
		}
	},
	mixins: [Mixin],
	props: {
		itemData: {}
	},
	computed: {
		imagePath() {
			return require(`../assets/images/${this.itemData.id}.png`)
		}
	},
	methods: {
		addToCart() {
			this.$store.dispatch('addToCart', this.itemData)
			if (this.isDesktop()) return

			this.$router.push({
				name: 'AddToCart',
				params: { id: this.itemData.id }
			})
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
		height: fit-content;
		min-width: 330px;
		padding: 5px 14px;
		margin: 0;
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

		.text-container {
			flex-grow: 1;
		}

		img {
			height: auto;
			width: 86px;
			margin: auto;
		}

		&--price {
			text-align: right;
		}
	}
}
</style>
