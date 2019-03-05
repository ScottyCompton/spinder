const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: "./src/index.jsx",
  stats: {
    warnings: false
  },
  output: {
    path: path.join(__dirname, "/_dist"),
    filename: "index-bundle.js",
    publicPath: "/"
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx','.scss']
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
          "style-loader", 
          "css-loader", 
          "sass-loader" 
        ]
      },   
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(?:png|jpg|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 10000
        }
      },     
      {
        test: /\.(eot|ttf|otf|woff|svg|woff2)(\?.*)?$/,
        loader: 'file-loader',
        options: {
            limit: 10000,
            name: '[name].[ext]',
            outputPath: '/fonts/',   
            publicPath: '/assets'    
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};