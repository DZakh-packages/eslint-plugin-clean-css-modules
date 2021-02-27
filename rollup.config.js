import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

const bundlePlugins = [
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
    input: 'lib/index.js',
    output: {
      file: './build/index.js',
      name: 'index',
      format: 'cjs',
    },
    plugins: bundlePlugins,
  },
];
