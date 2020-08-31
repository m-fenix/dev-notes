const { CleanWebpackPlugin } = require("clean-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js", //1
  output: {
    //2
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
  },
  plugins: [
    new CleanWebpackPlugin(), //3
    new HtmlWebpackPlugin({
      //4
      template: "./public/template.html",
    }),
  ],
  module: {
    rules: [
      {
        //5
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        //6
        test: /\.(svg|png|jpe?g|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "assets/images",
          },
        },
      },
      {
        //7
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        //8
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/react"],
          },
        },
      },
    ],
  },
};