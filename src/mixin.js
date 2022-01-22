export default {
	methods: {
		isDesktop() {
			const width = window.innerWidth
			return width > 1170
		},
		isSmallDevice() {
			const width = window.innerWidth
			return width < 720
		}
	}
}
