const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors',
      minChunks: 2
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      { from: path.join(__dirname, 'src/static'), to: path.join(__dirname, 'dist') }
    ]),
    new BundleAnalyzerPlugin({ analyzerMode: process.env.ANALYZE_BUNDLE ? 'server' : 'disabled' }),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ]
};
