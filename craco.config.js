const webpack = require("webpack");
const CracoAlias = require("craco-alias");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  eslint: {
    enable: false,
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "@mui/styled-engine": "./node_modules/@mui/styled-engine-sc",
        },
      },
    },
  ],

  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // https://github.com/facebook/create-react-app/issues/11756#issuecomment-1001769356
      webpackConfig.resolve.fallback = {
        buffer: require.resolve("buffer"),
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
      };

      const minimizerIndex = webpackConfig.optimization.minimizer.findIndex(
        (item) => item instanceof TerserPlugin
      );
      if (minimizerIndex === -1) {
        throw Error("TerserPlugin not found in webpack config");
      }

      return webpackConfig;
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
        process: "process/browser",
      }),
    ],
  },
};
