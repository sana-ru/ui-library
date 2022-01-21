const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals');
module.exports = {
  mode: "production",
  entry: './src/index.js',
  // externals: [nodeExternals()],

  externals: {
    'react': 'commonjs react' 
    // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
  },

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    
		// library: 'ui-library',
		libraryTarget: 'commonjs2'
  },
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
     {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      { 
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, './src')
      }
    ]
  }
}
