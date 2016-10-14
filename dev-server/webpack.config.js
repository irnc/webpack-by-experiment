const path = require('path');

module.exports = {
  entry: {
    app: ['./app/main.js']
  },
  output: {
    // `path` is omitted because we are not interested in using webpack for
    // bundle generation, we use `webpack-dev-server` only for experiments.
    publicPath: '/assets/',
    filename: 'bundle.js',
  },
};
