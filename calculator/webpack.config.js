const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/calculator.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "calculator.js",
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, use: "babel-loader" }],
  },
};
