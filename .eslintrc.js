module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
  ],
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 2017,
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
    'sourceType': 'module'
  },
  'rules': {
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1
      }
    ],
    'quotes': [
      'error',
      'single'
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'semi': [
      'error',
      'never'
    ],
    'func-style': [
      'off',
    ],
    'comma-dangle': [
      'error',
      'always-multiline'
    ],
  }
};