const path = require('path');

module.exports = {
  entry: './client/src/index.jsx', // this is our entry for dependency graph
  output: {
    filename: 'main.js', // the name of our bundle, include this in our final index.html <script>
    path: path.resolve(__dirname, './client/dist'), // this is where we will put our final bundle
  },
  devtool: 'inline-source-map', // this is for debugging
  devServer: {
    contentBase: './public', // this is for hot-reloading, check npm run hot in package.json setup
    // can also specify port: 8080
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  mode: 'development',
};
