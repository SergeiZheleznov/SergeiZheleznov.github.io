const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!.git'],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[hash:5].css',
        chunkFilename: '[id].[hash:5].css'
      }),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  output: {
    filename: '[name].[hash:5].js',
    chunkFilename: '[id].[hash:5].css'
  },
});
