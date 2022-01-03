<template>
	<div class="navigation-bar">
		<ul>
			<li v-for="nav in navigationList" :key="nav.id">
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
			]
		}
	}
}
</script>

<style></style>
