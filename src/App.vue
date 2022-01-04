<template>
	<div id="app">
		<NavigationBar />
	</div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'

export default {
	name: 'App',
	components: {
		NavigationBar
	}
}
</script>

<style>
#app {
	width: 100vw;
	height: 100vh;
}
</style>
