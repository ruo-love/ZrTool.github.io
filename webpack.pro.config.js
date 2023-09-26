const path = require("path");
console.log(process.env.NODE_ENV);
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "production",
  entry: path.join(__dirname, "./src/package/index.ts"),
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "[name].js",
    clean: true,
    library: {
      name: "@zrcode/jstool",
      type: "umd",
    },
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules|\.test\.ts$)/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
      },
    ],
  },
  plugins: [new BundleAnalyzerPlugin()],
  optimization: {
    splitChunks: {
      // 表示选择哪些 chunks 进行分割，可选值有：async，initial和all
      chunks: "all",
      // 表示新分离出的chunk必须大于等于minSize，默认为30000，约30kb。
      minSize: 1,
      // 表示一个模块至少应被minChunks个chunk所包含才能分割。默认为1。
      minChunks: 1,

      name: false,
      // cacheGroups 下可以可以配置多个组，每个组根据test设置条件，符合test条件的模块，就分配到该组。模块可以被多个组引用，但最终会根据priority来决定打包到哪个组中。默认将所有来自 node_modules目录的模块打包至vendors组，将两个以上的chunk所共享的模块打包至default组。
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        //
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
};
