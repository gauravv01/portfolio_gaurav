const path = require('path');

module.exports = function override(config, env) {
  config.resolve.alias = {
    ...config.resolve.alias,
    'react/jsx-runtime': path.resolve('./node_modules/react/jsx-runtime.js'),
  };
  return config;
};
