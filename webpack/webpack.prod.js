const path = require('path')
const CssMin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  // externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, '..', 'docs/'),
    filename: 'scripts/bundle.js',
    clean: true,
    publicPath: './'
  },

  plugins: [
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [['mozjpeg', { quality: 85 }]],
        },
      },
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
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[path]/[name][hash][ext]'
        }
      },
      {
        test: /\.module\.scss$/,
        exclude: /node_modules/,
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
        exclude: [/\.module\.scss$/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          'sass-loader',
          {
            loader: 'postcss-loader'
          }
        ],
      },
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMin(),
      new TerserPlugin(),
    ]
  }
}