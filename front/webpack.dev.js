const baseConfig = require("./webpack.config");
const merge = require("webpack-merge");
const {server} = require("../server/builder/server.js");

module.exports = merge(baseConfig, {
  devtool: "#eval-source-map",
  devServer: {
    hot: true,
    compress: true,
    port: 9000,
    open: true,
    proxy: {
      "*": "http://localhost:18888"
    },
    before() {
      server.run(18888, "n");
    }
  }
});
