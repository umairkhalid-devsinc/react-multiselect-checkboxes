const path = require('path')
module.exports = {
    entry: './lib/index.js', // or the appropriate entry point for your application
    // other webpack configurations...
    resolve: {
        extensions: ['.js', '.jsx'], // Add any necessary file extensions
        modules: [path.resolve(__dirname, 'src'), 'node_modules'], // Specify the source directory
    },
//   resolve: {
//     alias: {
//         src: path.resolve(__dirname, 'src')
//     }
//   }
}