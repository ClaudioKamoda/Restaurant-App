module.exports = {
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['vue-style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.svg$/,
				use: ['babel-loader', 'vue-svg-loader']
			}
		]
	}
}
