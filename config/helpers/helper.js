const { join, resolve } = require('path');

const rootPath = resolve(__dirname, '../../');

exports.resolveFromRootPath = (...arguments_) => join(rootPath, ...arguments_);
