import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

const bundlePlugins = [
  replace({
    values: {
      'process.env.npm_package_version': JSON.stringify(process.env.npm_package_version),
      'process.env.NODE_ENV': JSON.stringify('production'),
    },
    preventAssignment: true,
  }),
  nodeResolve(),
  commonjs(),
  babel({
    extensions: ['.js'],
    exclude: 'node_modules/**',
  }),
  production && terser(),
];

export default [
  {
    input: 'src/index.js',
    output: {
      file: './build/index.js',
      name: 'index',
      format: 'cjs',
    },
    plugins: bundlePlugins,
  },
];
