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
      { //8
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};

//1 modulo de entrada que manda llamar a todo lo demas (.js, .css, etc)
//2 da nombre de archivo bundle que se creara en dist/ y agrega hash para cache
//3 borra todo del folder dist/ cada que se haga un build
//4 crea un index.html en dist/ haciendo referencia al index.js con cache y usa como template "template.html"
//5 html-loader cambia los src en index.html por import/require de cada imagen y lo agrega al codigo javascript
//6 lee los import/require que hizo html-loader y manda esas imagenes a dist/, se le configura a esas imagenes nombre con hash y ubicacion donde se crearan
//7 css-loader lee todo el css y style-loader lo pone en el html dentro de style tags
//8 se necesita babel para transformar es6 a es5, preset-env ayuda en definir a que browsers quieres que js sea compatible(por default 
//  es hasta los mas viejitos)