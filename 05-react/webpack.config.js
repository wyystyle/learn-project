
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
	mode:'development',
	entry:{
			index:'./src/index.js'
		},
	output:{
		filename:'bundle.js',
		path:path.resolve(__dirname,'dist')
	},
	module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.(png|jpg|gif)$/,
        use:[
          'url-loader'
        ]
      },
      {
        test:/\.js$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['env', 'react']
            }
        }               
      }, 

    ]
  },
 
  plugins:[
  	new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
    	template:'./src/index.html',
      filename:'index.html',
      inject:true,
    	hash:true
    })
  ],
  devServer:{
  	contentBase:'./dist'
  } 
};