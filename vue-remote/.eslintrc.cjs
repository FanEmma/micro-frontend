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
    'vue/max-attributes-per-line': ['warn', { singleline: 1, multiline: 1 }],
    'vue/multi-word-component-names': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/no-dupe-keys': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/no-v-html': 'off',
    'vue/html-indent': ['warn', 2, {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
      'ignores': []
    }],
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'always',
        'normal': 'never',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }],
    'vue/v-slot-style': ['error', {
      'atComponent': 'longform',
      'default': 'longform',
      'named': 'longform',
    }],
    'vue/v-on-event-hyphenation': ['error', 'always', {
      'autofix': true,
      'ignore': []
    }]
  }
}