module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        extensions: ['.ts', '.tsx', '.svg'],
        alias: {
          assets: './src/assets',
          atoms: './src/components/atoms',
          molecules: './src/components/molecules',
          organisms: './src/components/organisms',
          screens: './src/components/screens',
          types: './src/types',
          helpers: './src/helpers',
          layouts: './src/components/layouts',
        },
      },
    ],
  ],
};
