const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: 'development',   // ✅ Add this line

  entry: "./js/main.ts",
  devtool: "inline-source-map",

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },

  devServer: {
    static: "./dist"  // ✅ updated: `contentBase` is deprecated in webpack-dev-server v4+
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
