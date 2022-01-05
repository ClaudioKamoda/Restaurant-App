<template>
	<div class="home">
		<NavigationBar />
	</div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from '@/components/NavigationBar.vue'
import axios from 'axios'

export default {
	name: 'Home',
	components: {
		NavigationBar
	},
	created() {
		axios.get('http://localhost:3000/burguers').then(response => {
			console.log(response)
		})
	}
}
</script>
