const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const history = require('connect-history-api-fallback');
const convert = require('koa-connect');

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'serve'),
    publicPath: ''
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'src/static'),
        to: path.join(__dirname, 'serve')
      }
    ]),
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:9000/'
      },
      {
        reload: false
      }
    )
  ],
  serve: {
    port: 9000,
    content: [path.join(__dirname, 'serve')],
    add: app => {
      app.use(convert(history()));
    }
  }
};
