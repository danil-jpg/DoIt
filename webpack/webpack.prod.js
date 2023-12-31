const path = require('path')
const CssMin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/index.jsx'),
  devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, '..', 'docs/'),
    filename: 'scripts/bundle.[hash].js',
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
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html')
    }),
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
          // {
          //   loader: 'postcss-loader'
          // }
        ],
      },
      {
        test: /\.(tsx|jsx|js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][hash][ext]'
        }
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




// let mode = 'development';
// if (process.env.NODE_ENV === 'production') {
//   mode = 'production';
// }

// module.exports = {
//   mode: mode,
//   entry: path.resolve(__dirname, '../src/index.jsx'),
//   devtool: 'source-map',
//   output: {
//     path: path.resolve(__dirname, '..', './docs'),
//     filename: 'js/app.[hash].js',
//     clean: true,
//     publicPath: './',
//   },
//   devServer: {
//     open: true,
//     port: 8080,
//     historyApiFallback: true
//   },
//   resolve: {
//     extensions: ['.js', '.jsx'],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.resolve(__dirname, '..', './src/index.html')
//     }),
//     new ImageMinimizerPlugin({
//       minimizer: {
//         implementation: ImageMinimizerPlugin.imageminMinify,
//         options: {
//           plugins: [
//             ['mozjpeg', { quality: 85 }],
//             ['optipng', { optimizationLevel: 3 }],
//             [
//               'svgo',
//               {
//                 plugins: [
//                   {
//                     name: 'preset-default',
//                     params: {
//                       overrides: {
//                         removeViewBox: false,
//                         addAttributesToSVGElement: {
//                           params: {
//                             attributes: [
//                               { xmlns: 'http://www.w3.org/2000/svg' },
//                             ],
//                           },
//                         },
//                       },
//                     },
//                   },
//                 ],
//               },
//             ],
//           ],
//         },
//       },
//       generator: [
//         {
//           preset: 'webp',
//           implementation: ImageMinimizerPlugin.imageminGenerate,
//           options: {
//             plugins: ['imagemin-webp']
//           }
//         }
//       ]
//     })
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.svg$/i,
//         type: 'asset/resource',
//         generator: {
//           filename: 'assets/icons/[hash][ext]'
//         }
//       },
//       {
//         test: /\.(png|jpe?g|gif)$/i,
//         type: 'asset/resource',
//         generator: {
//           filename: 'assets/images/[name][hash][ext]'
//         }
//       },
//       {
//         test: /\.(woff(2)?)$/,
//         type: 'asset/resource',
//         generator: {
//           filename: 'assets/fonts/[hash][ext]'
//         }
//       },
//       {
//         test: /\.module\.scss$/,
//         use: [
//           'style-loader',
//           {
//             loader: 'css-loader',
//             options: {
//               modules: {
//                 localIdentName: '[folder]__[local]___[hash:base64:5]',
//               },
//               sourceMap: true,
//             },
//           },
//           'postcss-loader',
//           'sass-loader',
//         ],
//       },
//       {
//         test: /\.scss$/,
//         exclude: /\.module\.scss$/,
//         use: [
//           'style-loader',
//           'css-loader',
//           'postcss-loader',
//           'sass-loader',
//         ],
//       },
//       {
//         test: /\.m?jsx?$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         }
//       }
//     ]
//   }
// }