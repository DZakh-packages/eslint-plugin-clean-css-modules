module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
        },
      },
    ],
  ],
  // env: {
  //   test: {
  //     presets: ['@babel/preset-env', '@babel/preset-react'],
  //     plugins: [
  //       '@babel/plugin-transform-runtime',
  //       '@babel/plugin-proposal-class-properties',
  //       'transform-es2015-modules-commonjs',
  //     ],
  //   },
  // },
};
