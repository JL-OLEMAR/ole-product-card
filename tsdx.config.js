const postcss = require('rollup-plugin-postcss');
const images = require('@rollup/plugin-image');

module.exports = {
  rollup(config, options) {
    config.plugins = [
      postcss({ modules: true }),
      images({ include: ['**/*.png', '**/*.jpg'] }),
      ...config.plugins,
    ];
    return config;
  },
};
