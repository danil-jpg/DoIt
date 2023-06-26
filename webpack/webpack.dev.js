const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,

  },


  module: {
    rules: [{
      test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i,
      type: 'asset/resource'
    },
    {
      test: /\.module\.scss$/,
      generator: {
        filename: 'styles/[name][hash][ext]'
      },
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[local]__[hash:base64:5]'
          }
        }
      }, 'sass-loader']
    },
    {
      test: /\.(css|sass|scss)$/,
      exclude: /\.module\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        },
        'sass-loader',
      ],
    },
    ]
  },

  devtool: 'cheap-module-source-map',
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new ImageminWebpWebpackPlugin(),
    new ImageMinimizerPlugin({
      generator: [
        {
          preset: 'webp',
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugins: ['imagemin-webp']
          }
        }
      ]
    })
  ],
}
