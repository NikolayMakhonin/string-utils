'use strict'

module.exports = function (api) {
  api.cache(true)

  return {
    presets: [
      ['@babel/preset-env', {
        // useBuiltIns: 'usage', // TODO: add RegExp support, core-js doesn't work
        // corejs     : 3,
        loose: true, // simple set property instead readonly defineProperty; +support named export for rollup-plugin-commonjs
      }],
    ],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      ['@babel/plugin-transform-runtime', {
        corejs      : 3, // for support flatMap etc...
        useESModules: true,
      }],
      // preset/env no loose:
      ['@babel/plugin-transform-classes', {loose: false}],
    ],
  }
}
