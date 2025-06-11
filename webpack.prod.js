const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map', // Untuk debugging production jika diperlukan
  
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    // Workbox hanya untuk production build, bukan development
    new InjectManifest({
      swSrc: path.resolve(__dirname, 'src/scripts/sw.js'),
      swDest: 'sw.bundle.js',
      // Tambahan konfigurasi untuk mencegah infinite loop
       exclude: [/\.map$/, /manifest$/, /\.htaccess$/, /\.json$/],
      // Hanya precache file yang diperlukan
      manifestTransforms: [
        (manifestEntries) => {
          const manifest = manifestEntries.map((entry) => {
            // Filter out files yang tidak perlu di-cache
            if (entry.url.endsWith('.map')) {
              return null;
            }
            return entry;
          }).filter(Boolean);
          
          return { manifest };
        },
      ],
    }),
  ],
  
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
});