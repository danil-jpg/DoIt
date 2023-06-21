const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
// const postcss 

module.exports = {
  entry: path.resolve(__dirname, "../src/index.jsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"]
  },
  cache: false,
  module: {
    rules: [
      {
        test: /\.(tsx|jsx|js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      // {
      //   test: /\.module\.scss$/,
      //   use: ["style-loader", {
      //     loader: "css-loader",
      //   }, "sass-loader"]
      // },
      // {
      //   test: /\.(css|sass|scss)$/,
      //   exclude: /\.module\.scss$/,
      //   use: [
      //     "style-loader",
      //     {
      //       loader: "css-loader",
      //     },
      //     "sass-loader",
      //   ],
      // },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][hash][ext]"
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html")
    }),

  ]

}
