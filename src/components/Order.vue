<template>
	<div class="order">
		<form>
			<div class="user-data">
				<h2>Seus dados</h2>
				<div class="input-field">
					<label for=""
						>{{ formData.name.label
						}}<span class="asterisk">*</span></label
					>
					<input
						type="text"
						:placeholder="formData.name.placeholder"
						v-model="formData.name.value"
						@blur="formData.name.isValid()"
						:class="{ error: !formData.name.valid }"
					/>
					<p class="error-message" v-if="!formData.name.valid">
						{{ formData.name.errorMessage }}
					</p>
				</div>

				<div class="input-field">
					<label for=""
						>{{ formData.cellphone.label
						}}<span class="asterisk">*</span></label
					>
					<input
						type="text"
						:placeholder="formData.cellphone.placeholder"
						v-mask="'(##) #####-####'"
						v-model="formData.cellphone.value"
						@blur="formData.cellphone.isValid()"
						:class="{ error: !formData.cellphone.valid }"
					/>
					<p class="error-message" v-if="!formData.cellphone.valid">
						{{ formData.cellphone.errorMessage }}
					</p>
				</div>
			</div>
			<div class="address">
				<h2>Endereço</h2>
				<div class="radio-container">
					<div class="radio-option">
						<input
							type="radio"
							name="delivery-type"
							id="store"
							value="store"
							v-model="deliveryType"
						/>
						<label for="store">Retirar na loja</label>
					</div>
					<div class="radio-option">
						<input
							type="radio"
							name="delivery-type"
							id="entrega"
							value="delivery"
							v-model="deliveryType"
						/>
						<label for="entrega">Delivery</label>
					</div>
				</div>
				<div
					class="address-card"
					v-if="isDelivery && addressExists && savedAddress"
				>
					<p>{{ formData.address.value }}</p>
					<p v-if="hasComplement">{{ formData.complement.value }}</p>
					<p>{{ formData.city.value }}, {{ formData.cep.value }}</p>
				</div>
				<a @click="showAddressModal" v-if="isDelivery"
					>{{ addressButtonLabel }} endereço</a
				>
			</div>
			<div class="payment">
				<h2>Pagamento</h2>
				<p>Método de pagamento:</p>
				<div class="radio-container">
					<div class="radio-option">
						<input
							type="radio"
							name="payment-type"
							id="card"
							value="card"
							v-model="paymentType"
						/>
						<label for="card">Cartão</label>
					</div>
					<div class="radio-option">
						<input
							type="radio"
							name="payment-type"
							id="cash"
							value="cash"
							v-model="paymentType"
						/>
						<label for="cash">Dinheiro</label>
					</div>
				</div>
			</div>
		</form>
		<button class="primary-button" @click="orderItems">
			Confirmar pedido
		</button>
		<p class="obs">* campo obrigatório</p>
		<Modal :show="addressModal" @close-modal="hideAddressModal">
			<div class="modal-content">
				<h2>{{ addressButtonLabel }} endereço</h2>
				<form>
					<div class="input-field">
						<label for=""
							>{{ formData.cep.label
							}}<span class="asterisk">*</span></label
						>
						<input
							type="text"
							:placeholder="formData.cep.placeholder"
							v-mask="'#####-###'"
							v-model="formData.cep.value"
							@blur="formData.cep.isValid()"
							:class="{ error: !formData.cep.valid }"
						/>
						<p class="error-message" v-if="!formData.cep.valid">
							{{ formData.cep.errorMessage }}
						</p>
					</div>
					<div class="input-field">
						<label for=""
							>{{ formData.city.label
							}}<span class="asterisk">*</span></label
						>
						<input
							type="text"
							:placeholder="formData.city.placeholder"
							v-model="formData.city.value"
							@blur="formData.city.isValid()"
							:class="{ error: !formData.city.valid }"
						/>
						<p class="error-message" v-if="!formData.city.valid">
							{{ formData.city.errorMessage }}
						</p>
					</div>
					<div class="input-field">
						<label for=""
							>{{ formData.address.label
							}}<span class="asterisk">*</span></label
						>
						<input
							type="text"
							:placeholder="formData.address.placeholder"
							v-model="formData.address.value"
							@blur="formData.address.isValid()"
							:class="{ error: !formData.address.valid }"
						/>
						<p class="error-message" v-if="!formData.address.valid">
							{{ formData.address.errorMessage }}
						</p>
					</div>
					<div class="input-field">
						<label for="">{{ formData.complement.label }}</label>
						<input
							type="text"
							:placeholder="formData.complement.placeholder"
							v-model="formData.complement.value"
						/>
					</div>
				</form>
				<div class="button-container">
					<button class="secondary-button" @click="hideAddressModal">
						Cancelar
					</button>
					<button class="primary-button" @click="validateAndClose">
						{{ addressButtonLabel }}
					</button>
				</div>
			</div>
		</Modal>
		<Modal :show="noAddressWarning" @close-modal="hideNoAddressWarning"
			>Você esqueceu de adicionar um endereço para a entrega!</Modal
		>
		<Modal :show="successModal" @close-modal="hideSuccessModal"
			>Pedido confirmado</Modal
		>
	</div>
