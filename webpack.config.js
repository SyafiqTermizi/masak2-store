const path = require("path");

module.exports = {
  context: __dirname,
  devtool: "inline-source-map",
  entry: {
    groups: "./src/groups",
    index: "./src/index",
    ingredients: "./src/ingredients",
    medias: "./src/medias",
    normalizer: "./src/normalizer",
    recipes: "./src/recipes",
    steps: "./src/steps",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve("./lib/"),
    filename: "[name].js",
  },
};
