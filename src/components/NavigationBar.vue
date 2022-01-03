<template>
	<div class="navigation-bar">
		<ul>
			<li
				v-for="nav in navigationList"
				:key="nav.id"
				@click="changeNavigation(nav.id)"
				:class="{ active: isActive(nav.id) }"
			>
				<component :is="nav.id" />
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
				{ label: 'Pizza', id: 'pizzaIcon' },
				{ label: 'Bebidas', id: 'drinksIcon' },
				{ label: 'Sobremesas', id: 'desertIcon' },
				{ label: 'Combos', id: 'comboIcon' },
				{ label: 'Burguer', id: 'burguerIcon' }
			],
			currentNavigation: 'pizzaIcon'
		}
	},
	methods: {
		changeNavigation(id) {
			this.currentNavigation = id
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
	align-items: center;

	ul {
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
}
</style>
