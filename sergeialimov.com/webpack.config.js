const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ConfigWebpackPlugin = require('config-webpack');
// const ManifestPlugin = require('webpack-manifest-plugin');
const config = require('config');
const get = require('lodash/get');

const outputFolder = 'build';

/*
When running production, we are not required to set up webpack part of config,
as this part is needed only for dev server
*/
const host = get(config, 'webpack.host');
const port = get(config, 'webpack.port');

module.exports = (env, argv) => ({
  entry: './public/index.js',
  output: {
    publicPath: '/',
    path: path.join(__dirname, outputFolder),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      '@root': path.resolve(__dirname),
      '@src': path.resolve(__dirname, 'src/'),
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name]/[name].[ext]',
              /*
              having this enabled will cause a bug
              that does not allow adding fonts to the app correctly
              */
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.png',
    }),
    new ConfigWebpackPlugin(),
    new webpack.DefinePlugin({
      DEVELOPMENT: JSON.stringify(argv.mode === 'development'),
    }),
    // new ManifestPlugin({ filename: './public/manifest.json' }),
  ],
  // this part of config is needed only for development env
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, outputFolder),
    publicPath: '/', // ensures correct client side routing with webpack-dev-server
    host,
    port,
    public: `${host}:${port}`,
    allowedHosts: [
      host,
    ],
    disableHostCheck: true, // ensures that webpack-dev-server works from remote machine
    historyApiFallback: true, // ensures correct client side routing with webpack-dev-server
  },
});
