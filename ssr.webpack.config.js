const path = require('path');
const nodeExternals = require('webpack-node-externals');
const cssnano = require('cssnano');

const config = require('./src/server/config');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

module.exports = {
  entry: './src/server/ssr',
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist', 'statics'),
    publicPath: '/statics/',
    filename: `ssr.js`,
    library: 'app',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader'],
        exclude: [/node_modules/, nodeModulesPath],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader/locals'
          }
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'css-loader/locals'
          }
        ],
      },
      {
        test: /.jpe?g$|.gif$|.png$|.svg$|.woff$|.woff2$|.ttf$|.otf$|.eot$/,
        use: 'url-loader?emitFile=false',
      },
    ],
  },
  externals: [nodeExternals()],
};
