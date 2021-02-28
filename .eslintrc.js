module.exports = {
  extends: ['airbnb-base', 'plugin:sonarjs/recommended', 'plugin:prettier/recommended'],
  plugins: ['optimize-regex', 'sonarjs', 'no-loops', 'no-use-extend-native', 'prettier', 'jest'],
  env: {
    es6: true,
    'jest/globals': true,
  },
  root: true,
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
  rules: {
    'optimize-regex/optimize-regex': 'error',
    'no-loops/no-loops': 'error',
    'prettier/prettier': 'error',

    'linebreak-style': 'off',
    'no-underscore-dangle': 'off',
    camelcase: 'off',
    'prefer-rest-params': 'off',
    curly: ['error', 'all'],
    'arrow-body-style': ['error', 'always'],
    'no-implicit-coercion': ['error', { allow: [] }],
    'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: true }],
    'no-console': ['error', { allow: ['error'] }],
    'no-restricted-syntax': ['error', 'SequenceExpression'],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],

    // Avoid default export instead
    'import/prefer-default-export': 'off',

    'import/extensions': 'off',
  },
};
