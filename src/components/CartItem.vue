<template>
	<div class="item">
		<Quantity :item="item" class="item--quantity" />
		<div class="img-container">
			<img :src="imagePath" alt="imagem do produto" />
		</div>
		<div class="item--content">
			<h3 class="name">{{ item.name }}</h3>
			<a class="description" @click="onShowObservationModal">Adicionar observação</a>
			<p class="description-text">{{item.observations}}</p>
		</div>
		<p class="item--price">{{ item.price | priceCalc }}</p>
		<Modal :show="showObservationModal" @close-modal="closeObservationModal">
			<div class="modal-content">
				<h2>Adicionar observação</h2>
				<textarea v-model="item.observations" rows="5"></textarea>
				<button class="primary-button" @click="saveObservation">Salvar</button>
				<button class="secondary-button" @click="closeObservationModal">Cancelar</button>
			</div>
		</Modal>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
import Quantity from './Quantity.vue'
import Modal from './Modal.vue'

export default {
	name: 'CartItem',
	components: {
		Quantity,
		Modal
	},
	data(){
		return{
			showObservationModal: false
		}
	},
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
		...mapActions(['increaseQuantity', 'decreaseQuantity']),
		onShowObservationModal(){
			this.showObservationModal = true
		},
		closeObservationModal(){
			this.showObservationModal = false
		},
		saveObservation(){
			this.$store.dispatch('addObservation', this.item)
			this.showObservationModal = false
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
			cursor: pointer;
		}

		.description-text{
			@include FontBase(500, 0.75rem, $dark-grey);
		}
	}

	&--price {
		@include FontBase(600, 1.125rem, $yellow);
	}

	.modal-content{
		text-align: center;

		h2{
			font-size: 1.125rem;
			margin-bottom:5px;
		}

		textarea{
			width: 100%;
			margin-bottom: 20px;
		}
		button + button{
			margin: 10px;
		}
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

		.modal-content{
			textarea{
				margin-bottom: 5px;
			}
		}
	}
}
</style>
