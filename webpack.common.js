const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLPluginConfig = require('./html-webpack-plugin.config');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    index: './index.js'
  },
  output: {
    filename: '[name].js'
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        },
        include: [path.resolve(__dirname, 'src')],
        exclude: /node_modules/
      },
      {
        test: [/\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/, /\.(jpe?g|png|gif)$/i],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(html|ejs)$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src', 'object:data']
            }
          },
          {
            loader: 'ejs-html-loader',
            options: { htmlWebpackPlugin: HtmlWebpackPlugin }
          }
        ]
      }
    ]
  },
  plugins: [
    ...HTMLPluginConfig,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
