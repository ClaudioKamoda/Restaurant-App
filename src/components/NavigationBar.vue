<template>
	<div class="navigation-bar">
		<ul>
			<li
				v-for="nav in navigationList"
				:key="nav.id"
				@click="changeNavigation(nav.id)"
				:class="{ active: isActive(nav.id) }"
			>
				<component :is="nav.component" />
				<p>{{ nav.label }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
import burguerIcon from '../assets/icons/food.svg'
import comboIcon from '../assets/icons/french-fries.svg'
import desertIcon from '../assets/icons/ice-cream.svg'
import pizzaIcon from '../assets/icons/pizza.svg'
import drinksIcon from '../assets/icons/smothie.svg'

export default {
	name: 'NavigationBar',
	components: {
		burguerIcon,
		comboIcon,
		desertIcon,
		pizzaIcon,
		drinksIcon
	},
	data() {
		return {
			navigationList: [
				{ label: 'Pizza', id: 'pizzas', component:'pizzaIcon' },
				{ label: 'Bebidas', id: 'drinks', component:'drinksIcon' },
				{ label: 'Doces', id: 'desserts', component:'desertIcon' },
				{ label: 'Combos', id: 'combos', component:'comboIcon' },
				{ label: 'Burguer', id: 'burguers', component:'burguerIcon' }
			],
			currentNavigation: 'pizzaIcon'
		}
	},
	methods: {
		changeNavigation(id) {
			this.currentNavigation = id
			this.$store.dispatch('changeNavigation', id)
		},
		isActive(id) {
			return id === this.currentNavigation
		}
	}
}
</script>

<style scoped lang="scss">
.navigation-bar {
	width: 130px;
	height: 100vh;
	display: flex;
	justify-content: center;
	background-color: white;

	ul {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		list-style: none;
		padding: 0;

		li {
			height: 100px;
			width: 130px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			color: $dark-grey;

			p {
				margin-top: 5px;
				font-size: 0.875rem;
				font-weight: 500;
			}

			svg {
				path {
					fill: $dark-grey;
				}
			}
			&.active {
				background-color: $yellow;
				color: black;
				border-radius: 0.5rem;

				svg {
					path {
						fill: black;
					}
				}
			}
		}
	}
	@media screen and (max-width: 720px) {
		width: 100%;
		height: fit-content;

		ul {
			padding-left: 10.5px;
			margin: 10px 0;
			width: 100%;
			flex-direction: row;
			overflow: scroll;

			li {
				border-radius: 8px;
				border: solid $light-grey 1.5px;
				min-width: 78px;
				max-width: 78px;
				height: 98px;
				margin: 0 5.5px;
				p {
					font-size: 0.75rem;
				}
				&.active {
					border: none;
				}
			}
		}
	}
	@media screen and (max-width: 450px) {
		ul {
			justify-content: flex-start;
		}
	}
}
</style>
