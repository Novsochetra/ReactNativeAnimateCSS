module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@component': ['./src/component/'],
          '@core': ['./src/core/'],
        },
      },
    ],

    'react-native-reanimated/plugin',
  ],
};
