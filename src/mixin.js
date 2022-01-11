export default{
  methods:{
    isDesktop(){
			const width = window.innerWidth
			return width > 720
		},
    isSmallDevice(){
      const width = window.innerWidth
			return width < 720
    }
  }
}