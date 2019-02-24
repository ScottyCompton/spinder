const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index-bundle.js"
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