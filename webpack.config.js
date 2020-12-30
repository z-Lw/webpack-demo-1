const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base =require('./webpack.config.base.js')
module.exports = {
  ...base,
  devtool: 'inline-source-map',
   devServer: {
    contentBase: './dist',
  },
  plugins: [
    ...base.plugins,
   new MiniCssExtractPlugin({
    filename: 'main.[contenthash].css',
    chunkFilename:'./src/y.css'
  })
],
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: ["style-loader","css-loader"],
      },
    ],
  },
};


