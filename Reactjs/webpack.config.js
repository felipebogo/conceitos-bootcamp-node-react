const path = require('path');

module.exports = {
  entry: path.resolve(__dirname,'src','index.js'),
  output : {
    path: path.resolve(__dirname,'public'),
    filename: 'bundle.js'
  },
  // Caminho onde estão os arquivos públicos da aplicação para serem usados pelo webpack-dev-server
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  module: {
    // loaders da aplicação
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          // injeta css interpretado pelo css-loader e injeta dentro do html
          {loader: 'style-loader'},
          // lê css e importações, como imagens por exemplo
          {loader: 'css-loader'},
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader'
        }
      },

    ]
  }
};