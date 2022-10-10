const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          data: ` @import "@/assets/_mixins.scss";`,
          // data: ` @import "@/assets/_variables.scss";`,
        },
      },
    },
  },
  chainWebpack: (config) => {
    config.performance.maxEntrypointSize(6000000).maxAssetSize(6000000);
  },
});
