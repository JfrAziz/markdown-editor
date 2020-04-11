const path = require('path');
const webpack = require('webpack')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env, argv) => ({
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    alias: {
        components: path.resolve(__dirname, 'src/components'),
        shared: path.resolve(__dirname, 'src/shared'),
        helpers: path.resolve(__dirname, 'src/helpers'),
        icons: path.resolve(__dirname, 'src/icons'),
        app: path.resolve(__dirname, 'src/app')
    },
    extensions: ['.js']
  },
  plugins : [ 
    new BundleAnalyzerPlugin(),
    new webpack.ContextReplacementPlugin(
      /highlight\.js\/lib\/languages$/,
      new RegExp(`^./(${['bash', 'css', 'javascript', 'json', 'java', 'go', 'php'].join('|')})$`)
    ),
  ],
  devtool: argv.mode === 'production' ? '' : 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
});