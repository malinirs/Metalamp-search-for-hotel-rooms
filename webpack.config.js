const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/main.js', // точка входа
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // выходная папка
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.html$/,
        use: 'html-loader', 
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]',
        },
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true, // делает HTML читаемым
        },
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.(png|ico|svg|xml|json)$/, // фавиконоки
        type: 'asset/resource',
        generator: {
          filename: 'assets/favicons/[name][ext]', // папка для фавиконок в dist
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pug/pages/ui-kit/colors-and-type.pug',
      filename: 'index.html', // имя выходного HTML файла
      inject: true, // вставляет bundle.js автоматически
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 9000,
    hot: true, // HMR. Обновление части приложения без полной перезагрузки
    open: true, // автоматически открывает браузер
  },
};
