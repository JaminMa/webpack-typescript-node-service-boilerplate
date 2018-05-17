const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

function isDevEnvironment() {
  return process.env.NODE_ENV === 'development';
}

const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  devtool: isDevEnvironment() ? 'inline-source-map' : false,
  entry: path.resolve(__dirname, 'server/server.ts'),
  target: 'node',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist')
  },
  externals: nodeModules,
  resolve: {
    extensions: ['.ts', '.js'] // enables users to leave off the extension when importing
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader'
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: isDevEnvironment()
    }),
  ]
};
