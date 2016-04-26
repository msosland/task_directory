module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './app/index.jsx'
  ],
  output: {
    path: './public/',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
