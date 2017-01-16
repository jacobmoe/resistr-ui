const path = require('path')

module.exports = {
  entry: [path.resolve(__dirname, 'src/app.js')],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react', 'stage-1']
      }
    }]
  }

}
