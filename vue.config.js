const path  = require("path");

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                implementation: require('node-sass'),
            },
        },
    },
  outputDir: path.resolve(__dirname, "../node-vue-api/dist"),
  devServer: {
    proxy: "http://localhost:3000"
  },
}
