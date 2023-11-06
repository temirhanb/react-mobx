const path = require('path')
const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve("./src/app/index.tsx"),
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "/"),
    },
    port: 3000,
    open: true
  },
  module: {
    rules: [
      {test: /\.([cm]?ts|tsx)$/, loader: "ts-loader"},
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      },
      {
        use: ['style-loader', 'css-loader', {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              ident: 'postcss',
              plugins: [tailwindcss, autoprefixer]
            },
          },
        }],
        test: /\.css$/i,
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      }
    ]
  },
  plugins: [
    new HtmlPlugin({template: "public/index.html"})
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].[hash].js"
  },

}
