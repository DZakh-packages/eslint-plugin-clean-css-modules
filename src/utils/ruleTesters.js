import { RuleTester } from 'eslint';

export const ruleTester = new RuleTester({
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2015,
    ecmaFeatures: { jsx: true },
  },
});
