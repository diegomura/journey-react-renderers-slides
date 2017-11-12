const postcssCssNext = require('postcss-cssnext');
const postcssImport = require('postcss-import');
const postcssFor = require('postcss-for');

module.exports = {
  plugins: [
    postcssCssNext,
    postcssImport,
    postcssFor
  ]
};
