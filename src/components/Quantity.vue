<template>
	<div class="item-quantity">
		<button
			class="button"
			@click="onDecreaseButtonClick"
			:disabled="item.quantity == 0"
		>
			-
		</button>
		<span class="number">{{ item.quantity }}</span>
		<button class="button" @click="onIncreaseButtonClick">+</button>
		<Modal :show="showModal" @close-modal="showModal = false">
			<div class="modal-content">
				<h2>Deseja remover esse item do carrinho?</h2>
				<button class="primary-button" @click="onRemoveButtonClick">Sim, remover</button>
				<button class="secondary-button" @click="onCancelButtonClick">Cancelar</button>
			</div>
		</Modal>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
import Modal from './Modal.vue'

export default {
	name: 'Quantity',
	props: {
		item: {},
		useStore: {
			type: Boolean,
			default: true
		}
	},
	components:{
		Modal
	},
	data(){
		return {
			showModal: false
		}
	},
	methods: {
		...mapActions(['increaseQuantity', 'decreaseQuantity']),
		onDecreaseButtonClick() {
			if (this.useStore) {
				this.decreaseQuantity(this.item.id)
				if(!this.item.quantity) this.showModal = true
				return
			}
			--this.item.quantity
		},
		onIncreaseButtonClick() {
			if (this.useStore) {
				this.increaseQuantity(this.item.id)
				return
			}
			++this.item.quantity
		},
		onCancelButtonClick(){
			this.increaseQuantity(this.item.id)
			this.showModal = false
		},
		onRemoveButtonClick(){
			this.showModal = false
			this.$nextTick(() =>{
				this.$store.dispatch('removeFromCart', this.item.id)
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.item-quantity {
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

	.modal-content{
		text-align: center;
		button{
			margin-left: 10px;
			margin-top: 20px;
		}
	}
}
</style>
