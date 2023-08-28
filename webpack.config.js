const path = require('path');

module.exports = {
  entry: './src/lib/index.js', // The main entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle file name
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply the following loaders to .js files
        exclude: /node_modules/, // Exclude node_modules folder
        use: {
          loader: 'babel-loader', // Use Babel for transpiling ES6+ code
        },
      },
      {
        test: /\.css$/, // Apply the following loaders to .css files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
      },
    ],
  },
};
