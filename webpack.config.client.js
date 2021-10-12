const path = require('path');
const nodeExternals = require('webpack-node-externals');


module.exports = {
  entry: {main:'./client/main.tsx'},
  devtool:'inline-source-map',
  target:'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader','ts-loader'],
        exclude:path.resolve(__dirname, "node_modules")
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx','js']
  },
  output: {
    filename: 'client.generated.js',
    path: path.resolve(__dirname, './dist'),
  },
  externals: [ nodeExternals() ]
};