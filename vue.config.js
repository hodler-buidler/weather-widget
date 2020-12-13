module.exports = {
  filenameHashing: false,
  configureWebpack: {
    optimization: {
      splitChunks: false
    }
  },
  pages: {
    'weather-widget': {
      entry: 'src/main.js',
      filename: 'index.html'
    },
  },
  chainWebpack: config => {
    config.optimization.delete('splitChunks');
  },
  css: {
    extract: false,
  },
};