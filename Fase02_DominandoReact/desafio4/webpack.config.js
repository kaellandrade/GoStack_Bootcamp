const path = require("path");
module.exports = {
  entry: path.resolve(__dirname, "src", "Index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: [{ loader: "file-loader" }],
      },
    ],
  },
  devServer: {
    https: false,
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
};
