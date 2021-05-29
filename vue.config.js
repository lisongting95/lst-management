module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://47.114.176.255/v1",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
  },
};
