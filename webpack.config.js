const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // точка входа
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
          filename: 'assets/[name][ext]', // Указываем путь сохранения
        },
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]', // Сохраняем шрифты в папку fonts
        },
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/ui-kit/colors-and-type.html', // исходный HTML файл
      filename: 'index.html', // имя выходного HTML файла
      inject: true, // Вставляет bundle.js автоматически
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 9000,
    hot: true, // HMR. Обновление части приложения без полной перезагрузки
    open: true, // Автоматически открывает браузер
    // historyApiFallback: {
    //   index: '/colors-and-type.html', // Указываем файл для открытия
    // },
  },
};
