var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        path: __dirname + '/dist',
        filename: 'scripts.min.js'
    },

    module: {
      rules: [{
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
      }],

      rules: [{
        test: /\.(scss|sass)$/,
        exclude: [__dirname + "/node_modules", __dirname + "/dist"],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader', 'postcss-loader'],
          publicPath: '/dist'
        }),
      }]
    },

    plugins: [
        new HtmlWebpackPlugin({
          title: 'Page Title',
          minify: {
            collapseWhitespace: true
          },
          filename: 'index.html',//localhost:8080
          template: 'src/template/main.html'
        }),

        new ExtractTextPlugin({
          filename: 'style.css',
          disable: false,
          allChunks: true
        })
      ]
  };