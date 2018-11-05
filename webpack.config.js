var path = require('path');
var webpack = require('webpack');
require("babel-polyfill");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    resolve: {
      modules: [
        path.resolve(__dirname, 'src'),
        'node_modules'
      ],
      alias: {
        src: path.resolve(__dirname, 'src/')
      }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
              test: /\.less$/,
              loader: ['style-loader','css-loader', 'less-loader']
            },
            {
              test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
              loader: 'file',
              include: path.resolve(__dirname, 'assets')
            }
        ]
      }  ,

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html',
        inject: 'body'
      })
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
