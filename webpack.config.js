const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // точка входа
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist') // выходная папка
  },
  module: {
    rules: [
      {
        test: /\.js$/, // обработка JavaScript файлов
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'] // использование пресета Babel
          }
        }
      },
      {
        test: /\.css$/, // обработка CSS файлов
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // обработка изображений
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]', // сохраняет путь и имена файлов
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // исходный HTML файл
      filename: 'index.html', // имя выходного HTML файла
    }),
  ],
  devtool: 'source-map', // для отладки
  mode: 'development', // режим разработки
};
