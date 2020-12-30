const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.[contenthash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'hello world',
      template: 'src/assets/index.html'
        }),
    ],
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader', 
          },
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
              loader:"sass-loader",
              options:{
                  implementation:require('dart-sass')
              }
          }
        ]
      },
      {
        test: /\.less$/,
        use: ["style-loader","css-loader","less-loader"], 
      },
      {
        test: /\.styl$/,
        use: [MiniCssExtractPlugin.loader,"css-loader","stylus-loader"],
      },
    ],
  }, 
};


