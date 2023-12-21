const path  = require("path");

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                implementation: require('node-sass'),
            },
        },
    },
  devServer: {
    proxy: "http://localhost:3000"
  },
}
