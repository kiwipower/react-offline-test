const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const host = "localhost";
const port = 8080;

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "src"),
  target: "web",
  entry: {
    app: ["./index.tsx"]
  },
  output: {
    filename: "[name]-[hash:6].bundle.js",
    path: path.join(__dirname, "./build/www"),
    publicPath: `http://${host}:${port}/`
  },
  resolve: {
    mainFields: ["browser", "module", "main"],
    extensions: [".js", ".json", ".jsx", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.(t|j)s(x?)$/,
        exclude: /node_modules/,
        use: "ts-loader"
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: "file-loader?name=img/[name]-[hash:6].[ext]"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name]-[hash:6].css",
      chunkFilename: "[id].css",
      debug: true
    })
  ],
  devServer: {
    port,
    host,
    contentBase: "/src"
  }
};