</template>

<script>
import Modal from './Modal.vue'

export default {
	name: 'Order',
	components: {
		Modal
	},
	data() {
		return {
			addressModal: false,
			noAddressWarning: false,
			successModal: false,
			deliveryType: 'store',
			paymentType: 'card',
			savedAddress: false,
			formData: {
				name: {
					value: '',
					placeholder: 'Digite seu nome',
					errorMessage: 'O nome é obrigatório',
					label: 'Nome',
					valid: true,
					isValid: () => {
						this.formData.name.valid =
							this.formData.name.value.length
					}
				},
				cellphone: {
					value: '',
					placeholder: 'Digite seu telefone',
					errorMessage: 'O telefone é obrigatório',
					label: 'Telefone',
					valid: true,
					isValid: () => {
						this.formData.cellphone.valid =
							this.formData.cellphone.value.length === 15
					}
				},
				cep: {
					value: '',
					placeholder: 'Digite seu cep',
					errorMessage: 'O cep é obrigatório',
					label: 'CEP',
					valid: true,
					isValid: () => {
						this.formData.cep.valid =
							this.formData.cep.value.length === 9
					}
				},
				city: {
					value: '',
					placeholder: 'Digite sua cidade',
					errorMessage: 'A cidade é obrigatória',
					label: 'Cidade',
					valid: true,
					isValid: () => {
						this.formData.city.valid =
							!!this.formData.city.value.length
					}
				},
				address: {
					value: '',
					placeholder: 'Digite sua rua e número',
					errorMessage: 'A rua e número são obrigatórios',
					label: 'Rua e número',
					valid: true,
					isValid: () => {
						this.formData.address.valid =
							!!this.formData.address.value.length
					}
				},
				complement: {
					value: '',
					placeholder: 'Digite o complemento',
					errorMessage: '',
					label: 'Complemento',
					valid: true,
					isValid: () => {
						return true
					}
				}
			}
		}
	},
	computed: {
		isDelivery() {
			return this.deliveryType === 'delivery'
		},
		addressExists() {
			return (
				this.formData.cep.value ||
				this.formData.city.value ||
				this.formData.address.value
			)
		},
		addressIsValid() {
			return (
				this.formData.cep.valid &&
				this.formData.city.valid &&
				this.formData.address.valid &&
				this.formData.complement.valid
			)
		},
		userInfoIsValid() {
			return this.formData.name.valid && this.formData.cellphone.valid
		},
		addressButtonLabel() {
			return this.addressExists ? 'Editar' : 'Adicionar'
		},
		hasComplement() {
			return this.formData.complement.value != ''
		}
	},
	methods: {
		triggerValidations() {
			this.formData.name.isValid()
			this.formData.cellphone.isValid()
			if (this.isDelivery) {
				this.validateAddress()
				this.noAddressWarning = !this.addressExists
			}
		},
		orderItems() {
			this.triggerValidations()
			if (!this.addressIsValid || !this.userInfoIsValid) return
			this.successModal = true
		},
		hideSuccessModal() {
			this.$router.push({ name: 'Home' })
		},
		hideNoAddressWarning() {
			this.noAddressWarning = false
		},
		hideAddressModal() {
			this.addressModal = false
		},
		showAddressModal() {
			this.addressModal = true
		},
		validateAddress() {
			this.formData.cep.isValid()
			this.formData.city.isValid()
			this.formData.address.isValid()
			this.formData.complement.isValid()
		},
		validateAndClose() {
			this.validateAddress()
			if (this.addressIsValid) {
				this.savedAddress = true
				this.addressModal = false
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.order {
	width: 100%;
	margin: auto;
	background: white;
	border-radius: 8px;
	padding: 30px 50px;

	h2 {
		@include FontBase(600, 1.375rem, black);
	}

	form {
		@include Flexbox(column, flex-start, flex-start);
		gap: 15px;

		.user-data {
			width: 100%;
		}

		.input-field {
			@include Flexbox(column, flex-start, flex-start);
			gap: 5px;
			width: 100%;
			label {
				@include FontBase(500, 1rem, black);
			}
			input {
				width: 100%;
			}
		}

		.radio-container {
			@include Flexbox(row, flex-start, center);
			gap: 15px;
			margin-top: 10px;
		}

		.address {
			a {
				@include FontBase(400, 0.75rem, $pink);
				text-decoration: underline;
				cursor: pointer;
			}

			.address-card {
				border: 1px solid $dark-grey;
				border-radius: 8px;
				padding: 15px;
				margin: 15px 0;
				@include Flexbox(column, flex-start, flex-start);
				@include FontBase(400, 1rem, $dark-grey);
				gap: 5px;
			}
		}

		.radio-option {
			@include Flexbox(row, center, center);
			gap: 5px;
		}
	}

	button {
		margin-top: 10px;
	}
	.error-message {
		@include FontBase(500, 0.75rem, $pink);
	}

	.obs {
		@include FontBase(400, 0.75rem, $pink);
	}

	.button-container {
		@include Flexbox(row, center, center);
		gap: 10px;
		margin-top: 10px;
	}

	@media screen and (max-width: 720px) {
		padding: 15px;
	}
}
</style>
