const webpack = require("webpack");

module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: `${__dirname}`,
    filename: "./dist/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [["env", { modules: false }]],
              cacheDirectory: true
            }
          }
        ]
      }
    ]
  },
  plugins: [new webpack.optimize.UglifyJsPlugin()],
  devServer: {
    contentBase: "dist",
    port: 8081
  }
};
