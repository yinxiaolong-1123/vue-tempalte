const path = require("path");
const isOnline = process.env.API_ENV === "production";

module.exports = {
  publicPath: "/project-template/",
  configureWebpack: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./node_modules/"),
        "@": path.resolve(__dirname, "./src"),
        api: path.resolve("./src/api"),
        common: path.resolve("./src/common"),
        components: path.resolve("./src/components"),
        config: path.resolve("./src/config"),
        locale: path.resolve("./src/locale"),
        router: path.resolve("./src/router"),
        store: path.resolve("./src/store"),
        assets: path.resolve("./src/assets"),
        views: path.resolve("./src/views"),
      },
    },
  },
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
  devServer: {
    proxy: {
      "": {
        changeOrigin: true,
        target: isOnline
          ? "http://www.ovopark.com/"
          : "http://dev.ovopark.com/",
      },
    }
  },
};
