module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-recommended'
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'ecmaFeatures': {
      'modules': true,
      'jsx': true
    },
    'requireConfigFile': false,
    'parser': '@babel/eslint-parser'
  },
  'plugins': [
    'vue'
  ],
  'rules': {
    'indent': ['warn', 2],
    'linebreak-style': ['off'],
    'semi': ['off', 'never'],
    'quotes': [
      'error',
      'single',
      { allowTemplateLiterals: true }
    ],
    'eqeqeq': ['error', 'always'],
    'no-delete-var': 'off',
    'no-var': 'off',
    'max-depth': ['warn', 4],
    'camelcase': 'off',
    'no-extra-parens': 'warn',
    'no-unreachable': 'warn',
    'dot-notation': 'warn',
    'no-empty-function': 'off',
    'no-redeclare': 'warn',
    'no-return-assign': 'warn',
    'no-return-await': 'warn',
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'no-trailing-spaces': 'warn',
  }
}