const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = (_, argv) => {
  const isDevelopment = argv.mode === 'development';

  const pathContainer = isDevelopment ? 'http://localhost:3000' : './';

  const pathList = isDevelopment ? 'http://localhost:3001' : './list';

  const pathCart = isDevelopment ? 'http://localhost:3002' : './cart';

  const pathSuccess = isDevelopment ? 'http://localhost:3003' : './success';

  return {
    mode: argv.mode,
    entry: './src/index.ts',
    cache: false,
    devtool: false,
    optimization: {
      minimize: true,
    },

    output: {
      publicPath: '/',
    },

    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        config: path.resolve(__dirname, 'src/config'),
        contexts: path.resolve(__dirname, 'src/contexts'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        models: path.resolve(__dirname, 'src/models'),
        services: path.resolve(__dirname, 'src/services'),
        utils: path.resolve(__dirname, 'src/utils'),
        theme: path.resolve(__dirname, 'src/theme'),
      },
      extensions: ['', '.tsx', '.ts', '.jsx', '.js', '.json'],
    },

    devServer: {
      port: 3000,
      open: false,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },

      static: {
        directory: path.join(__dirname, 'dist'),
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
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
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
        name: 'container',
        filename: 'remoteEntry.js',
        remotes: {
          list: `list@${pathList}/remoteEntry.js`,
          cart: `cart@${pathCart}/remoteEntry.js`,
          success: `success@${pathSuccess}/remoteEntry.js`,
          container: `container@${pathContainer}/remoteEntry.js`,
        },
        exposes: {
          './ContainerApp': './src/components/ContainerApp.tsx',
          './shared': './src/components/shared/index.ts',
          './CartContext': './src/contexts/CartContext.tsx',
          './formatCurrencyBRL': './src/utils/formatCurrencyBRL.ts',
        },
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: deps['react-dom'],
          },
          'react-router-dom': {
            singleton: true,
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
