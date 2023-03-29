module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@layouts': './src/layouts',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@styles': './src/styles',
            '@theme': './src/theme',
          }
        }
      ]
    ]
  };
};
