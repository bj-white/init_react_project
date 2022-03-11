const path = require('path');
const config = require('./config.js');

exports.assetsPath = (_path) => {
  return path.posix.join(config.assetsSubDirectory, _path);
};
