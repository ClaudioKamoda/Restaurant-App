<template>
	<div class="item">
		<div class="item--quantity">
			<button
				class="button"
				@click="decreaseQuantity(item.id)"
				:disabled="item.quantity == 0"
			>
				-
			</button>
			<span class="number">{{ item.quantity }}</span>
			<button class="button" @click="increaseQuantity(item.id)">+</button>
		</div>
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
import { mapActions } from 'vuex'

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
	},
	methods: {
		...mapActions(['increaseQuantity', 'decreaseQuantity'])
	}
}
</script>

<style lang="scss" scoped>
.item {
	@include Flexbox(row, center, center);
	gap: 15px;
	padding: 20px 0;
	border-bottom: 1px solid $light-grey;

	&--quantity {
		@include Flexbox(row, center, center);

		.number {
			@include FontBase(500, 1.125rem, $yellow);
			width: 28px;
			text-align: center;
		}

		.button {
			@include FontBase(600, 1.125rem, black);
			cursor: pointer;
			background: none;
			border: 0;

			&:focus {
				outline: 0;
			}
		}
	}

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

	@media screen and (max-width: 720px) {
		flex-wrap: wrap;
		justify-content: flex-start;
		padding: 10px;

		.img-container {
			order: 1;
		}
		&--content {
			order: 2;
		}
		&--quantity {
			order: 3;
			width: 81px;
		}
		&--price {
			order: 4;
		}
	}
}
</style>
