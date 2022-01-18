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
				<div class="delivery-type">
					<div class="radio-option">
						<input
							type="radio"
							name="delivery-type"
							id="store"
							checked
						/>
						<label for="store">Retirar na loja</label>
					</div>
					<div class="radio-option">
						<input type="radio" name="delivery-type" id="entrega" />
						<label for="entrega">Delivery</label>
					</div>
				</div>
				<a>Adicionar endereço</a>
			</div>
		</form>
		<button class="primary-button" @click="orderItems">
			Confirmar pedido
		</button>
		<p class="obs">* campo obrigatório</p>
	</div>
</template>

<script>
export default {
	name: 'Order',
	data() {
		return {
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
				}
			}
		}
	},
	methods: {
		triggerValidations() {
			this.formData.name.isValid()
		},
		orderItems() {
			this.triggerValidations()
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

		.address {
			.delivery-type {
				@include Flexbox(row, center, center);
				gap: 15px;
			}

			a {
				@include FontBase(400, 0.75rem, $pink);
				text-decoration: underline;
				cursor: pointer;
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
}
</style>
