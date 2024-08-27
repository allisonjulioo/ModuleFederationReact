const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const Dotenv = require('dotenv-webpack');
const deps = require('./package.json').dependencies;
const path = require('path');

module.exports = (_, argv) => {
  const isDevelopment = argv.mode === 'development';

  const pathContainer = isDevelopment ? 'http://localhost:3000' : path.join(__dirname, '../dist');

  return {
    mode: argv.mode,
    entry: './src/index.ts',
    cache: false,
    devtool: false,
    optimization: {
      minimize: true,
    },

    output: {
      publicPath: 'auto',
    },

    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        config: path.resolve(__dirname, 'src/config'),
        contexts: path.resolve(__dirname, 'src/contexts'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        models: path.resolve(__dirname, 'src/models'),
        services: path.resolve(__dirname, 'src/services'),
        constants: path.resolve(__dirname, 'src/constants'),
        models: path.resolve(__dirname, 'src/models'),
        utils: path.resolve(__dirname, 'src/utils'),
        assets: path.resolve(__dirname, 'src/assets'),
      },
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    },

    devServer: {
      port: 3001,
      open: false,
      historyApiFallback: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
      },
      historyApiFallback: true,
    },

    module: {
      rules: [
        {
          test: /\.m?js/,
          type: 'javascript/auto',
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
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
      new ModuleFederationPlugin({
        name: 'list',
        filename: 'remoteEntry.js',
        remotes: {
          container: `container@${pathContainer}/remoteEntry.js`,
        },
        exposes: {
          './App': './src/App.tsx',
        },
        shared: {
          ...deps,
          react: {
            eager: true,
            singleton: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            singleton: true,
            eager: true,
            requiredVersion: deps['react-dom'],
          },
          'react-router-dom': {
            singleton: true,
            eager: true,
            requiredVersion: deps['react-router-dom'],
          },
        },
      }),
      new HtmlWebPackPlugin({
        template: '../index.html',
      }),
      new Dotenv(),
    ],
  };
};
